import './App.css';
import Header from '../src/Componentes/Header/Header';
import Footer from '../src/Componentes/Footer/Footer';
import Atividade from '../src/Componentes/Atividade/Atividade';


function App() {
  return (
    <div className="App">
      <Header/>
      <Atividade/>
      <Footer/>
    </div>
  );
}

export default App;

