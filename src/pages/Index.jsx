import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Travel Booking</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Book Your Travel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Input id="destination" placeholder="Enter your destination" />
          </div>
          <div>
            <Label htmlFor="checkin">Check-in Date</Label>
            <Input id="checkin" type="date" />
          </div>
          <div>
            <Label htmlFor="checkout">Check-out Date</Label>
            <Input id="checkout" type="date" />
          </div>
          <Button className="w-full">Search</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;