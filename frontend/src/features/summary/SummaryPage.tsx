import { useConsultation } from '../consultation/ConsultationContext';
import { ActionLink } from '../../components/common/ActionLink';

export function SummaryPage() {
  const { consultation } = useConsultation();
  const count = Object.values(consultation?.answers ?? {}).filter(answer => answer.confirmed).length;
  return <><p className="eyebrow">RESUMEN · VISTA BASE</p><h1>Respuestas confirmadas</h1><section className="card"><h2>{count} respuestas confirmadas</h2><p>La captura y confirmación se implementarán en etapas posteriores. No hay un resumen clínico generado.</p><p>El resumen futuro utilizará exclusivamente respuestas confirmadas y requerirá revisión profesional. No se utiliza un LLM en esta versión.</p><ActionLink to="/consulta/profesional" icon="back" secondary>Volver al profesional</ActionLink></section></>;
}
