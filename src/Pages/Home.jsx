import CardInfo from '../components/CardInfo';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao EcoDescarte</h1>
      <p>Sua plataforma para gerenciar o descarte consciente e sustentável de resíduos.</p>
      
      <div style={{ marginTop: '20px' }}>
        <CardInfo title="Coleta Seletiva" description="Encontre o ecoponto mais próximo da sua residência." />
        <CardInfo title="Agendamento Prático" description="Agende o recolhimento de materiais recicláveis direto pelo site." />
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Home({ usuarioLogado }) {
  return (
    <div className="hero-container">
      <h1>Gestão Inteligente de Coleta Seletiva</h1>
      <p>
        Conectamos cidadãos a pontos de descarte sustentável de eletrônicos, 
        plásticos e recicláveis de forma rápida e rastreável.
      </p>
      <div className="hero-buttons">
        {usuarioLogado ? (
          <Link to="/restrita" className="btn-primary">Acessar Meu Painel</Link>
        ) : (
          <>
            <Link to="/cadastro" className="btn-primary">Começar Agora</Link>
            <Link to="/login" className="btn-secondary">Já tenho conta</Link>
          </>
        )}
      </div>
    </div>
  );
}