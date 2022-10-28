import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <StyledContainer>
      <Header />
      <Main />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap");
  font-family: "Roboto Mono", monospace;
`;
