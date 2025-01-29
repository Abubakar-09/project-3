import { NextResponse } from "next/server";

let products = [
    {
        name: 'product_01',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_01.jpg',
        type: 'Featured_Products',
        stock: 4
    },
    {
        name: 'product_02',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_02.jpg',
        type: 'New_Arrival',
        stock: 4
    },
    {
        name: 'product_03',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_03.jpg',
        type: 'Featured_Products',
        stock: 4
    },
    {
        name: 'product_04',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_04.jpg',
        type: 'New_Arrival',
        stock: 4
    },
    {
        name: 'product_05',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_05.jpg',
        type: 'Featured_Products',
        stock: 4
    },
    {
        name: 'product_06',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_06.jpg',
        type: 'New_Arrival',
        stock: 4
    },
    {
        name: 'product_07',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_07.jpg',
        type: 'Featured_Products',
        stock: 4
    },
    {
        name: 'product_08',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_04.jpg',
        type: 'New_Arrival',
        stock: 4
    },
    {
        name: 'product_09',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_03.jpg',
        type: 'Featured_Products',
        stock: 4
    },
    {
        name: 'product_10',
        price: 109,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium culpa repellat autem vero distinctio amet asperiores dolor illum excepturi iste?',
        wishlist: false,
        img: '/product_08.jpg',
        type: 'Featured_Products',
        stock: 4
    }
]

export function GET() {
    return NextResponse.json(products)
}

export async function PUT(req) {
    // Parse the incoming request body
    const data = await req.json();

    // Check if the request is coming from the wishlist
    if (data.from === 'wishlist' && Array.isArray(data.wishlist)) {
        const wishlist = data.wishlist;

        // Update the `products` array based on the wishlist
        wishlist.forEach((wishlistItem) => {
            if (!wishlistItem) return;

            products.forEach((product) => {
                if (
                    product.name === wishlistItem.name &&
                    product.type === wishlistItem.type
                ) {
                    product.wishlist = true; // Update the wishlist flag
                }
            });
        });
    }

    // Return a success response
    return NextResponse.json({ success: true });
}

export async function DELETE(req) {
    // Parse the incoming request body
    const got_data = await req.json();
    const element = got_data.data; // Element is an object

    // Find the item and update its wishlist property
    const item = products.find(
        (product) => product.name === element.name && product.type === element.type
    );

    if (item) {
        item.wishlist = false; // Set the wishlist property to false
    } else {
        return NextResponse.json({ success: false, message: "Item not found in products." });
    }

    // Return a success response
    return NextResponse.json({ success: true, message: "Item updated successfully." });
}

export async function POST(req) {
    let body = await req.json();
    products = body;
    return NextResponse.json(true);
}