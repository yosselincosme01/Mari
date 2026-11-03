import { Link } from 'react-router';
import { Pictogram } from '../accessibility/Pictogram';
import type { PictogramId } from '../../types/consultation';

export function ActionLink({ to, icon, children, secondary = false }: { to: string; icon: PictogramId; children: React.ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? 'secondary' : ''}`} to={to}><Pictogram id={icon} />{children}</Link>;
}
