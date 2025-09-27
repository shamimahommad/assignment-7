import { use, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';

const dataPromise = fetch("/data.json").then(response => response.json());

const CustomerTickets = ({ setInProgressCount, setResolvedCount }) => {
    const data = use(dataPromise);

    const [allTickets, setAllTickets] = useState(() => {
        const openTickets = data.filter(ticket => ticket.status === "Open" || ticket.status === "In Progress");
        return openTickets;
    });

    const [selectedTickets, setSelectedTickets] = useState(() => {
        const inProgressData = data.filter(ticket => ticket.status === "In Progress");
        setInProgressCount(inProgressData.length);
        return inProgressData;
    });

    const [resolvedTickets, setResolvedTickets] = useState(() => {
        const resolvedData = data.filter(ticket => ticket.status === "Resolved");
        setResolvedCount(resolvedData.length);
        return resolvedData;
    });

    const handleCardClick = (ticket) => {
        if (ticket.status === "In Progress") {
            toast.warn(`Ticket "${ticket.title}" is already in progress!`);
            return;
        }
        
        const updatedAllTickets = allTickets.map(t =>
            t.id === ticket.id ? { ...t, status: "In Progress" } : t
        );
        setAllTickets(updatedAllTickets);

        
        if (!selectedTickets.find(t => t.id === ticket.id)) {
            const updatedSelectedTickets = [...selectedTickets, { ...ticket, status: "In Progress" }];
            setSelectedTickets(updatedSelectedTickets);
            setInProgressCount(updatedSelectedTickets.length);
        }

        toast.success(`${ticket.title} In Process`);
    };

    const handleCompleteTicket = (ticket) => {
       
        const updatedAllTickets = allTickets.filter(t => t.id !== ticket.id);
        setAllTickets(updatedAllTickets);

        
        const updatedSelectedTickets = selectedTickets.filter(t => t.id !== ticket.id);
        setSelectedTickets(updatedSelectedTickets);

        const updatedResolvedTickets = [...resolvedTickets, { ...ticket, status: "Resolved" }];
        setResolvedTickets(updatedResolvedTickets);

        
        setInProgressCount(updatedSelectedTickets.length);
        setResolvedCount(updatedResolvedTickets.length);

        toast.success(`${ticket.title} resolved!`);
    };

    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <div className='col-span-2'>
                    <h2 className='text-4xl font-bold mb-5'>Customer Tickets</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {allTickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => handleCardClick(ticket)}
                            >
                                <div className='flex justify-between items-center mb-2'>
                                    <h3 className="text-lg font-semibold">{ticket.title}</h3>
                                    <span className={`badge ${ticket.status === "Open" ? "badge-success" : ticket.status === "In Progress" ? "bg-yellow-400 text-black" : "badge-ghost"}`}>
                                        {ticket.status}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>
                                <div className='flex justify-between items-center text-xs text-gray-500'>
                                    <div className='flex items-center gap-2'>
                                        <span className={`font-bold ${ticket.priority === 'High' ? 'text-red-500' : ticket.priority === 'Medium' ? 'text-orange-500' : 'text-green-500'}`}>
                                            {ticket.priority.toUpperCase()} PRIORITY
                                        </span>
                                        <span>#{ticket.id}</span>
                                        <span>{ticket.customer}</span>
                                    </div>
                                    <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col-span-1'>
                    <h2 className='text-4xl font-bold mb-5'>Selected Tickets</h2>
                    <div className="space-y-3 mb-5 bg-gray-50 shadow p-5 rounded-xl">
                        {selectedTickets.length > 0 ? (
                            selectedTickets.map(ticket => (
                                <div key={ticket.id} className="bg-white p-4 rounded-lg shadow">
                                    <h4 className="font-semibold mb-2">{ticket.title}</h4>
                                    <button
                                        onClick={() => handleCompleteTicket(ticket)}
                                        className="btn btn-primary w-full bg-green-500 hover:bg-green-600 text-white border-0"
                                    >
                                        Open
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 bg-white p-3 rounded-lg shadow">Click a ticket to select it.</p>
                        )}
                    </div>

                    <h2 className='text-4xl font-bold mb-5'>Resolved List</h2>
                    <div className="space-y-3 bg-gray-50 shadow p-5 rounded-xl">
                        {resolvedTickets.length === 0 ? (
                            <div className="text-gray-700 bg-white p-3 rounded-lg shadow">
                                No Resolved Task Yet
                            </div>
                        ) : (
                            resolvedTickets.map(ticket => (
                                <div key={ticket.id} className="bg-white p-3 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-700">
                                        {ticket.title} (Resolved)
                                    </h4>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CustomerTickets;