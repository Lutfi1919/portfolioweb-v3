import ComingSoon from "./ProjectSoon";
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
    font-size: 35px;
    color: black;
    letter-spacing: -1px;
  }
`;

const SubTitle = styled.h5`
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0px 20px;
    color: black;
  }
`;

const Isi = styled.div`

  @media (max-width: 768px) {

  }
`;

const ProjectSpecial = styled.div`
  @media (max-width: 768px) {
    margin-top: -70px !important;
  }
`;

const ProjectSpecial2 = styled.div`
  @media (max-width: 768px) {
    margin-top: -20px !important;
  }
`;

function Projects() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div>
        <div className="text-center" data-aos="fade">
          <a className="btn border-0 fw-semibold btn-primary btn-judul">
            Portfolio
          </a>
        </div>
        <Title
          data-aos="fade"
          className="text-center fw-bold mt-1"
        >
          My latest projects
        </Title>
        <SubTitle className="text-center text-secondary fw-normal" data-aos="fade">
          Here are some projects I’ve completed, and I’ll keep learning to
          improve my skills in this field.
        </SubTitle>
      </div>
      <Isi className="row">
        <div className="col-12 col-md-6 blur" data-aos="fade" data-aos-offset="400">
          <ComingSoon />
        </div>
        <ProjectSpecial2 className="col-12 col-md-6 blur" data-aos="fade" data-aos-offset="400">
          <ComingSoon />
        </ProjectSpecial2>
        <div className="col-12 col-md-6 blur mb-5" style={{ marginTop: "-18px" }} data-aos="fade" data-aos-offset="400">
          <ComingSoon />
        </div>
        <ProjectSpecial className="col-12 col-md-6 blur mb-5" style={{ marginTop: "-18px" }} data-aos="fade" data-aos-offset="400">
          <ComingSoon />
        </ProjectSpecial>
      </Isi>
    </>
  );
}

export default Projects;
