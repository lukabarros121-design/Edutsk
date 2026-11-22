import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }
    setErro('');
    setEnviado(true);
  };

  return (
    <div className="form-box">
      <h2>Recuperar Senha</h2>
      {erro && <div className="alerta-erro">{erro}</div>}

      {enviado ? (
        <div className="alerta-sucesso">
          <p>✅ Um link simulado de redefinição foi enviado para <strong>{email}</strong>!</p>
          <Link to="/login" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px' }}>
            Voltar para o Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Informe seu e-mail cadastrado para receber instruções:</p>
          <input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn-primary">Enviar Instruções</button>
        </form>
      )}
      {!enviado && <p className="form-footer"><Link to="/login">Voltar ao Login</Link></p>}
    </div>
  );
}