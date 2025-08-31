import "./ProjectSoon.css";
import styled from "styled-components";

const ProjectSoon = styled.div`
    margin: 0 auto;

    @media (max-width: 768px) {
        .cardd:hover {
            transform: none !important;
        }
        
        width: 21rem !important;
    }
   
`;

const Title = styled.h6`
    @media (max-width: 768px) {
        letter-spacing: -1px !important;
    }
`;

function ComingSoon() {
    return (
        <>
            <ProjectSoon className="card cardd mt-5 rounded-3 border" style={{width: "23.5rem"}}>
                <img src="https://i.pinimg.com/1200x/ec/ba/eb/ecbaeb6491ddc80c839529a686652953.jpg" className="card-img-top" alt="" style={{height: "300px"}}/>
                <div className="card-body">
                    <Title className="card-title fs-5 fw-semibold">Coming Soon</Title>
                    <p className="mb-2" style={{fontSize: "16px", color: "#707070ff"}}>Undifined - Undifined</p>
                    <p className="card-text" style={{fontSize: "15px", lineHeight: "19px",}}>Please stay tuned, my projects are coming soon. Thank you for your patience!</p>
                    <a href="" className="btn fw-bold border-0 btn-prjct btn-primary"><i className="fa-solid fa-globe me-1"></i> Website</a>
                </div>
            </ProjectSoon>
        </>
    );
}

export default ComingSoon;