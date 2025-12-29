import { type ContactForm, type FranchiseForm } from "@shared/schema";

export interface IStorage {
  // No persistent storage needed for this mock
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
