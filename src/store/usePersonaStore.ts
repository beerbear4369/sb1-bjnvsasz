import { create } from 'zustand';
import { UserPersona } from '../types';

interface PersonaStore {
  persona: UserPersona | null;
  setPersona: (persona: UserPersona) => void;
}

export const usePersonaStore = create<PersonaStore>((set) => ({
  persona: null,
  setPersona: (persona) => set({ persona }),
}));