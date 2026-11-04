import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: '#2E7D32', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>🌿 EcoDescarte</h2>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/sobre" style={{ color: '#fff', textDecoration: 'none' }}>Sobre</Link>
        <Link to="/coleta" style={{ color: '#fff', textDecoration: 'none' }}>Pontos de Coleta</Link>
        <Link to="/agendamento" style={{ color: '#fff', textDecoration: 'none' }}>Agendamento</Link>
        <Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link>
      </nav>
    </header>
  );
}