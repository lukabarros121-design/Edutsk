import { Navigate } from 'react-router-dom';

export default function RotaProtegida({ usuarioLogado, children }) {
  if (!usuarioLogado) {
    // Se não estiver logado, redireciona à força para o Login
    return <Navigate to="/login" replace />;
  }
  return children;
}