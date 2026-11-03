import { useEffect, useRef } from 'react';
import { Link, NavLink, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';
import { ActionLink } from '../components/common/ActionLink';
import { useConsultation } from '../features/consultation/ConsultationContext';
import { ProfessionalPage } from '../features/professional/ProfessionalPage';
import { PatientPage } from '../features/patient/PatientPage';
import { SummaryPage } from '../features/summary/SummaryPage';

function Layout() {
  const { pathname } = useLocation();
  const main = useRef<HTMLElement>(null);
  useEffect(() => { main.current?.focus(); document.title = 'Mari · Comunicación accesible'; }, [pathname]);
  return <><a className="skip-link" href="#main">Saltar al contenido</a><header className="header"><Link className="brand" to="/" aria-label="Mari, inicio"><span className="brand-mark" aria-hidden="true">m</span>mari<span className="brand-note">Comunicación que acerca</span></Link><span className="prototype">Prototipo · FACI 2026</span></header><main id="main" tabIndex={-1} ref={main}><Outlet /></main><footer>The Cookies · Mari <span>Consultas no urgentes · No reemplaza a un intérprete profesional</span></footer></>;
}
function Welcome() {
  return <div className="hero"><section><p className="eyebrow">SALUD DIGITAL · ACCESIBILIDAD · LSP</p><h1>Un espacio para<br />entendernos mejor.</h1><p className="lead">Comunicación visual entre personas sordas adultas y profesionales de salud, en un mismo dispositivo.</p><ActionLink to="/consulta/nueva" icon="continue">Preparar una consulta</ActionLink><p className="muted">Base de demostración. Sin datos reales de pacientes.</p></section><aside className="card journey"><span className="badge">DOS MODOS, UNA CONSULTA</span><h2>Una conversación con apoyo visual</h2><ol><li><strong>Profesional</strong><p>Catálogo de preguntas registradas.</p></li><li><strong>Paciente</strong><p>Espacio reservado para videos y respuestas visuales.</p></li><li><strong>Revisión</strong><p>Solo respuestas confirmadas.</p></li></ol><p className="notice">Videos LSP y reconocimiento pendientes. No realiza diagnóstico ni triaje.</p></aside></div>;
}
function NewConsultation() {
  const { consultation, startConsultation } = useConsultation();
  const navigate = useNavigate();
  return <><p className="eyebrow">ANTES DE COMENZAR</p><h1>Preparar una consulta</h1><section className="card narrow"><h2>Demostración en un solo dispositivo</h2><p>No ingrese nombres ni información clínica real. El estado vive únicamente en memoria y se elimina al recargar o cerrar la página.</p><p>Los videos en LSP todavía están pendientes. Esta base permite revisar la navegación, no realizar una consulta clínica.</p>{consultation ? <><p role="status">Ya hay una consulta de demostración abierta.</p><ActionLink to="/consulta/profesional" icon="continue">Continuar consulta</ActionLink></> : <button className="button" onClick={() => { startConsultation(); navigate('/consulta/profesional'); }}>Crear consulta de demostración <span aria-hidden="true">→</span></button>}<ActionLink to="/" icon="back" secondary>Volver al inicio</ActionLink></section></>;
}
function ConsultationShell() {
  const { consultation } = useConsultation();
  if (!consultation) return <Navigate to="/consulta/nueva" replace />;
  return <><nav className="mode-nav" aria-label="Modos de la consulta"><NavLink to="/consulta/profesional">1 · Profesional</NavLink><NavLink to="/consulta/paciente">2 · Paciente</NavLink><NavLink to="/consulta/resumen">3 · Resumen</NavLink></nav><Outlet /></>;
}
export function App() {
  return <Routes><Route element={<Layout />}><Route index element={<Welcome />} /><Route path="consulta/nueva" element={<NewConsultation />} /><Route element={<ConsultationShell />}><Route path="consulta/profesional" element={<ProfessionalPage />} /><Route path="consulta/paciente" element={<PatientPage />} /><Route path="consulta/resumen" element={<SummaryPage />} /></Route><Route path="*" element={<><h1>Página no encontrada</h1><ActionLink to="/" icon="back">Volver al inicio</ActionLink></>} /></Route></Routes>;
}
