"use client"
import GarmentOrderTracker from '@/components/GarmentOrderTracker';

export default function TrackerPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Garment Order Tracking System</h1>
      <GarmentOrderTracker />
    </div>
  );
}
