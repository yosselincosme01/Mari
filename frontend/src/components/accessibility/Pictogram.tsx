import type { PictogramId } from '../../types/consultation';

const symbols: Record<PictogramId, string> = { confirm: '✓', correct: '✎', repeat: '↻', continue: '→', back: '←', person: '♙', pain: 'ϟ', time: '◷', intensity: '▂▅▇', allergy: '!', breathing: '≈', yes: '✓', no: '×', unsure: '?' };
// Apoyos visuales provisionales: requieren validación con personas usuarias de LSP.
export function Pictogram({ id }: { id: PictogramId }) {
  return <span className="pictogram" aria-hidden="true">{symbols[id]}</span>;
}
