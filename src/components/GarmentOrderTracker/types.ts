export interface Task {
  task: string;
  responsible: string;
  dataResponsible: string;
  completed: boolean;
  notes?: string;
  startDate?: string;
  deadline?: string;
  id?: string;
  completion?: number;
}

export interface StatusData {
  [key: string]: Task[];
}

export interface PhaseInfo {
  name: string;
  timeLeft?: string;
  completed: boolean;
  isActive: boolean;
}
