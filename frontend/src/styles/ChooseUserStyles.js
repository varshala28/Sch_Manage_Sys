import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #121212, #4C1D95); /* Dark Rich Gradient */
  overflow: hidden;
  animation: fadeInBackground 1.5s ease-in-out;

  @keyframes fadeInBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15); /* Glassmorphism Effect */
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(255, 215, 0, 0.2); /* Golden Glow */
  cursor: pointer;
  text-align: center;
  width: 240px;
  height: 240px;
  border: 2px solid rgba(255, 215, 0, 0.4);  /* Subtle Gold Border */
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.4s ease, border 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 15px 40px rgba(255, 215, 0, 0.15);
    border: 2px solid rgba(255, 215, 0, 0.3);
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  color: white; 
  text-shadow: 2px 2px 10px rgba(255, 215, 0, 0.1);
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  background: linear-gradient(135deg, #F1C40F, #D4AF37); /* Gold Gradient */
  color: #121212;
  padding: 14px 28px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 10px;
  transition: background 0.3s ease, transform 0.2s ease;
  font-size: 18px;
  
`;
