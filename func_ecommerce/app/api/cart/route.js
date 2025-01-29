import { NextResponse } from "next/server"

let cart =[
]

export function GET() {
    return NextResponse.json(cart)
}

export async function POST(req){
    let body = await req.json()
    cart.push(body)
    return NextResponse.json(true)
}

export async function DELETE(req) {
    let body = await req.json();
    // Find the index of the first item in the cart that matches the criteria
    const index = cart.findIndex(
        item =>
            item.name === body.name &&
            item.type === body.type &&
            item.price === body.price
    );

    // If the item exists, remove it
    if (index !== -1) {
        cart.splice(index, 1);
        return NextResponse.json({ success: true, message: "Item removed" });
    }

    return NextResponse.json({ success: false, message: "Item not found" });
}

export async function PUT(req) {
    let body = await req.json();
    cart = [];
    return NextResponse.json(true);
}