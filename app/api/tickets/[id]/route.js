// This file defines an API route in a Next.js application that returns a list of tickets.
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';    // Ensures the route is always dynamic

export async function GET(_, { params }) {
    const id  = params.id; // Extract the 'id' from the request parameters
    const res = await fetch(`http://localhost:4000/tickets/${id}`)
    // Example: return a JSON response with tickets
    const tickets = await res.json()


    if(!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch tickets' }, {
            status: 400
        });
    }

    return NextResponse.json(tickets, {
        status: 200,       
    })
}