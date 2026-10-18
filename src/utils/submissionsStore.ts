export interface StoredJobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateName: string;
  email: string;
  phone: string;
  experience?: string;
  resumeLink: string;
  coverNote?: string;
  submittedAt: string;
  status: 'Pending HR Review' | 'Shortlisted' | 'Interview Scheduled';
}

export interface StoredInquiry {
  id: string;
  projectName: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  visitType?: string;
  message?: string;
  submittedAt: string;
  status: 'New Inquiry' | 'Callback Scheduled' | 'Site Visit Confirmed';
}

const APPLICATIONS_KEY = 'curo_job_applications_v1';
const INQUIRIES_KEY = 'curo_project_inquiries_v1';

export const getJobApplications = (): StoredJobApplication[] => {
  try {
    const raw = localStorage.getItem(APPLICATIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to parse applications from localStorage', err);
    return [];
  }
};

export const saveJobApplication = (
  app: Omit<StoredJobApplication, 'id' | 'submittedAt' | 'status'>
): StoredJobApplication => {
  const current = getJobApplications();
  const newApp: StoredJobApplication = {
    ...app,
    id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    status: 'Pending HR Review',
  };
  const updated = [newApp, ...current];
  try {
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save application to localStorage', err);
  }
  return newApp;
};

export const getInquiries = (): StoredInquiry[] => {
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to parse inquiries from localStorage', err);
    return [];
  }
};

export const saveInquiry = (
  inq: Omit<StoredInquiry, 'id' | 'submittedAt' | 'status'>
): StoredInquiry => {
  const current = getInquiries();
  const newInq: StoredInquiry = {
    ...inq,
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    status: 'New Inquiry',
  };
  const updated = [newInq, ...current];
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save inquiry to localStorage', err);
  }
  return newInq;
};

export const clearAllSubmissions = () => {
  localStorage.removeItem(APPLICATIONS_KEY);
  localStorage.removeItem(INQUIRIES_KEY);
};
