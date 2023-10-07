import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Input from './components/Input';
import Button from './components/Button';


function App() {


  return (
    <div className="App">

      <Header className='header'/>
    
      <Main></Main>

      <Input prop4='Pesquise no Google ou digite um URL' prop6={80}></Input>

      <Button prop1='Pesquisar Google' prop2={25} prop3></Button>
    
      <Button prop1='Estou com sorte' prop2={30} prop3></Button>

      
    </div>
  );
};

export default App;
