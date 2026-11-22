export default function CardInfo({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', margin: '10px 0', background: '#f9f9f9' }}>
      <h3 style={{ color: '#2E7D32', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#555' }}>{description}</p>
    </div>
  );
}