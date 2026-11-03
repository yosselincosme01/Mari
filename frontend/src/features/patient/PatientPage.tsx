import { ActionLink } from '../../components/common/ActionLink';
import { Pictogram } from '../../components/accessibility/Pictogram';

export function PatientPage() {
  return <><p className="eyebrow">MODO PACIENTE · VISTA BASE</p><h1>Tu espacio para responder</h1>
    <section className="card patient-card"><div className="video-placeholder"><Pictogram id="person" /><h2>Video en LSP pendiente</h2><p>No hay una pregunta activa ni un video validado disponible.</p></div>
      <p>Los videos, pictogramas y apoyos visuales necesitan validación con personas usuarias de LSP antes de utilizarse en una consulta.</p>
      <div className="visual-guide" aria-label="Símbolos propuestos, todavía no interactivos">{(['confirm', 'correct', 'repeat'] as const).map((id, i) => <div key={id}><Pictogram id={id} /><span>{['Confirmar', 'Corregir', 'Repetir'][i]}</span></div>)}</div>
      <p className="notice">Esta pantalla es una base de navegación. Todavía no captura cámara ni registra respuestas.</p>
      <ActionLink to="/consulta/profesional" icon="back" secondary>Volver al profesional</ActionLink>
    </section></>;
}
