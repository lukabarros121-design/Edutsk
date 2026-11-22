import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ usuariosCadastrados, onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!email || !senha) {
      setErro('Informe e-mail e senha.');
      return;
    }

    // Busca nos usuários cadastrados ou aceita o usuário padrão de demonstração
    const usuarioEncontrado = usuariosCadastrados.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado);
      navigate('/restrita');
    } else {
      setErro('E-mail ou senha inválidos. (Dica: use admin@ecodescarte.com / 123456)');
    }
  };

  return (
    <div className="form-box">
      <h2>Entrar no Sistema</h2>
      {erro && <div className="alerta-erro">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit" className="btn-primary">Entrar</button>
      </form>

      <div className="form-footer">
        <Link to="/recuperar-senha">Esqueci minha senha</Link>
        <p>Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
      </div>
    </div>
  );
}