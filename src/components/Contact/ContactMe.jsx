import "./ContactMe.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 70px !important  ;
  }
`;

const Number = styled.h2`
  @media (max-width: 768px) {
    text-align: left !important;
    margin-top: -50px;
  }
`;

const ContactWrapper = styled.div`
  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`;

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - startTime < 3000) {
      setStatus("error");
      return;
    }

    const form = e.target;
    const data = new FormData(form);
    const endpoint = "https://formspree.io/f/xvgbapvp";

    setStatus("loading");

    fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };
  return (
    <>
      <div className="">
        <Title
          className="text-center fw-semibold"
          style={{ fontSize: "154px" }}
        >
          Contact Me
        </Title>
        <ContactWrapper className="row mt-4">
          <div className="col-12 col-md-6">
            <p className="fw-medium">Bogor, West Java, Indonesia</p>
          </div>
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control rounded-0 border-0 border-black border-bottom"
                  style={{ marginTop: "-10px" }}
                  id="firstName"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control rounded-0 border-0 border-black border-bottom"
                  style={{ marginTop: "-10px" }}
                  id="lastName"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-0 border-0 border-black border-bottom"
                  style={{ marginTop: "-10px" }}
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control rounded-0 border-0 border-black border-bottom"
                  style={{ marginTop: "-10px" }}
                  id="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-submit px-4 py-1 rounded-pill fw-semibold"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                Submit
              </button>

              {status === "loading" && (
                <p className="mt-2 text-secondary">Sending...</p>
              )}
              {status === "success" && (
                <p className="mt-2 text-success">Message sent! 🎉</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-danger">Oops! Something went wrong.</p>
              )}
            </form>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <h2 className="fw-semibold">luthfiamad19@gmail.com</h2>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <Number className="text-end fw-semibold">
              (+62) 878-7522-1858
            </Number>
          </div>
        </ContactWrapper>
      </div>
    </>
  );
}
