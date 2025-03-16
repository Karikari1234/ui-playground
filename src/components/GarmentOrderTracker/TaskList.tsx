import React from 'react';
import { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (index: number) => void;
  onEditTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleStatus, onEditTask }) => {
  return (
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
          {tasks.map((task, index) => {
            const isCompleted = task.completed;
            const completion = task.completion || (isCompleted ? 100 : 0);
            
            return (
              <tr key={index} className={isCompleted ? "bg-gray-50" : ""}>
                <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <div className="relative flex items-center">
                      {/* Vertical connector line */}
                      {index !== 0 && (
                        <div className="absolute w-0.5 h-10 bg-gray-300 top-[-20px] left-[10px] z-0"></div>
                      )}
                      {index !== tasks.length - 1 && (
                        <div className="absolute w-0.5 h-10 bg-gray-300 bottom-[-20px] left-[10px] z-0"></div>
                      )}
                      {/* Circular indicator */}
                      <div className={`w-5 h-5 rounded-full mr-3 z-10 ${isCompleted ? 'bg-green-500' : 'border border-gray-300 bg-white'}`}></div>
                    </div>
                    {/* Simple task ID display */}
                    {task.id ? (
                      <span className="text-lg font-bold text-yellow-500 mr-2">{task.id}</span>
                    ) : (
                      <span className="text-lg font-bold text-yellow-500 mr-2">{String.fromCharCode(65 + index)}</span>
                    )}
                    <span className="text-gray-900">{task.task}</span>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{task.responsible}</td>
                <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-500">{task.dataResponsible}</td>
                <td className="px-3 sm:px-6 py-2 sm:py-4">
                  <button
                    onClick={() => onToggleStatus(index)}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      isCompleted ? "bg-green-100 text-green-800" : 
                      completion >= 50 ? "bg-green-100 text-green-800" : 
                      "bg-yellow-100 text-yellow-800"
                    } hover:opacity-80 transition-opacity cursor-pointer`}
                  >
                    {isCompleted ? "Completed" : 
                     completion > 0 ? `${completion}%` : "Pending"}
                  </button>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4">
                  <button
                    onClick={() => onEditTask(index)}
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
  );
};

export default TaskList;
