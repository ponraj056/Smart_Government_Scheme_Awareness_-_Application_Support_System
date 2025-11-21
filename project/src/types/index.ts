export interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName: string;
  languagePreference: string;
  age?: number;
  gender?: string;
  state?: string;
  district?: string;
  occupation?: string;
  category?: string;
  income?: number;
}


export interface Scheme {
  id: string;
  title: string;
  titleTranslations: Record<string, string>;
  description: string;
  descriptionTranslations: Record<string, string>;
  category: 'education' | 'healthcare' | 'agriculture' | 'social_security' | 'entrepreneurship' | 'housing' | 'employment';
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  applicationProcedure: ApplicationStep[];
  procedureTranslations: Record<string, ApplicationStep[]>;
  deadline: string;
  isActive: boolean;
  targetStates: string[];
  minAge: number;
  maxAge: number;
  incomeLimit?: number;
  genderEligibility: string[];
  categoryEligibility: string[];
  officialUrl?: string;
  youtubeVideoId?: string;
}

export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
  tips?: string;
}

export interface Notification {
  id: string;
  schemeId?: string;
  title: string;
  message: string;
  type: 'deadline_alert' | 'new_scheme' | 'scheme_update';
  isRead: boolean;
  createdAt: string;
}

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa';
