import { NextResponse } from "next/server"

const cart = []

// Get all cart items
export async function GET() {
    return NextResponse.json(cart)
}

// Add a new item to the cart
export async function POST(req) {
    let data = await req.json()
    cart.push(data)
    return NextResponse.json({ message: 'Item added successfully', cart })
}

// Remove the first matching item from the cart
export async function PUT(req) {
    let data = await req.json()

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === data.name && cart[i].price === data.price) {
            cart.splice(i, 1)
            return NextResponse.json({ data:cart })
        }
    }

    return NextResponse.json({ message: 'Item not found in the cart' }, { status: 404 })
}
