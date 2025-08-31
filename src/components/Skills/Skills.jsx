import ScrollVelocity from "./ScrollVelocity";
import Skills from "./SkillCard";
import "./Skills.css";
import styled from "styled-components";

const Title = styled.h5`
  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`;

const SkillWrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`;

function SkillsAndTools() {
  return (
    <>
      <div className="mb-5">
        <Title className="fw-bold mb-0" style={{ fontFamily: "Inter" }}>
          Skills and Tools
        </Title>

        <SkillWrapper className="mt-2">
          <ScrollVelocity
            texts={[<Skills />, <Skills />]}
            velocity={100}
            className="custom-scroll-text"
          />
        </SkillWrapper>
      </div>
    </>
  );
}

export default SkillsAndTools;
