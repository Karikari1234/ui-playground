import React from 'react';
import { Task } from './types';

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
  onSave: () => void;
  onFieldChange: (field: keyof Task, value: string) => void;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ 
  task, 
  onClose, 
  onSave,
  onFieldChange 
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Task Details</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task ID</label>
          <input
            type="text"
            value={task.id || ''}
            onChange={(e) => onFieldChange('id', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="A, B, C, etc."
          />
        </div>
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Task</label>
          <input
            type="text"
            value={task.task}
            onChange={(e) => onFieldChange('task', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Responsible</label>
            <input
              type="text"
              value={task.responsible}
              onChange={(e) => onFieldChange('responsible', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data Responsible</label>
            <input
              type="text"
              value={task.dataResponsible}
              onChange={(e) => onFieldChange('dataResponsible', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={task.startDate || ''}
              onChange={(e) => onFieldChange('startDate', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
            <input
              type="date"
              value={task.deadline || ''}
              onChange={(e) => onFieldChange('deadline', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={task.completed.toString()}
              onChange={(e) => onFieldChange('completed', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="false">Pending</option>
              <option value="true">Completed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Completion (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={task.completion || 0}
              onChange={(e) => onFieldChange('completion', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            value={task.notes || ''}
            onChange={(e) => onFieldChange('notes', e.target.value)}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onSave}
            className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Save & Return to Summary
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskDetail;
