export default function Agendamento() {
  return (
    <div>
      <h1>Agendamento de Coleta</h1>
      <p>Preencha os dados abaixo para solicitar o recolhimento de materiais em sua residência:</p>
      <form onSubmit={(e) => { e.preventDefault(); alert('Agendamento simulado com sucesso!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginTop: '15px' }}>
        <input type="text" placeholder="Seu Nome Completo" required style={{ padding: '8px' }} />
        <input type="text" placeholder="Endereço Completo" required style={{ padding: '8px' }} />
        <input type="date" required style={{ padding: '8px' }} />
        <button type="submit" style={{ background: '#2E7D32', color: '#white', padding: '10px', border: 'none', cursor: 'pointer', color: '#fff' }}>Solicitar Agendamento</button>
      </form>
    </div>
  );
}