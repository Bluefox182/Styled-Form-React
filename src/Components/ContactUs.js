import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <StyledLeft>
        <h4>Contact Us</h4>
        <h2>Work for yourself, not by yourself, with Gaspar insurance</h2>
        <p>
          Send us a message and we'll get your questions answered as soon as
          possible
        </p>
      </StyledLeft>
      <StyledForm>
        <form className="form">
          <div className="form-field">
            <input type="text" id="name" placeholder="First Name*" />
          </div>
          <div className="form-field">
            <input type="text" id="name" placeholder="Last Name*" />
          </div>
          <div className="form-field">
            <input type="email" id="email" placeholder="Email Address*" />
          </div>
          <div className="form-field">
            <input type="number" id="email" placeholder="Phone Number*" />
          </div>
          <div className="form-field">
            <input
              type="text"
              id="subject"
              placeholder="Best Time to Contact You?"
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              id="subject"
              placeholder="What's your preferred method of contact?"
            />
          </div>
          <div className="form-field">
            <textarea
              name="textarea"
              className="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Do you have any additional information?"
            ></textarea>
          </div>
          <div className="f-button">
            <input type="submit" value="Submit your message" />
          </div>
        </form>
      </StyledForm>
    </StyledContactUs>
  );
};

const StyledContactUs = styled.div`
  display: flex;
  margin: 7rem 5rem;
  padding: 0 3rem;
  gap: 5rem;
  /* font-family: "Space Mono", monospace; */
  font-family: "Noto Sans", sans-serif;
  color: #a6a9b6;

  @media (max-width: 768px) {
    display: block;
    margin: 4rem 0;
    width: 100%;
    padding: 0 1rem;
  }
`;

const StyledLeft = styled.div`
  width: 50%;
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    font-family: "Montserrat", sans-serif;
    color: #f1f7e7;
    font-size: 2.5rem;
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  p {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 4rem 0;

    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
  }
`;

const StyledForm = styled.div`
  background-color: #fdf6f0;
  border-radius: 10px;
  width: 50%;
  height: auto;
  padding: 3.5rem 3rem;
  color: #17223b;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.5rem;
    margin: 0 auto;
  }

  .form-field {
    padding: 0.5rem 0;
    font-size: 1.5rem;
    input {
      border: 1px solid #9d9d9d;
      border-radius: 10px;
      outline: none;
      background: transparent;
      height: 50px;
      padding: 0 15px;
      width: 100%;
      font-family: "PT Mono", monospace;
      color: #17223b;
      ::placeholder {
        color: #17223b;
      }
    }
  }

  .textarea {
    background-color: transparent;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    width: 100%;
    outline: none;
    font-family: "PT Mono", monospace;
    color: #17223b;
    padding: 0.8rem 1rem;
    ::placeholder {
      color: #17223b;
    }
  }
  .f-button {
    width: 100%;
    background-color: #17223b;
    text-align: center;
    padding: 1.2rem 2.5rem;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all 0.4s ease-in-out;
    input {
      font-family: "PT Mono", monospace;
      background-color: transparent;
      color: #fdf6f0;
      border: none;
      font-size: 0.9rem;
    }
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0.2rem;
      transition: all 0.4s ease-in-out;
      left: 0;
      bottom: 0;
      opacity: 0.7;
    }
    &:hover::after {
      width: 100%;
      background-color: var(--white-color);
    }
  }
`;

export default ContactUs;
