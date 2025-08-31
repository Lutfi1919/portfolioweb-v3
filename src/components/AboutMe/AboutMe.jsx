import VariableProximity from "./VariableProximity";
import { useRef } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Title = styled.h5`
  font-weight: 720;
  font-family: Inter;

  @media (max-width: 768px) {
    margin: 0px 20px;
    font-weight: 720;
    font-family: Inter;
  }
`;

const Isi = styled.div`
  line-height: 21px;

  @media (max-width: 768px) {
    margin: 8px 20px;
    font-size: 14.5px;
  }
`;
function AboutMe() {
  const containerRef = useRef(null);

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="" data-aos="fade">
        <Title>About Me</Title>
      </div>
      <div className="" data-aos="fade" data-aos-delay="100">
        <Isi ref={containerRef} style={{ marginBottom: "40px" }}>
          <VariableProximity
            label={
              "I just started my journey at SMK Wikrama in July 2024, majoring in PPLG (Software and Game Development). I’m currently learning and developing my skills in this field, with the hope of becoming a professional Software Developer in the future."
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={30}
            falloff="gaussian"
          />
        </Isi>
      </div>
    </>
  );
}

export default AboutMe;
