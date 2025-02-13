import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items at the top */
  background: linear-gradient(45deg, #6a89cc, #b8c6db); /* Neutral blue gradient */
  min-height: 100vh; /* Full height of the viewport */
  padding: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Increased form width */
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px; /* Rounded corners */
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-top: 40px; /* Reduced top margin to pull the form up */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box; /* Ensure padding doesn't overflow */
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #3498db; /* Standard blue */
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
