import { NextResponse } from "next/server"

const Products = [
    {
        name: 'golves',
        price: 897,
        product_details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestias laborum suscipit provident tempora a voluptates iure aliquam quas nobis!'
    },
    {
        name: 'screw',
        price: 87,
        product_details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestias laborum suscipit provident tempora a voluptates iure aliquam quas nobis!'
    },
    {
        name: 'moniter',
        price: 10000,
        product_details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestias laborum suscipit provident tempora a voluptates iure aliquam quas nobis!'
    },
    {
        name: 'cpu',
        price: 20000,
        product_details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestias laborum suscipit provident tempora a voluptates iure aliquam quas nobis!'
    }]

export async function GET() {
    return NextResponse.json(Products)
}