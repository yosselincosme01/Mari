import { ActionLink } from '../../components/common/ActionLink';
import { QuestionCatalog } from '../catalog/QuestionCatalog';

export function ProfessionalPage() {
  return <><p className="eyebrow">MODO PROFESIONAL · BASE DEL PROTOTIPO</p><h1>Preparemos la comunicación</h1><p className="lead">Explore el catálogo registrado. La selección y el envío de preguntas se desarrollarán en la siguiente etapa.</p>
    <div className="workspace"><QuestionCatalog /><aside className="card"><h2>Una consulta, dos modos</h2><p>Alterne la vista en esta misma pantalla. El estado se mantiene mientras la aplicación permanece abierta.</p><ActionLink to="/consulta/paciente" icon="person">Ver modo paciente</ActionLink><ActionLink to="/consulta/resumen" icon="continue" secondary>Ver resumen</ActionLink></aside></div></>;
}
