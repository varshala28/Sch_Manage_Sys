// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #1A237E;
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap:20px;
  margin-left: 740px;
  @media screen and (max-width: 768px) {
  margin-top: 10px;
  }
`;


export const NavLink = styled.a`
  color: wheat;
  
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin-left:10px;
  

  transition: color 0.3s ease-in-out, transform 0.2s ease;  // Added transform transition
  
  &:hover {
    text-decoration: underline;  
  }
     &:active {
    transform: scale(0.95);  // Shrinks the link slightly when clicked
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const LoginButton = styled.button`
  background-color: #CDDC39;
  color: black;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
    &:hover {
    background-color:rgb(166, 179, 52);
  }
`;

export const GuestButton = styled.button`
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid orange;
  background-color-white;
  border-radius: 5px;
  
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #CDDC39;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;  // Centers the content vertically
  background: #D1D9E6;
  background-size: cover;
  background-position: center;
  height: 93vh;
  padding-top: 100px;


  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const SchoolInfo = styled.div`
  margin-top: 20px;
`;

export const SchoolImage = styled.img`
  width: 80%;
  max-height: 80vh;
  object-fit: cover;
  margin-top: 8px;


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;  // Use numeric value for better consistency
  color: #1A237E;
  text-align: center;  // Optional: Centers the title horizontally
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  // Slightly softer shadow for a smoother effect
  margin: 20px 0;  // Add spacing around the title

  @media screen and (max-width: 768px) {
    font-size: 28px;  // Ensures readability on smaller screens
    text-align: left;  // Optional: Align left on smaller screens for better responsiveness
  }
`;


export const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: white;
  text-align: justify;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AdminRegisterLink = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
