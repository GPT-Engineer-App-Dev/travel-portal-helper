import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [flights, setFlights] = useState([]);
  const [form, setForm] = useState({
    departure: '',
    arrival: '',
    checkin: '',
    checkout: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const searchFlights = () => {
    // Mock flight data
    const availableFlights = [
      { id: 1, airline: 'Airline A', departure: form.departure, arrival: form.arrival, date: form.checkin },
      { id: 2, airline: 'Airline B', departure: form.departure, arrival: form.arrival, date: form.checkin },
    ];
    setFlights(availableFlights);
  };

  const confirmBooking = (flight) => {
    navigate('/confirmation', { state: { flight, form } });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Travel Booking</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Book Your Travel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="departure">Departure Location</Label>
            <Input id="departure" placeholder="Enter departure location" value={form.departure} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="arrival">Arrival Location</Label>
            <Input id="arrival" placeholder="Enter arrival location" value={form.arrival} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="checkin">Check-in Date</Label>
            <Input id="checkin" type="date" value={form.checkin} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="checkout">Check-out Date</Label>
            <Input id="checkout" type="date" value={form.checkout} onChange={handleChange} />
          </div>
          <Button className="w-full" onClick={searchFlights}>Search</Button>
        </CardContent>
      </Card>
      {flights.length > 0 && (
        <div className="w-full max-w-md mt-6">
          <h2 className="text-2xl font-bold">Available Flights</h2>
          <ul className="space-y-4">
            {flights.map(flight => (
              <li key={flight.id} className="border p-4 rounded">
                <p><strong>Airline:</strong> {flight.airline}</p>
                <p><strong>Departure:</strong> {flight.departure}</p>
                <p><strong>Arrival:</strong> {flight.arrival}</p>
                <p><strong>Date:</strong> {flight.date}</p>
                <Button className="mt-2" onClick={() => confirmBooking(flight)}>Confirm Booking</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Index;