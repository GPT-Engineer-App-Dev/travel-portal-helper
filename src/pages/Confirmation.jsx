import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Confirmation = () => {
  const location = useLocation();
  const { flight, form } = location.state;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Booking Confirmation</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p><strong>Airline:</strong> {flight.airline}</p>
            <p><strong>Departure:</strong> {flight.departure}</p>
            <p><strong>Arrival:</strong> {flight.arrival}</p>
            <p><strong>Date:</strong> {flight.date}</p>
          </div>
          <div>
            <p><strong>Check-in Date:</strong> {form.checkin}</p>
            <p><strong>Check-out Date:</strong> {form.checkout}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;