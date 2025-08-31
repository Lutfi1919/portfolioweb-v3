import "./Header.css";
import Stack from "./Stack.jsx";
import SplitText from "./SplitText";
import WavingHand from "./WavingHand.jsx";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeaderWrapper = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 400px;
    margin: 10px auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
  }
`;

const ProfilePict = styled.div`
  border-radius: 100%;
  margin-right: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StackWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 768px) {
    font-size: 17px !important;
    margin: -50px 20px;
    max-width: 260px;
    line-height: 22px;
  }
`;

function Headerr() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  const images = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/69/29/66/692966d68bd0eebe483d45b473473c95.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/b6/2c/7c/b62c7c900a6271ffbb4b8c77b86e276a.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/8e/9d/15/8e9d1513aa1bad8d671f78676809bb05.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/1200x/28/97/4b/28974b924917db8fcf5a70d2c0c49e59.jpg",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/83/6e/8d/836e8d091089b000d87d9bc7cea49ede.jpg",
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <div className="atas text-center">
          <Title>
            <SplitText
              text={<WavingHand />}
              className="fw-bold fsplit"
              delay={70}
              duration={2}
              ease="elastic.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <StackWrapper data-aos="fade">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 200, height: 200 }}
                cardsData={images}
              />
            </StackWrapper>
            <ProfilePict>
              <img
                className="shadow"
                src="/images/gtg.jpg"
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "100%", objectFit: "cover" }}
              />
            </ProfilePict>
          </Title>
          <HeaderInfo className="HeaderInfo fs-5" data-aos="fade" data-aos-delay="300">
            I’m someone who enjoys exploring design and discovering new ideas.
            Always curious, always learning.
          </HeaderInfo>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default Headerr;
