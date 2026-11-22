import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RotaProtegida from './components/RotaProtegida';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';
import AreaRestrita from './pages/AreaRestrita';
import Coleta from './pages/Coleta';
import './App.css';

export default function App() {
  const [usuarios, setUsuarios] = useState([
    { nome: 'Luka Gabriel', email: 'admin@ecodescarte.com', senha: '123456' }
  ]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleCadastrar = (novoUsuario) => {
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header usuarioLogado={usuarioLogado} onLogout={() => setUsuarioLogado(null)} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home usuarioLogado={usuarioLogado} />} />
            <Route path="/coleta" element={<Coleta />} />
            <Route path="/login" element={<Login usuariosCadastrados={usuarios} onLogin={setUsuarioLogado} />} />
            <Route path="/cadastro" element={<Cadastro onCadastrar={handleCadastrar} />} />
            <Route path="/recuperar-senha" element={<RecuperarSenha />} />
            <Route
              path="/restrita"
              element={
                <RotaProtegida usuarioLogado={usuarioLogado}>
                  <AreaRestrita />
                </RotaProtegida>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}