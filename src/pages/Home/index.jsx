import '../../Utils/Style/App.css';
import styled from "styled-components";
import {useState} from "react";

function Home() {
    const [size, setSize] = useState(1);
    const Balloon = styled.div`
      margin-top: 4rem;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: brown;
      ${({size}) => `transform : scale(${size})`}
    `

  return (
    <div className="App">
        <h2 onClick={() => setSize(size + .1)}>Page d'accueil 🏡</h2>
        <Balloon size={size}></Balloon>
    </div>
  );
}

export default Home;
