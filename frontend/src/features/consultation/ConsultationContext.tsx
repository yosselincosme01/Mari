import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { consultationReducer, initialState, type ConsultationState } from './consultationState';

interface ContextValue extends ConsultationState { startConsultation: () => void; resetConsultation: () => void }
const ConsultationContext = createContext<ContextValue | null>(null);
export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(consultationReducer, initialState);
  return <ConsultationContext.Provider value={{ ...state,
    startConsultation: () => dispatch({ type: 'start', id: crypto.randomUUID(), createdAt: new Date().toISOString() }),
    resetConsultation: () => dispatch({ type: 'reset' }),
  }}>{children}</ConsultationContext.Provider>;
}
export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) throw new Error('useConsultation requiere ConsultationProvider');
  return context;
}
