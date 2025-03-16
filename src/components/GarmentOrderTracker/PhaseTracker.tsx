import React from 'react';
import CircularProgressIndicator from './CircularProgressIndicator';
import { PhaseInfo } from './types';

interface PhaseTrackerProps {
  phases: PhaseInfo[];
  phaseProgress: { [key: string]: number };
  onPhaseClick: (phaseName: string) => void;
}

// Function to determine the color class based on progress percentage
const getProgressColorClass = (progress: number): string => {
  if (progress === 100) return 'text-green-600'; // Completed
  if (progress >= 70) return 'text-green-500';   // High progress
  if (progress >= 30) return 'text-yellow-500';  // Medium progress
  return 'text-red-500';                         // Low progress
};

const PhaseTracker: React.FC<PhaseTrackerProps> = ({ 
  phases, 
  phaseProgress, 
  onPhaseClick 
}) => {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gray-50 overflow-x-auto">
      <div className="relative min-w-max sm:min-w-0">
        {/* Connecting line - centered with the circles */}
        <div className="h-1.5 bg-gray-300 absolute top-[16px] left-6 right-6 z-0 hidden sm:block"></div>
        
        {/* Phase Indicators */}
        <div className="flex flex-col sm:flex-row sm:justify-between relative z-10 gap-4 sm:gap-0">
          {phases.map((phase, index) => {
            const progress = phaseProgress[phase.name] || 0;
            
            return (
              <div key={phase.name} className="flex items-center sm:flex-col sm:items-center gap-3 sm:gap-0">
                <CircularProgressIndicator 
                  progress={phase.completed ? 100 : progress}
                  index={index}
                  isActive={phase.isActive}
                  onClick={() => onPhaseClick(phase.name)}
                />
                
                <div className="flex flex-col sm:items-center">
                  <span className={`text-sm font-medium ${phase.isActive ? 'text-pink-500' : 'text-gray-500'}`}>
                    {phase.name}
                  </span>
                  <span className={`text-xs sm:mt-1 font-medium ${getProgressColorClass(progress)}`}>
                    {progress}% complete
                  </span>
                  
                  {phase.isActive && phase.timeLeft && (
                    <div className="mt-2 border-2 border-green-500 rounded p-1 text-xs text-green-600">
                      Time left: {phase.timeLeft}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhaseTracker;