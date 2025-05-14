import { notFound } from "next/navigation";

export const dynamicParams = true;
// This is a dynamic route that will be generated for each ticket

export async function generateStaticParams() {
    const res = await fetch('https://localhost:4000/tickets');
    const tickets = await res.json();
    // Generate static params for each ticket
    // This will create a static page for each ticket
    // This is useful for SEO and performance
    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

// This is a dynamic route that will be generated for each ticket
// It will fetch the ticket data from the API and display it
// It will also revalidate the data every 60 seconds
async function getTicket(id) {

    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch('https://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    })
    if (!res.ok) {
        notFound();
        // This will return a 404 page if the ticket is not found
    }

    return res.json();
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
                </div>
            </div>
        </main>
    );
}