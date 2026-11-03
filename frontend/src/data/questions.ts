import type { AnswerOption, Question } from '../types/consultation';

const yesNo: AnswerOption[] = [
  { id: 'yes', label: 'Sí', pictogramId: 'yes' },
  { id: 'no', label: 'No', pictogramId: 'no' },
  { id: 'unsure', label: 'No sé / otra respuesta', pictogramId: 'unsure' },
];
// Catálogo de demostración. No hay videos ni pictogramas validados para uso clínico.
export const questions: Question[] = [
  { id: 'symptom', moduleId: 'general', text: '¿Qué siente?', aliases: ['síntomas', 'malestar'], videoUrl: null, videoValidated: false, answerMode: 'touch-or-camera', answerOptions: [{ id: 'pain', label: 'Dolor', pictogramId: 'pain' }, { id: 'other', label: 'Otra respuesta', pictogramId: 'unsure' }] },
  { id: 'location', moduleId: 'general', text: '¿Dónde le duele?', aliases: ['zona', 'ubicación del dolor'], videoUrl: null, videoValidated: false, answerMode: 'touch', answerOptions: [{ id: 'chest', label: 'Pecho', pictogramId: 'person' }, { id: 'other', label: 'Otra zona', pictogramId: 'unsure' }] },
  { id: 'duration', moduleId: 'general', text: '¿Desde cuándo?', aliases: ['duración', 'inicio'], videoUrl: null, videoValidated: false, answerMode: 'touch', answerOptions: [{ id: 'today', label: 'Hoy', pictogramId: 'time' }, { id: 'before', label: 'Antes de hoy', pictogramId: 'time' }, { id: 'other', label: 'Otra respuesta', pictogramId: 'unsure' }] },
  { id: 'intensity', moduleId: 'general', text: '¿Qué tan fuerte?', aliases: ['intensidad', 'fuerza del dolor'], videoUrl: null, videoValidated: false, answerMode: 'touch', answerOptions: [{ id: 'mild', label: 'Leve', pictogramId: 'intensity' }, { id: 'moderate', label: 'Moderado', pictogramId: 'intensity' }, { id: 'strong', label: 'Fuerte', pictogramId: 'intensity' }] },
  { id: 'allergies', moduleId: 'general', text: '¿Tiene alergias?', aliases: ['alergia', 'alérgico'], videoUrl: null, videoValidated: false, answerMode: 'touch-or-camera', answerOptions: yesNo },
  { id: 'cough', moduleId: 'respiratorio', text: '¿Tiene tos?', aliases: ['tos', 'toser'], videoUrl: null, videoValidated: false, answerMode: 'touch-or-camera', answerOptions: yesNo },
  { id: 'nasal', moduleId: 'respiratorio', text: '¿Tiene congestión nasal?', aliases: ['nariz tapada', 'congestión'], videoUrl: null, videoValidated: false, answerMode: 'touch-or-camera', answerOptions: yesNo },
];
const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();
export function searchQuestions(query: string): Question[] {
  const term = normalize(query);
  return questions.filter(q => [q.text, ...q.aliases].some(text => normalize(text).includes(term)));
}
