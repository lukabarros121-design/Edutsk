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