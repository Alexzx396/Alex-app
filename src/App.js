import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/containers/ItemListContainer"
// import SuperForm from "./components/SuperForm";
// import {SuperButon} from "./components/SuperButton";
import {Container, Row, Col} from 'react-bootstrap'
import ItemContainer from './components/containers/ItemContainer';



function App() {
  return (

 
    <Container fluid >
        < NavBar />
        <Row className="mt-5">
          <Col className="mt-5 d-flex justify-content-center">
              <ItemListContainer greeting="ACA VAN A ESTAR LAS CARDS CON PRODUCTOS"> 
                <ItemContainer />
              </ItemListContainer>
          </Col>
        </Row>
      </Container>
  

        //       <h1>  PLANTASTIK </h1>
                  
        // < ItemListContainer greeting= "ACA VAN A ESTAR LAS CARDS CON PRODUCTOS" />

        // < SuperForm title= 'CLICK' componenteRender={SuperButon}>
        // <h1> Plantastik </h1>

        // </SuperForm >
        // {/* <SuperButon /> */}

        // < ItemCount />


    // </div>
    
  );

}

export default App;

