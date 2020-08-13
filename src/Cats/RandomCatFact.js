import React from "react";
import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function RandomCatFact(props) {
  const [fact, setFact] = React.useState("")
  
  
  function getRandomNumber() {
    return Math.floor(Math.random() * (235))
  }
  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let index = getRandomNumber()
        setFact(data.all[index].text)
      });
  }, []);

  if (fact == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <p>{fact}</p>
    </MainContainer>
  );
}

export default RandomCatFact;
