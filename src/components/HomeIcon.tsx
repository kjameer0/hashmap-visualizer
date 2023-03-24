import { NavLink } from 'react-router-dom';

export default function HomeIcon({ name, src, link }: { name: string; src: string; link: string }) {
  return (
    <NavLink to={link}>
      <div className="home-icon">
        <h2 className="ds-title">{name}</h2>
        <img src={src} alt={`data structure ${name}`} />
      </div>
    </NavLink>
  );
}
