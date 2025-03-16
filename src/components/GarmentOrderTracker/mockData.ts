import { StatusData } from './types';

// Sample detailed status data with IDs and completion percentages
export const statusData: StatusData = {
  "Costing": [
    { id: "A", task: "Initial Data & Info Reception from Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Documents received from buyer on 01/15", startDate: "2023-01-10", deadline: "2023-01-15", completion: 100 },
    { id: "B", task: "SMV, Efficiency & Thread Consumption", responsible: "Industrial Engineering", dataResponsible: "M&M", completed: true, notes: "Analysis completed by IE team", startDate: "2023-01-16", deadline: "2023-01-20", completion: 100 },
    { id: "C", task: "Fabric Consumption", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true, notes: "Fabric requirements calculated", startDate: "2023-01-18", deadline: "2023-01-25", completion: 100 },
    { id: "D", task: "Materials Price Inquiry", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Quotations received from suppliers", startDate: "2023-01-20", deadline: "2023-01-30", completion: 100 },
    { id: "E", task: "Negotiation with Buyer", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Price points agreed upon", startDate: "2023-02-01", deadline: "2023-02-10", completion: 100 },
    { id: "F", task: "Order & Initial Price Fixation", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Initial pricing approved", startDate: "2023-02-11", deadline: "2023-02-15", completion: 100 },
  ],
  "Confirmation": [
    { id: "A", task: "Reception of PO with Details", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Purchase order received", startDate: "2023-02-16", deadline: "2023-02-18", completion: 100 },
    { id: "B", task: "Final Costing with Approval", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Final cost sheet approved", startDate: "2023-02-19", deadline: "2023-02-25", completion: 100 },
    { id: "C", task: "Fabric Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "Fabrics ordered from supplier", startDate: "2023-02-26", deadline: "2023-03-05", completion: 100 },
    { id: "D", task: "Trims Booking", responsible: "Marketing & Merchandising", dataResponsible: "M&M", completed: true, notes: "All trims and accessories ordered", startDate: "2023-03-01", deadline: "2023-03-10", completion: 100 },
  ],
  "Co-ordination": [
    { id: "A", task: "Technical File Preparation", responsible: "CAD & Technical", dataResponsible: "M&M", completed: true, notes: "Tech pack finalized", startDate: "2023-03-11", deadline: "2023-03-20", completion: 100 },
    { id: "B", task: "Materials Arrival Planning", responsible: "Planning", dataResponsible: "Planning", completed: true, notes: "Delivery schedules confirmed with suppliers", startDate: "2023-03-15", deadline: "2023-03-25", completion: 100 },
    { id: "C", task: "Production Planning", responsible: "Planning", dataResponsible: "Planning", completed: false, notes: "Pending line allocation", startDate: "2023-03-20", deadline: "2023-03-30", completion: 70 },
  ],
  "Raw Material": [
    { id: "A", task: "Fabric Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true, notes: "Fabric quality approved", startDate: "2023-04-01", deadline: "2023-04-10", completion: 100 },
    { id: "B", task: "Trims & Accessories Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: true, notes: "All trims inspected and approved", startDate: "2023-04-05", deadline: "2023-04-15", completion: 100 },
    { id: "C", task: "Materials Approval", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Awaiting final approval", startDate: "2023-04-15", deadline: "2023-04-20", completion: 80 },
  ],
  "Pre-production": [
    { id: "A", task: "Planning of PP Sample", responsible: "Planning", dataResponsible: "MIS", completed: true, notes: "PP sample plan created", startDate: "2023-04-21", deadline: "2023-04-25", completion: 90 },
    { id: "B", task: "Procession of PP Sample", responsible: "Sample Section", dataResponsible: "MIS", completed: true, notes: "Sample production completed", startDate: "2023-04-26", deadline: "2023-05-05", completion: 100 },
    { id: "C", task: "Reception of PP Comments", responsible: "Sample Section", dataResponsible: "MIS", completed: true, notes: "Feedback received from buyer", startDate: "2023-05-06", deadline: "2023-05-10", completion: 100 },
    { id: "D", task: "Planning of Size Set Sample", responsible: "Planning", dataResponsible: "MIS", completed: true, notes: "Size set requirements finalized", startDate: "2023-05-11", deadline: "2023-05-15", completion: 100 },
    { id: "E", task: "Procession of Size Set Sample", responsible: "Production", dataResponsible: "MIS", completed: false, notes: "Size set production in progress", startDate: "2023-05-16", deadline: "2023-05-25", completion: 30 },
    { id: "F", task: "Offering of PP Meeting", responsible: "Planning", dataResponsible: "MIS", completed: false, notes: "Meeting scheduled for next week", startDate: "2023-05-26", deadline: "2023-05-30", completion: 45 },
    { id: "G", task: "Procession of PP Meeting", responsible: "Quality Control", dataResponsible: "MIS", completed: false, notes: "Pending meeting outcome", startDate: "2023-05-30", deadline: "2023-06-05", completion: 20 },
  ],
  "Production": [
    { id: "A", task: "Cutting Process", responsible: "Cutting Section", dataResponsible: "Production", completed: false, notes: "Awaiting final approval before cutting", startDate: "2023-06-10", deadline: "2023-06-20", completion: 0 },
    { id: "B", task: "Sewing Process", responsible: "Sewing Section", dataResponsible: "Production", completed: false, notes: "Pending cutting completion", startDate: "2023-06-21", deadline: "2023-07-10", completion: 0 },
    { id: "C", task: "Quality Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Will begin once sewing starts", startDate: "2023-06-25", deadline: "2023-07-15", completion: 0 },
    { id: "D", task: "Finishing & Packaging", responsible: "Finishing Section", dataResponsible: "Production", completed: false, notes: "Not started yet", startDate: "2023-07-11", deadline: "2023-07-25", completion: 0 },
  ],
  "Closing": [
    { id: "A", task: "Final Inspection", responsible: "Quality Control", dataResponsible: "QC", completed: false, notes: "Scheduled after production", startDate: "2023-07-26", deadline: "2023-08-05", completion: 0 },
    { id: "B", task: "Documentation Completion", responsible: "Merchandising", dataResponsible: "M&M", completed: false, notes: "Will prepare shipping docs", startDate: "2023-08-01", deadline: "2023-08-10", completion: 0 },
    { id: "C", task: "Shipping Arrangements", responsible: "Logistics", dataResponsible: "Logistics", completed: false, notes: "Booking not done yet", startDate: "2023-08-06", deadline: "2023-08-15", completion: 0 },
    { id: "D", task: "Invoice Generation", responsible: "Finance", dataResponsible: "Finance", completed: false, notes: "Will create after QC approval", startDate: "2023-08-11", deadline: "2023-08-20", completion: 0 },
  ]
};

// List of phases
export const phases = [
  "Costing", 
  "Confirmation", 
  "Co-ordination", 
  "Raw Material", 
  "Pre-production", 
  "Production", 
  "Closing"
];

// Get phase-specific time left
export const getPhaseTimeLeft = (phase: string): string => {
  switch(phase) {
    case "Costing":
      return "3 days";
    case "Confirmation":
      return "5 days";
    case "Co-ordination":
      return "6 days";
    case "Raw Material":
      return "4 days";
    case "Pre-production":
      return "7 days";
    case "Production":
      return "14 days";
    case "Closing":
      return "21 days";
    default:
      return "N/A";
  }
};
