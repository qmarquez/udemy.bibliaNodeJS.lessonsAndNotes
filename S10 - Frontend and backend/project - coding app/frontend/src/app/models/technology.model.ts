export interface Technology {
  _id: string;
  name: string;
  description: string;
  logo: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
export type Technologies = Technology[];
