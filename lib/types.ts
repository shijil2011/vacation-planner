export interface TripPlan {
  id?: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  interests: string[];
  travelers: string;
  pace: string;
  itinerary?: DayPlan[];
}

export interface DayPlan {
  day: number;
  date?: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
  category: "food" | "sightseeing" | "activity" | "transport" | "accommodation";
  costEstimate: number;
}