import { NextResponse } from "next/server";

let orders = [];

// GET endpoint to retrieve orders
export function GET() {
    return NextResponse.json(orders);
}

// Helper function to fetch data from an API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
    }
}

// Helper function to update product stock
function updateProductStock(products, processedCart) {
    let updatedProducts = [];

    products.forEach(product => {
        // Check if the product exists in the processedCart
        let cartItem = processedCart.find(item =>
            item.name == product.name &&
            item.price == product.price &&
            item.type == product.type
        );

        if (cartItem) {
            // Update the stock manually, ensuring it doesn't go below 0
            let newStock = product.stock - cartItem.numberOfElements;
            if(newStock<0){
                newStock = 0
            }

            updatedProducts.push({
                ...product,
                stock: newStock,
            });
        }

        if (!cartItem) {
            // Add the original product if not in the cart
            updatedProducts.push({ ...product});
        }
    });

    return updatedProducts;
}




// Helper function to check stock availability
function checkStockAvailability(processedCart, products) {
    const exceededItems = [];
    processedCart.forEach((cartItem) => {
        const product = products.find(
            (prod) =>
                prod.name === cartItem.name &&
                prod.price === cartItem.price &&
                prod.type === cartItem.type
        );

        if (product) {
            const excessQuantity = cartItem.numberOfElements - product.stock;
            if (excessQuantity > 0) {
                exceededItems.push({
                    ...cartItem,
                    excessQuantity,
                });
            }
        }
    });
    return exceededItems;
}

// Helper function to process cart items
function processCartItems(cartItems) {
    const processedCart = [];
    cartItems.forEach((item) => {
        const existingItem = processedCart.find(
            (cartItem) =>
                cartItem.name === item.name &&
                cartItem.price === item.price &&
                cartItem.type === item.type
        );

        if (existingItem) {
            existingItem.numberOfElements += 1;
        } else {
            processedCart.push({ ...item, numberOfElements: 1 });
        }
    });
    return processedCart;
}


// POST endpoint to process orders
export async function POST(req) {
    const body = await req.json();

    // Fetch cart items and products
    const cartItems = await fetchData("http://localhost:3000/api/cart");
    const products = await fetchData("http://localhost:3000/api/products");

    // Process cart items
    const processedCart = processCartItems(cartItems);

    // Check stock availability
    const exceededItems = checkStockAvailability(processedCart, products);

    // If any items exceed stock, return them
    if (exceededItems.length > 0) {
        orders.push({ status: false, arr:exceededItems, id: `${body.phone}` });

        // Clear the cart
        await fetch("http://localhost:3000/api/cart", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([]),
        });

        return NextResponse.json({
            success: false,
            message: "Some items exceed stock limits.",
            exceededItems,
        });
    }

    // Update product stock
    const updatedProducts = updateProductStock(products, processedCart);

    // Add successful order to orders
    orders.push({ status: true, id: `${body.phone}`, arr:processedCart });

    // Send updated products array to the API
    await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProducts),
    });

    // Clear the cart
    await fetch("http://localhost:3000/api/cart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([]),
    });

    return NextResponse.json({ success: true, message: "Stock updated successfully." });

}