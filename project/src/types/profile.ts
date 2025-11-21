export interface UserProfile {
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  income: number;
  category: 'General' | 'SC' | 'ST' | 'OBC' | 'EWS'|'others';
  state: string;
  preferredCategories?: string[];
}
