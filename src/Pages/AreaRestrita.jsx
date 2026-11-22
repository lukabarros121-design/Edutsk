import { useState } from 'react';
import CardColeta from '../components/CardColeta';

export default function AreaRestrita() {
  // 1. Estado inicial com array de objetos
  const [coletas, setColetas] = useState([
    { id: 1, titulo: 'Descarte de Baterias e Pilhas', endereco: 'Rua das Flores, 120 - Centro', categoria: 'Eletronicos', status: 'Pendente' },
    { id: 2, titulo: 'Recolhimento de Papelão e PET', endereco: 'Av. Norte, 450 - Paulista', categoria: 'Reciclaveis', status: 'Agendado' },
    { id: 3, titulo: 'Coleta de Óleo de Cozinha', endereco: 'Rua do Sol, 88 - Olinda', categoria: 'Organico', status: 'Pendente' },
  ]);

  // Estados do formulário (Cadastro / Edição)
  const [titulo, setTitulo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [categoria, setCategoria] = useState('Eletronicos');
  const [editandoId, setEditandoId] = useState(null);

  // Estados de Pesquisa e Filtro
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  // Função para Adicionar ou Salvar Edição
  const handleSalvar = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !endereco.trim()) return alert('Preencha título e endereço!');

    if (editandoId) {
      // Atualiza item existente
      setColetas(coletas.map((item) =>
        item.id === editandoId ? { ...item, titulo, endereco, categoria } : item
      ));
      setEditandoId(null);
    } else {
      // Cria novo item
      const novaColeta = {
        id: Date.now(),
        titulo,
        endereco,
        categoria,
        status: 'Pendente'
      };
      setColetas([novaColeta, ...coletas]);
    }

    setTitulo('');
    setEndereco('');
    setCategoria('Eletronicos');
  };

  // Prepara o formulário para edição
  const handleEditar = (item) => {
    setEditandoId(item.id);
    setTitulo(item.titulo);
    setEndereco(item.endereco);
    setCategoria(item.categoria);
  };

  // Remove item
  const handleExcluir = (id) => {
    setColetas(coletas.filter((item) => item.id !== id));
  };

  // Lógica de Filtro e Pesquisa combinados
  const coletasFiltradas = coletas.filter((item) => {
    const bateTexto = item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                      item.endereco.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = filtroCategoria === 'Todas' || item.categoria === filtroCategoria;
    return bateTexto && bateCategoria;
  });

  return (
    <div className="painel-container">
      <h2>Painel de Agendamentos e Pontos de Coleta</h2>

      {/* Formulário de Cadastro / Edição */}
      <form onSubmit={handleSalvar} className="form-inline">
        <input type="text" placeholder="Descrição do material (ex: Monitor antigo)" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <input type="text" placeholder="Endereço para coleta" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="Eletronicos">Eletrônicos</option>
          <option value="Reciclaveis">Recicláveis</option>
          <option value="Organico">Orgânico / Óleo</option>
        </select>
        <button type="submit" className="btn-primary">
          {editandoId ? 'Salvar Alteração' : '+ Adicionar Coleta'}
        </button>
        {editandoId && (
          <button type="button" onClick={() => { setEditandoId(null); setTitulo(''); setEndereco(''); }} className="btn-secondary">
            Cancelar
          </button>
        )}
      </form>

      {/* Barra de Pesquisa e Filtro */}
      <div className="filtros-bar">
        <input
          type="text"
          placeholder="🔍 Pesquisar por material ou endereço..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="Todas">Todas as Categorias</option>
          <option value="Eletronicos">Eletrônicos</option>
          <option value="Reciclaveis">Recicláveis</option>
          <option value="Organico">Orgânico / Óleo</option>
        </select>
      </div>

      {/* Listagem Dinâmica */}
      <div className="grid-cards">
        {coletasFiltradas.length > 0 ? (
          coletasFiltradas.map((item) => (
            <CardColeta
              key={item.id}
              item={item}
              onEditar={handleEditar}
              onExcluir={handleExcluir}
            />
          ))
        ) : (
          <p className="empty-msg">Nenhum agendamento encontrado com esses filtros.</p>
        )}
      </div>
    </div>
  );
}