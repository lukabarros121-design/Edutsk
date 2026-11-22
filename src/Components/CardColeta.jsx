export default function CardColeta({ item, onEditar, onExcluir }) {
  return (
    <div className="card-item">
      <div className="card-header">
        <span className={`tag-categoria ${item.categoria.toLowerCase()}`}>
          {item.categoria}
        </span>
        <span className="status-badge">{item.status}</span>
      </div>
      <h3>{item.titulo}</h3>
      <p><strong>Local:</strong> {item.endereco}</p>
      <div className="card-actions">
        <button onClick={() => onEditar(item)} className="btn-editar">Editar</button>
        <button onClick={() => onExcluir(item.id)} className="btn-excluir">Remover</button>
      </div>
    </div>
  );
}