export type PictogramId = 'confirm' | 'correct' | 'repeat' | 'continue' | 'back' | 'person' | 'pain' | 'time' | 'intensity' | 'allergy' | 'breathing' | 'yes' | 'no' | 'unsure';
export interface AnswerOption { id: string; label: string; pictogramId: PictogramId; videoUrl?: string }
export interface Question {
  id: string;
  moduleId: 'general' | 'respiratorio';
  text: string;
  aliases: string[];
  videoUrl: string | null;
  videoValidated: boolean;
  answerOptions: AnswerOption[];
  answerMode: 'touch' | 'touch-or-camera';
}
export type AnswerValue = { answerId: string } | { value: { kind: 'duration'; amount: number; unit: 'hours' | 'days' | 'weeks' } };
interface AnswerBase { questionId: string; value: AnswerValue; source: 'touch' | 'camera' }
export type PatientAnswer = AnswerBase & (
  | { confirmed: false; confirmedAt: null }
  | { confirmed: true; confirmedAt: string }
);
export type ConfirmedAnswer = Extract<PatientAnswer, { confirmed: true }>;
export type ProvisionalAnswer = Extract<PatientAnswer, { confirmed: false }>;
export interface Consultation {
  id: string;
  status: 'in-progress' | 'completed';
  currentQuestionId: string | null;
  answers: Record<string, ConfirmedAnswer>;
  createdAt: string;
}
