import { NavLink } from 'react-router-dom';
export default function HomeIcon({ name, src, link }: { name: string; src: string; link: string }) {
  return (
    <NavLink to={link}>
      <div className="home-icon">
        <img src={src} alt={`data structure ${name}`} />
        <h2>{name}</h2>
      </div>
    </NavLink>
  );
}
