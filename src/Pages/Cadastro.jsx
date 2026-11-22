import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Cadastro({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    // Validações exigidas no trabalho
    if (!nome.trim() || !email.trim() || !senha) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }
    if (!email.includes('@')) {
      setErro('Digite um e-mail válido.');
      return;
    }
    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    onCadastrar({ nome, email, senha });
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    navigate('/login');
  };

  return (
    <div className="form-box">
      <h2>Criar Conta</h2>
      {erro && <div className="alerta-erro">{erro}</div>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha (mín. 6 caracteres)" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <input type="password" placeholder="Confirme a Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
        <button type="submit" className="btn-primary">Cadastrar</button>
      </form>
      <p className="form-footer">Já possui conta? <Link to="/login">Faça Login</Link></p>
    </div>
  );
}