import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import CardPage from './components/Card/CardPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 80%;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Arrow = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  opacity: 0.8;
  &:hover{
    color: white;
    cursor: pointer;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [page, setPage] = useState(1);
  
  const handleClickRight = () => {
    if(page === 9){
      setPage(9);
    }else{
      setPage(page + 1);
    }
  }

  const handleClickLeft = () => {
    if(page === 1){
      setPage(1);
    }else{
      setPage(page - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <FlexContainer>
        <Arrow onClick={handleClickLeft}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        </Arrow>
        <Container>
          <CardPage page={page}/>
        </Container>
        <Arrow onClick={handleClickRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </FlexContainer>
    </div>
  );
}

export default App;
