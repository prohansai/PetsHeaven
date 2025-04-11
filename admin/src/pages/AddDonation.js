import React, { useState } from 'react';
import axios from 'axios';
import UserSearch from '../components/UserSearch';
import './AddDonation.css';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const AddDonation = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedUser) {
            toast.error('Please select a user');
            return;
        }

        const donationData = {
            personId: selectedUser._id,
            amount,
            date,
            message,
            paymentMethod,
        };

        try {
            const response = await axios.post('https://petsheaven-backend.onrender.com/api/donations', donationData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response && response.status >= 200 && response.status < 300) {
                toast.success('Donation added successfully!');
                // Reset form fields and selected user after success
                setAmount('');
                setDate('');
                setMessage('');
                setPaymentMethod('');
                setSelectedUser(null); // Reset selected user
            }
        } catch (error) {
            console.error('Failed to add donation:', error);
            toast.error('Failed to add donation');
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Add Donation</h2>
            <UserSearch onSelectUser={setSelectedUser} />
            {selectedUser ? <p>Selected User: {selectedUser.name}</p> : <p>No user selected</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Payment Method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                />
                <button type="submit">Submit Donation</button>
            </form>
        </div>
    );
};

export default AddDonation;
