import React, { useState } from 'react';

const GarmentOrderTracker = () => {
  // Sample data based on provided code
  const phases = [
    "Costing", 
    "Confirmation", 
    "Co-ordination", 
    "Raw Material", 
    "Pre-production", 
    "Production", 
    "Closing"
  ];
  
  // Current active phase for the demo
  const [activePhase, setActivePhase] = useState("Pre-production");
  
  // State to track user changes to task status
  const [taskStatuses, setTaskStatuses] = useState({});
  
  // Sample detailed status data
  const statusData = {
    "Costing": [
      { task: "Initial Data & Info Reception from Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "SMV, Efficiency & Thread Consumption", responsible: "Industrial Engineering", dataResponsible: "M&M", completed: true },
      { task: "Fabric Consumption", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true },
      { task: "Materials Price Inquiry", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "Negotiation with Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "Order & Initial Price Fixation", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
    ],
    "Confirmation": [
      { task: "Reception of PO with Details", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "Final Costing with Approval", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "Fabric Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
      { task: "Trims Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true },
    ],
    "Co-ordination": [
      { task: "Technical File Preparation", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true },
      { task: "Materials Arrival Planning", responsible: "Planning", dataResponsible: "Planning", completed: true },
      { task: "Production Planning", responsible: "Planning", dataResponsible: "Planning", completed: false },
    ],
    "Raw Material": [
      { task: "Fabric Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true },
      { task: "Trims & Accessories Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true },
      { task: "Materials Approval", responsible: "Quality Control", dataResponsible: "QC", completed: false },
    ],
    "Pre-production": [
      { task: "Planning of PP Sample", responsible: "Planning", dataResponsible: "MIS", completed: true },
      { task: "Procession of PP Sample", responsible: "Sample Section", dataResponsible: "MIS", completed: true },
      { task: "Reception of PP Comments", responsible: "Sample Section", dataResponsible: "MIS", completed: true },
      { task: "Planning of Size Set Sample", responsible: "Planning", dataResponsible: "MIS", completed: true },
      { task: "Procession of Size Set Sample", responsible: "Production", dataResponsible: "MIS", completed: false },
      { task: "Offering of PP Meeting", responsible: "Planning", dataResponsible: "MIS", completed: false },
      { task: "Procession of PP Meeting", responsible: "Quality Control", dataResponsible: "MIS", completed: false },
    ],
    "Production": [
      { task: "Cutting Process", responsible: "Cutting Section", dataResponsible: "Production", completed: false },
      { task: "Sewing Process", responsible: "Sewing Section", dataResponsible: "Production", completed: false },
      { task: "Quality Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false },
      { task: "Finishing & Packaging", responsible: "Finishing Section", dataResponsible: "Production", completed: false },
    ],
    "Closing": [
      { task: "Final Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false },
      { task: "Documentation Completion", responsible: "Merchandising", dataResponsible: "M&M", completed: false },
      { task: "Shipping Arrangements", responsible: "Logistics", dataResponsible: "Logistics", completed: false },
      { task: "Invoice Generation", responsible: "Finance", dataResponsible: "Finance", completed: false },
    ]
  };
  
  // Function to toggle task completion status
  const toggleTaskStatus = (phase, taskIndex) => {
    const taskKey = `${phase}-${taskIndex}`;
    
    setTaskStatuses(prev => {
      const newStatuses = { ...prev };
      // If user has previously toggled this task, get the toggled value
      // Otherwise, use the opposite of the default value
      const currentStatus = taskKey in prev 
        ? prev[taskKey]
        : statusData[phase][taskIndex].completed;
      
      newStatuses[taskKey] = !currentStatus;
      return newStatuses;
    });
  };
  
  // Get current status of a task (considering user changes)
  const getTaskStatus = (phase, taskIndex) => {
    const taskKey = `${phase}-${taskIndex}`;
    // If user has toggled this task's status, use the toggled value
    // Otherwise use the default value from statusData
    return taskKey in taskStatuses 
      ? taskStatuses[taskKey] 
      : statusData[phase][taskIndex].completed;
  };
  
  // Calculate progress percentage for each phase
  const calculateProgress = (phase) => {
    if (!statusData[phase]) return 0;
    const total = statusData[phase].length;
    
    // Count completed tasks, taking into account user changes
    let completed = 0;
    statusData[phase].forEach((item, index) => {
      if (getTaskStatus(phase, index)) {
        completed++;
      }
    });
    
    return Math.round((completed / total) * 100);
  };
  
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-pink-500 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h1 className="text-white text-xl sm:text-2xl font-semibold">Style Progress Status</h1>
          <div className="text-white text-sm sm:text-base">Style #: GS2023-001</div>
        </div>
      </div>
      
      {/* Demo Controls - Moved up from bottom */}
      <div className="p-4 bg-white border-b">
        <p className="text-sm text-gray-500 mb-2">Select Phase:</p>
        <div className="flex flex-wrap gap-2">
          {phases.map(phase => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded ${
                activePhase === phase 
                  ? "bg-pink-500 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {phase}
            </button>
          ))}
        </div>
      </div>
      
      {/* Progress Tracker */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 bg-gray-50 overflow-x-auto">
        <div className="relative min-w-max sm:min-w-0">
          {/* Progress Bar - Hidden on small screens, visible on medium and up */}
          <div className="h-1 bg-gray-200 absolute top-4 left-8 right-8 z-0 hidden sm:block"></div>
          
          {/* Phase Indicators */}
          <div className="flex flex-col sm:flex-row sm:justify-between relative z-10 gap-4 sm:gap-0">
            {phases.map((phase, index) => {
              const isComplete = phases.indexOf(activePhase) > index;
              const isCurrent = phase === activePhase;
              
              return (
                <div key={phase} className="flex items-center sm:flex-col sm:items-center gap-3 sm:gap-0">
                  {/* Made circles clickable */}
                  <button 
                    onClick={() => setActivePhase(phase)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isComplete ? 'bg-pink-500' : isCurrent ? 'bg-pink-400' : 'bg-gray-300'
                    } ${isComplete || isCurrent ? 'text-white' : 'text-gray-500'} cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    {isComplete ? '✓' : (index + 1)}
                  </button>
                  <div className="flex flex-col sm:items-center">
                    <span className={`text-sm font-medium ${isCurrent ? 'text-pink-500' : 'text-gray-500'}`}>
                      {phase}
                    </span>
                    {statusData[phase] && (
                      <span className="text-xs text-gray-500 sm:mt-1">
                        {calculateProgress(phase)}% complete
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Detailed Status Table */}
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Current Phase: {activePhase}</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Tasks</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Responsible</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Responsible</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {statusData[activePhase]?.map((task, index) => {
                // Get current task status (considering user changes)
                const isCompleted = getTaskStatus(activePhase, index);
                
                return (
                  <tr key={index} className={isCompleted ? "bg-gray-50" : ""}>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-900">{task.task}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{task.responsible}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{task.dataResponsible}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4">
                      {/* Made status badges clickable */}
                      <button
                        onClick={() => toggleTaskStatus(activePhase, index)}
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          isCompleted ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        } hover:opacity-80 transition-opacity cursor-pointer`}
                      >
                        {isCompleted ? "Completed" : "Pending"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GarmentOrderTracker;