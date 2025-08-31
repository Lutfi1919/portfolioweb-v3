import CircularGallery from "./CircularGallery";
import "./Certificate.css";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Title = styled.h1`
  font-size: 55px;
  font-family: DM Sans;
  color: black;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 35px !important;
    color: black;
    letter-spacing: -1px !important;
    line-height: 30px;
    margin: 10px 30px !important;
  }
`;

const SubTitle = styled.h5`
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0px 20px;
    color: black;
  }
`;

function Certificates() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div>
        <div className="mt-2 text-center" style={{ marginBottom: "0px" }}>
          <a className="btn border-0 fw-semibold btn-primary btn-judul" data-aos="fade">
            Certificates
          </a>
          <Title
            data-aos="fade"
            className="text-center fw-bold mt-1"
            style={{ fontSize: "55px", fontFamily: "DM Sans" }}
          >
            Browse my achievements
          </Title>
          <SubTitle className="text-center text-secondary fw-normal" data-aos="fade">
            Here are some certificates I’ve earned, and I’ll keep learning to
            further improve my skills in this field.
          </SubTitle>
        </div>
      </div>
      <div
        className="fade-kankir"
        data-aos="fade"
        data-aos-offset="400"
        style={{ height: "500px", position: "relative", marginTop: "-100px" }}
      >
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.0}
          scrollEase={0.02}
        />
      </div>
    </>
  );
}

export default Certificates;
