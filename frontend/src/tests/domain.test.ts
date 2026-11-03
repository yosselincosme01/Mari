import { describe, expect, it } from 'vitest';
import { questions, searchQuestions } from '../data/questions';
import { consultationReducer, initialState } from '../features/consultation/consultationState';

describe('Catálogo y estado', () => {
  it('busca alias sin distinguir acentos y no inventa preguntas', () => {
    expect(searchQuestions(' DURACION ').map(q => q.id)).toEqual(['duration']);
    expect(searchQuestions('pregunta inexistente')).toEqual([]);
    expect(new Set(questions.map(q => q.id)).size).toBe(questions.length);
    expect(questions.every(q => !q.videoValidated && q.videoUrl === null)).toBe(true);
    expect(questions.some(q => q.moduleId === 'respiratorio')).toBe(true);
  });
  it('inicia sin respuestas confirmadas ni provisionales y permite limpiar la consulta', () => {
    const started = consultationReducer(initialState, { type: 'start', id: 'demo', createdAt: '2026-11-03T00:00:00Z' });
    expect(started.consultation?.answers).toEqual({});
    expect(started.provisionalAnswers).toEqual({});
    expect(started.consultation?.status).toBe('in-progress');
    expect(consultationReducer(started, { type: 'reset' })).toEqual(initialState);
  });
});
