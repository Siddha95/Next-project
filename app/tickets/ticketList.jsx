async function getTickets() {
    const res = await fetch('https://localhost:4000/tickets')

    return res.json();
}

export default async function TicketList() {

    const tickets = await getTickets();
    return (
        <div>
            <>
                {tickets.map((ticket) => (
                    <div key={ticket.id}className="card my-5">
                        <h3>{ticket.title}</h3> 
                        <p>{ticket.body.slice(0,200)}...</p>
                        <div className=?????????
                        <p>{ticket.status}</p>
                    </div>
                ))}
            </>
        </div>
    );
}
