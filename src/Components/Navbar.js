import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledNavbar>
      <StyledLogo href="">Gaspar</StyledLogo>
      <StyledHamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburger>
      <StyledMenu isOpen={isOpen}>
        <StyledMenuLink href="">Home</StyledMenuLink>
        <StyledMenuLink href="">Company</StyledMenuLink>
        <StyledMenuLink href="">Solutions</StyledMenuLink>
        <StyledMenuLink href="">Contact Us</StyledMenuLink>
      </StyledMenu>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* transition: all 0.3s linear; */
  background-color: #fefbf3;
`;

const StyledHamburger = styled.div`
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  display: none;
  flex-direction: column;
  color: #1597bb;
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: #1597bb;
    font-size: 1.5rem;
    transform: rotate(90deg);
  }
  span {
    height: 2px;
    width: 25px;
    background-color: #17223b;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledMenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #17223b;
  transition: all 0.5s linear;
  font-size: 0.8rem;

  &:hover {
    color: #1597bb;
    transition: all 0.5s linear;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 0;
    &:hover {
      color: #fefbf3;
      background-color: #1597bb;
      width: 100%;
      padding-left: 1.5rem;
    }
  }
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    color: black;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.5s linear;
  }
`;

const StyledLogo = styled.a`
  padding: 1rem 1.5rem;
  color: #17223b;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  /* font-family: "Roboto Mono", monospace; */
  font-family: "Montserrat", sans-serif;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default Navbar;
