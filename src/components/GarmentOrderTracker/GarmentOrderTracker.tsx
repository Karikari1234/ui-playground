import React, { useState } from 'react';
import Header from './Header';
import PhaseTracker from './PhaseTracker';
import TabNavigation from './TabNavigation';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import { Task, PhaseInfo } from './types';
import { statusData, phases, getPhaseTimeLeft } from './mockData';

const GarmentOrderTracker: React.FC = () => {
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
    
    // Calculate total completion percentage using both binary completion status
    // and partial completion percentages
    let completionSum = 0;
    
    statusData[phase].forEach((item, index) => {
      const taskKey = `${phase}-${index}`;
      const isCompleted = getTaskStatus(phase, index);
      
      if (isCompleted) {
        // If task is marked as completed, count as 100%
        completionSum += 100;
      } else {
        // For incomplete tasks, use the completion percentage if available
        // Either from user edits or from the original data
        const taskDetail = taskKey in taskDetails ? taskDetails[taskKey] : item;
        const completionPercentage = taskDetail.completion || 0;
        completionSum += completionPercentage;
      }
    });
    
    // Calculate average completion and round to nearest integer
    return Math.round(completionSum / total);
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
          [field]: field === 'completion' ? parseInt(value) : value
        }
      }));
    }
  };

  // Select a task for detailed editing
  const selectTask = (index: number) => {
    setSelectedTaskIndex(index);
    setActiveTab('detailed');
  };
  
  // Prepare phase information for the tracker
  const phaseInfo: PhaseInfo[] = phases.map(phase => ({
    name: phase,
    timeLeft: getPhaseTimeLeft(phase),
    completed: phases.indexOf(phase) < phases.indexOf(activePhase),
    isActive: phase === activePhase
  }));
  
  // Prepare phase progress data
  const phaseProgress: Record<string, number> = {};
  phases.forEach(phase => {
    phaseProgress[phase] = calculateProgress(phase);
  });
  
  // Get current phase tasks with their updated status
  const currentTasks = statusData[activePhase]?.map((task, index) => ({
    ...task,
    completed: getTaskStatus(activePhase, index)
  })) || [];
  
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <Header 
        styleNumber="GS2023-001" 
        timeLeft="30 days" 
      />
      
      {/* Progress Tracker */}
      <PhaseTracker 
        phases={phaseInfo} 
        phaseProgress={phaseProgress} 
        onPhaseClick={(phaseName) => {
          setActivePhase(phaseName);
          setSelectedTaskIndex(null);
        }}
      />
      
      {/* Tab Navigation */}
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={(tab) => setActiveTab(tab)} 
      />
      
      <div className="p-4 sm:p-6">
        
        {/* Summary Tab Content */}
        {activeTab === 'summary' && (
          <TaskList 
            tasks={currentTasks}
            onToggleStatus={(index) => toggleTaskStatus(activePhase, index)}
            onEditTask={(index) => selectTask(index)}
          />
        )}
        
        {/* Detailed Tab Content */}
        {activeTab === 'detailed' && (
          <div className="bg-white border rounded-lg shadow-sm">
            {selectedTaskIndex !== null ? (
              <TaskDetail
                task={getTaskDetails(activePhase, selectedTaskIndex)}
                onClose={() => setSelectedTaskIndex(null)}
                onSave={() => setActiveTab('summary')}
                onFieldChange={handleTaskDetailChange}
              />
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