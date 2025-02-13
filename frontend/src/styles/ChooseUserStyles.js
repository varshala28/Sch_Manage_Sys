import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #ecf0f1  
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
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(167, 157, 220, 0.1);
  cursor: pointer;
  text-align: center;
  width: 220px;
  height: 220px;
  border: 2px solid #e1e1e1;  /* Light gray border */
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(167, 157, 220, 0.15);
    border: 2px solid #6c757d;  /* Subtle grayish border on hover */
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #4169e1;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  background-color: #003b5c
;  /* Slate gray for a professional look */
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 16px;

  &:hover {
    background-color: #1a4d6d;  /* Darker gray on hover */
    transform: scale(1.05);
  }
`;
