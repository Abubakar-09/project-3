import { NextResponse } from "next/server";

let wishlist = [];

export function GET() {
    return NextResponse.json(wishlist);
}

export async function POST(req) {
    let data = await req.json();

    // Check if the item already exists in the wishlist
    const existingItem = wishlist.find(item =>
        item.name === data.name && item.type === data.type
    );

    if (!existingItem) {
        // Set the wishlist property to true
        data.wishlist = true;
        // Add the new item to the wishlist
        wishlist.push(data);
        //sending update data on products
        const res = await fetch('https://funcecommerce.vercel.app/api/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from: 'wishlist', wishlist })
        });
    }

    return NextResponse.json({ success: true });
}


export async function DELETE(req) {
        // Parse the request body to get the data
        const data = await req.json();

        // Find the index of the item to be removed
        const index = wishlist.findIndex(
            (item) => item.name === data.name && item.type === data.type
        );

        if (index !== -1) {
            // Remove the item from the wishlist
            wishlist.splice(index, 1);
        } else {
            return NextResponse.json({ success: false, message: "Item not found in wishlist." });
        }

        // Send the updated wishlist to the products API
        const res = await fetch('https://funcecommerce.vercel.app/api/products', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ from: 'wishlist', data }),
        });


        return NextResponse.json({ success: true, message: "Item removed successfully." });
    
}
