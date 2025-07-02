// This file defines an API route in a Next.js application that returns a list of tickets.
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';    // Ensures the route is always dynamic

export async function GET() {
    const res = await fetch('http://localhost:4000/tickets'  )
    // Example: return a JSON response with tickets
    const tickets = await res.json()

    return NextResponse.json(tickets, {
        status: 200,       
    })
}


export async function POST(request) {
    const ticket = await request.json();    

    const res = await fetch('http://localhost:4000/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticket),
    })

    const newTicket = await res.json();

    return NextResponse.json(newTicket, {
        status: 201,
    })
}