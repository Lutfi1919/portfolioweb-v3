import styled from "styled-components";

const Title = styled.h5`
  font-weight: 720;
  font-family: Inter;
  @media (max-width: 768px) {
    margin: 0px 20px;
    font-weight: 720;
    font-family: Inter;
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 15px;
    margin: 8px 20px 40px;
  }
`;

const SchoolInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SchoolText = styled.div`
  font-size: 12px;
  font-family: "DM Sans";

  p {
    margin: 0;
    &.title {
      font-weight: bold;
      margin-left: 8px;
      margin-top: 4px;
      line-height: 12px
    }
    &.subtitle {
      font-weight: bold;
      margin-left: 8px;
      margin-top: 5px;
      color: grey;
    }
  }
`;

const DateText = styled.h6`
  margin-top: 8px;
  color: grey;
  font-size: 15px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 13px;
  }
`;

function Education() {
  return (
    <>
      <Title>Education</Title>
      <EducationWrapper>
        <SchoolInfo>
          <img
            className="LogoWk shadow-lg"
            src="/images/wikrama-logo.png"
            alt="Logo"
            width={55}
          />
          <SchoolText>
            <p className="title">Wikrama Vocational School, Bogor</p>
            <p className="subtitle">PPLG</p>
          </SchoolText>
        </SchoolInfo>
        <DateText>Jul 2024 - Present</DateText>
      </EducationWrapper>
    </>
  );
}

export default Education;
