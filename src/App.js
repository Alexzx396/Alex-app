import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/containers/ItemListContainer";

function App() {

  return (

    <div className="App">

        < NavBar />

              <h1> Plantastik </h1>
              <br/><br/>
              
        < ItemListContainer greeting= "ACA VAN A ESTAR LAS CARDS CON PRODUCTOS" />
        
    </div>
  );
}

export default App;
