export type ProjectType =
  | 'website'
  | 'mobile-app'
  | 'desktop-app'
  | 'data-science'
  | '';

export type DeadlineType = 'specific' | 'flexible';

export interface FormData {
  projectType: ProjectType;
  description: string;
  deadline: {
    type: DeadlineType;
    date: Date | undefined;
    flexibility: string;
  };
}
