import React, { useState } from 'react';

interface Task {
  task: string;
  responsible: string;
  dataResponsible: string;
  completed: boolean;
  notes?: string; // Added for detailed view
  startDate?: string; // Added for detailed view
  deadline?: string; // Added for detailed view
}

interface StatusData {
  [key: string]: Task[];
}

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
  
  // State to track which tab is active (summary or detailed)
  const [activeTab, setActiveTab] = useState<'summary' | 'detailed'>('summary');
  
  // State to track the selected task for detailed view
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);
  
  // State to track user changes to task status
  const [taskStatuses, setTaskStatuses] = useState<Record<string, boolean>>({});
  
  // State to track edits to task details
  const [taskDetails, setTaskDetails] = useState<Record<string, Task>>({});
  
  // Sample detailed status data
  const statusData: StatusData = {
    "Costing": [
      { task: "Initial Data & Info Reception from Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Documents received from buyer on 01/15", startDate: "2023-01-10", deadline: "2023-01-15" },
      { task: "SMV, Efficiency & Thread Consumption", responsible: "Industrial Engineering", dataResponsible: "M&M", completed: true, notes: "Analysis completed by IE team", startDate: "2023-01-16", deadline: "2023-01-20" },
      { task: "Fabric Consumption", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true, notes: "Fabric requirements calculated", startDate: "2023-01-18", deadline: "2023-01-25" },
      { task: "Materials Price Inquiry", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Quotations received from suppliers", startDate: "2023-01-20", deadline: "2023-01-30" },
      { task: "Negotiation with Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Price points agreed upon", startDate: "2023-02-01", deadline: "2023-02-10" },
      { task: "Order & Initial Price Fixation", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Initial pricing approved", startDate: "2023-02-11", deadline: "2023-02-15" },
    ],
    "Confirmation": [
      { task: "Reception of PO with Details", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Purchase order received", startDate: "2023-02-16", deadline: "2023-02-18" },
      { task: "Final Costing with Approval", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Final cost sheet approved", startDate: "2023-02-19", deadline: "2023-02-25" },
      { task: "Fabric Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Fabrics ordered from supplier", startDate: "2023-02-26", deadline: "2023-03-05" },
      { task: "Trims Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "All trims and accessories ordered", startDate: "2023-03-01", deadline: "2023-03-10" },
    ],
    "Co-ordination": [
      { task: "Technical File Preparation", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true, notes: "Tech pack finalized", startDate: "2023-03-11", deadline: "2023-03-20" },
      { task: "Materials Arrival Planning", responsible: "Planning", dataResponsible: "Planning", completed: true, notes: "Delivery schedules confirmed with suppliers", startDate: "2023-03-15", deadline: "2023-03-25" },
      { task: "Production Planning", responsible: "Planning", dataResponsible: "Planning", completed: false, notes: "Pending line allocation", startDate: "2023-03-20", deadline: "2023-03-30" },
    ],
    "Raw Material": [
      { task: "Fabric Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true, notes: "Fabric quality approved", startDate: "2023-04-01", deadline: "2023-04-10" },
      { task: "Trims & Accessories Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true, notes: "All trims inspected and approved", startDate: "2023-04-05", deadline: "2023-04-15" },
      { task: "Materials Approval", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Awaiting final approval", startDate: "2023-04-15", deadline: "2023-04-20" },
    ],
    "Pre-production": [
      { task: "Planning of PP Sample", responsible: "Planning", dataResponsible: "MIS", completed: true, notes: "PP sample plan created", startDate: "2023-04-21", deadline: "2023-04-25" },
      { task: "Procession of PP Sample", responsible: "Sample Section", dataResponsible: "MIS", completed: true, notes: "Sample production completed", startDate: "2023-04-26", deadline: "2023-05-05" },
      { task: "Reception of PP Comments", responsible: "Sample Section", dataResponsible: "MIS", completed: true, notes: "Feedback received from buyer", startDate: "2023-05-06", deadline: "2023-05-10" },
      { task: "Planning of Size Set Sample", responsible: "Planning", dataResponsible: "MIS", completed: true, notes: "Size set requirements finalized", startDate: "2023-05-11", deadline: "2023-05-15" },
      { task: "Procession of Size Set Sample", responsible: "Production", dataResponsible: "MIS", completed: false, notes: "Size set production in progress", startDate: "2023-05-16", deadline: "2023-05-25" },
      { task: "Offering of PP Meeting", responsible: "Planning", dataResponsible: "MIS", completed: false, notes: "Meeting scheduled for next week", startDate: "2023-05-26", deadline: "2023-05-30" },
      { task: "Procession of PP Meeting", responsible: "Quality Control", dataResponsible: "MIS", completed: false, notes: "Pending meeting outcome", startDate: "2023-05-30", deadline: "2023-06-05" },
    ],
    "Production": [
      { task: "Cutting Process", responsible: "Cutting Section", dataResponsible: "Production", completed: false, notes: "Awaiting final approval before cutting", startDate: "2023-06-10", deadline: "2023-06-20" },
      { task: "Sewing Process", responsible: "Sewing Section", dataResponsible: "Production", completed: false, notes: "Pending cutting completion", startDate: "2023-06-21", deadline: "2023-07-10" },
      { task: "Quality Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Will begin once sewing starts", startDate: "2023-06-25", deadline: "2023-07-15" },
      { task: "Finishing & Packaging", responsible: "Finishing Section", dataResponsible: "Production", completed: false, notes: "Not started yet", startDate: "2023-07-11", deadline: "2023-07-25" },
    ],
    "Closing": [
      { task: "Final Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Scheduled after production", startDate: "2023-07-26", deadline: "2023-08-05" },
      { task: "Documentation Completion", responsible: "Merchandising", dataResponsible: "M&M", completed: false, notes: "Will prepare shipping docs", startDate: "2023-08-01", deadline: "2023-08-10" },
      { task: "Shipping Arrangements", responsible: "Logistics", dataResponsible: "Logistics", completed: false, notes: "Booking not done yet", startDate: "2023-08-06", deadline: "2023-08-15" },
      { task: "Invoice Generation", responsible: "Finance", dataResponsible: "Finance", completed: false, notes: "Will create after QC approval", startDate: "2023-08-11", deadline: "2023-08-20" },
    ]
  };
  
  // Function to toggle task completion status
  const toggleTaskStatus = (phase: string, taskIndex: number) => {
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
  const getTaskStatus = (phase: string, taskIndex: number) => {
    const taskKey = `${phase}-${taskIndex}`;
    // If user has toggled this task's status, use the toggled value
    // Otherwise use the default value from statusData
    return taskKey in taskStatuses 
      ? taskStatuses[taskKey] 
      : statusData[phase][taskIndex].completed;
  };
  
  // Calculate progress percentage for each phase
  const calculateProgress = (phase: string) => {
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

  // Get the current task details (considering user edits)
  const getTaskDetails = (phase: string, taskIndex: number): Task => {
    const taskKey = `${phase}-${taskIndex}`;
    // If user has edited this task, get the edited version
    // Otherwise use the default value from statusData
    return taskKey in taskDetails
      ? taskDetails[taskKey]
      : statusData[phase][taskIndex];
  };

  // Handle changes to the task details form fields
  const handleTaskDetailChange = (field: keyof Task, value: string) => {
    if (selectedTaskIndex === null) return;
    
    const taskKey = `${activePhase}-${selectedTaskIndex}`;
    const currentTask = { ...getTaskDetails(activePhase, selectedTaskIndex) };
    
    // Update the specific field
    if (field === 'completed') {
      setTaskStatuses(prev => ({
        ...prev,
        [taskKey]: value === 'true'
      }));
    } else {
      // For other fields, update the task details
      setTaskDetails(prev => ({
        ...prev,
        [taskKey]: {
          ...currentTask,
          [field]: value
        }
      }));
    }
  };

  // Select a task for detailed editing
  const selectTask = (taskIndex: number) => {
    setSelectedTaskIndex(taskIndex);
    setActiveTab('detailed');
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
              onClick={() => {
                setActivePhase(phase);
                setSelectedTaskIndex(null); // Reset selected task when changing phases
              }}
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
                    onClick={() => {
                      setActivePhase(phase);
                      setSelectedTaskIndex(null); // Reset selected task when changing phases
                    }}
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
      
      {/* Tab Navigation */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'summary'
              ? 'border-b-2 border-pink-500 text-pink-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'detailed'
              ? 'border-b-2 border-pink-500 text-pink-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('detailed')}
        >
          Detailed
        </button>
      </div>
      
      <div className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Current Phase: {activePhase}</h2>
        
        {/* Summary Tab Content */}
        {activeTab === 'summary' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress Tasks</th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Responsible</th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Responsible</th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {statusData[activePhase]?.map((task, index) => {
                  // Get current task status (considering user changes)
                  const isCompleted = getTaskStatus(activePhase, index);
                  const currentTask = getTaskDetails(activePhase, index);
                  
                  return (
                    <tr key={index} className={isCompleted ? "bg-gray-50" : ""}>
                      <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-900">{currentTask.task}</td>
                      <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{currentTask.responsible}</td>
                      <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{currentTask.dataResponsible}</td>
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
                      <td className="px-3 sm:px-6 py-2 sm:py-4">
                        <button
                          onClick={() => selectTask(index)}
                          className="px-2 py-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Edit Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Detailed Tab Content */}
        {activeTab === 'detailed' && (
          <div className="bg-white border rounded-lg shadow-sm">
            {selectedTaskIndex !== null ? (
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Task Details</h3>
                  <button
                    onClick={() => setSelectedTaskIndex(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {/* Edit form */}
                {(() => {
                  const currentTask = getTaskDetails(activePhase, selectedTaskIndex);
                  const isCompleted = getTaskStatus(activePhase, selectedTaskIndex);
                  
                  return (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Task</label>
                        <input
                          type="text"
                          value={currentTask.task}
                          onChange={(e) => handleTaskDetailChange('task', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Task Responsible</label>
                          <input
                            type="text"
                            value={currentTask.responsible}
                            onChange={(e) => handleTaskDetailChange('responsible', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Data Responsible</label>
                          <input
                            type="text"
                            value={currentTask.dataResponsible}
                            onChange={(e) => handleTaskDetailChange('dataResponsible', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                          <input
                            type="date"
                            value={currentTask.startDate || ''}
                            onChange={(e) => handleTaskDetailChange('startDate', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                          <input
                            type="date"
                            value={currentTask.deadline || ''}
                            onChange={(e) => handleTaskDetailChange('deadline', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={isCompleted.toString()}
                          onChange={(e) => handleTaskDetailChange('completed', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        >
                          <option value="false">Pending</option>
                          <option value="true">Completed</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <textarea
                          value={currentTask.notes || ''}
                          onChange={(e) => handleTaskDetailChange('notes', e.target.value)}
                          rows={4}
                          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setActiveTab('summary')}
                          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                        >
                          Save & Return to Summary
                        </button>
                      </div>
                    </form>
                  );
                })()}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Select a task from the summary view to edit its details.</p>
                <button
                  onClick={() => setActiveTab('summary')}
                  className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                >
                  Go to Summary View
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GarmentOrderTracker;