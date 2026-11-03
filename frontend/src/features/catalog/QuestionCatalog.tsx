import { useState } from 'react';
import { searchQuestions } from '../../data/questions';

export function QuestionCatalog() {
  const [query, setQuery] = useState('');
  const results = searchQuestions(query);
  return <section className="card" aria-labelledby="catalog-title">
    <p className="eyebrow">CATÁLOGO DE DEMOSTRACIÓN</p><h2 id="catalog-title">Preguntas disponibles</h2>
    <label htmlFor="question-search">Buscar una pregunta o alias registrado</label>
    <input id="question-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Por ejemplo: tos o duración" />
    <p role="status">{results.length} preguntas encontradas</p>
    <ul className="question-list">{results.map(q => <li key={q.id}><div><strong>{q.text}</strong><small>{q.moduleId === 'respiratorio' ? 'Módulo respiratorio' : 'Comunicación inicial'}</small></div><span className="badge">Video LSP pendiente</span></li>)}</ul>
    {results.length === 0 && <p>No hay coincidencias en el catálogo. No se genera una traducción nueva.</p>}
  </section>;
}
