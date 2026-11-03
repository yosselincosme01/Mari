import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { App } from '../app/App';
import { ConsultationProvider } from '../features/consultation/ConsultationContext';

function renderApp(path = '/') { return render(<MemoryRouter initialEntries={[path]}><ConsultationProvider><App /></ConsultationProvider></MemoryRouter>); }
describe('Navegación base', () => {
  it('recorre las cinco rutas y conserva la consulta al alternar modos', async () => {
    const user = userEvent.setup(); renderApp();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Un espacio');
    await user.click(screen.getByRole('link', { name: /preparar una consulta/i }));
    await user.click(screen.getByRole('button', { name: /crear consulta/i }));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Preparemos');
    await user.type(screen.getByRole('searchbox'), 'toser');
    expect(screen.getByText('¿Tiene tos?')).toBeInTheDocument();
    expect(screen.queryByText('¿Qué siente?')).not.toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /ver modo paciente/i }));
    expect(screen.getByRole('heading', { name: /video en lsp pendiente/i })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /3 · resumen/i }));
    expect(screen.getByRole('heading', { name: '0 respuestas confirmadas' })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /mari, inicio/i }));
    await user.click(screen.getByRole('link', { name: /preparar una consulta/i }));
    expect(screen.getByRole('link', { name: /continuar consulta/i })).toBeInTheDocument();
  });
  it.each(['/consulta/profesional', '/consulta/paciente', '/consulta/resumen'])('protege %s sin consulta', path => {
    renderApp(path); expect(screen.getByRole('button', { name: /crear consulta/i })).toBeInTheDocument();
  });
  it('ofrece una salida para rutas desconocidas', () => { renderApp('/desconocida'); expect(screen.getByRole('heading', { name: /página no encontrada/i })).toBeInTheDocument(); });
});
