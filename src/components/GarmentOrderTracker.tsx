// Use a direct import of the component for cleaner import path
import React from 'react';
import GarmentOrderTrackerContainer from './GarmentOrderTracker/GarmentOrderTracker';

// Re-export the component with the original name
const GarmentOrderTracker = () => {
  return <GarmentOrderTrackerContainer />;
};

export default GarmentOrderTracker;
