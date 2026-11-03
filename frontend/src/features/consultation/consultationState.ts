import type { Consultation, ProvisionalAnswer } from '../../types/consultation';

export interface ConsultationState { consultation: Consultation | null; provisionalAnswers: Record<string, ProvisionalAnswer> }
export const initialState: ConsultationState = { consultation: null, provisionalAnswers: {} };
export type ConsultationAction = { type: 'start'; id: string; createdAt: string } | { type: 'reset' };
export function consultationReducer(state: ConsultationState, action: ConsultationAction): ConsultationState {
  switch (action.type) {
    case 'start': return { consultation: { id: action.id, status: 'in-progress', currentQuestionId: null, answers: {}, createdAt: action.createdAt }, provisionalAnswers: {} };
    case 'reset': return initialState;
    default: return state;
  }
}
