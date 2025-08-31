import "./WavingHand.css";
import styled from "styled-components";

const Waving = styled.div`
  color: black;

  @media (max-width: 768px) {
    font-size: 30px;
    color: black;
    letter-spacing: -1px;
  }
`;

function WavingHand() {
  return (
    <>
      <Waving>
        Hola, I'm Luthfi<span className="waveHand">👋</span>
      </Waving>
    </>
  );
}

export default WavingHand;
