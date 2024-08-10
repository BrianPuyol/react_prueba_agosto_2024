import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/header'; //siempre importar
import Nav from './componentes/nav'; //siempre importar
import Footer from './componentes/footer'; //siempre importar

import HomePage from './pages/HomePage';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';

function App() {
  return (
    <div className="App">
      <Header /> {/* componentes */}
      <BrowserRouter>
        <Nav /> {/* componentes */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pagina1' element={<Pagina1 />} />
          <Route path='/pagina2' element={<Pagina2 />} />
        </Routes>
      </BrowserRouter>
      <Footer /> {/* componentes */}
    </div>
  );
}

export default App;
