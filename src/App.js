import './App.css';
import Card from './components/Card';
import styled from 'styled-components';

function App() {

  const StyledDiv = styled.p`
  background-color:green;
  color:pink;
  padding:10px
  
  `;
  let color = "blue";

  const StyledParaghraph = styled.p`
  background-color:yellow;
  color:${color};
  padding:20px

  `;

  

 let email = "email@gmail.com"
  let age = 25
  let phone = "+21693090615"
  return (
    <div className="App">
      <Card  email={email}  age={age}   phone={phone} />
      <StyledDiv>test</StyledDiv>
      <StyledParaghraph $color = {color}>My P</StyledParaghraph>
    </div>
  );
}

export default App;
