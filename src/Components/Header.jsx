import { Link, useNavigate } from 'react-router-dom';

export default function Header({ usuarioLogado, onLogout }) {
  const navigate = useNavigate();

  const handleSair = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="logo">🌿 EcoDescarte</div>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        
        {/* Renderização condicional: muda o menu se estiver logado ou não */}
        {usuarioLogado ? (
          <>
            <Link to="/restrita">Painel de Coletas (Restrito)</Link>
            <span className="user-badge">Olá, {usuarioLogado.nome}</span>
            <button onClick={handleSair} className="btn-logout">Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/cadastro" className="btn-destaque">Cadastrar</Link>
          </>
        )}
      </nav>
    </header>
  );
}