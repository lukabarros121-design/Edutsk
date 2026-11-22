export default function Coleta() {
  return (
    <div>
      <h1>Pontos de Coleta</h1>
      <p>Consulte abaixo os locais parceiros cadastrados em nossa base para descarte de eletrônicos, pilhas e plásticos:</p>
      <ul>
        <li>Ecoponto Centro - Rua das Flores, 123</li>
        <li>Posto Sustentável Norte - Av. Principal, 456</li>
      </ul>
    </div>
  );
}

import { useState } from 'react';

const PONTOS_INICIAIS = [
  {
    id: 1,
    nome: 'Ecoponto Centro',
    endereco: 'Rua das Flores, 120 - Centro',
    categoria: 'Eletronicos',
    horario: 'Seg a Sex, 08h às 17h',
  },
  {
    id: 2,
    nome: 'Posto Sustentável Norte',
    endereco: 'Av. Norte, 450 - Paulista',
    categoria: 'Reciclaveis',
    horario: 'Seg a Sáb, 07h às 18h',
  },
  {
    id: 3,
    nome: 'Ponto Verde Olinda',
    endereco: 'Rua do Sol, 88 - Olinda',
    categoria: 'Organico',
    horario: 'Ter a Dom, 08h às 16h',
  },
];

export default function Coleta() {
  const [pontos] = useState(PONTOS_INICIAIS);
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const pontosFiltrados = pontos.filter((ponto) => {
    const correspondeBusca =
      ponto.nome.toLowerCase().includes(busca.toLowerCase()) ||
      ponto.endereco.toLowerCase().includes(busca.toLowerCase());

    const correspondeCategoria =
      categoriaSelecionada === 'Todas' || ponto.categoria === categoriaSelecionada;

    return correspondeBusca && correspondeCategoria;
  });

  return (
    <section className="painel-container">
      <h2>Pontos de Descarte e Coleta</h2>
      <p style={{ marginBottom: '16px', color: '#555' }}>
        Consulte os locais disponíveis por tipo de resíduo ou pesquise por nome e bairro.
      </p>

      <div className="filtros-bar">
        <input
          type="text"
          placeholder="Buscar por ponto ou endereço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          <option value="Todas">Todas as categorias</option>
          <option value="Eletronicos">Eletrônicos</option>
          <option value="Reciclaveis">Recicláveis</option>
          <option value="Organico">Orgânico</option>
        </select>
      </div>

      <div className="grid-cards">
        {pontosFiltrados.length > 0 ? (
          pontosFiltrados.map((ponto) => (
            <article key={ponto.id} className="card-item">
              <div className="card-header">
                <span className="tag-categoria">{ponto.categoria}</span>
                <span className="status-badge">{ponto.horario}</span>
              </div>
              <h3>{ponto.nome}</h3>
              <p>
                <strong>Endereço:</strong> {ponto.endereco}
              </p>
            </article>
          ))
        ) : (
          <p className="empty-msg">Nenhum ponto de coleta encontrado para o filtro atual.</p>
        )}
      </div>
    </section>
  );
}