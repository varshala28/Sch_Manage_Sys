import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  background: linear-gradient(135deg, #5B5F97, #D9A7C7); 
  min-height: 100vh; 
  padding: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; 
  padding: 30px;
  border: 1px solid #bbb;
  border-radius: 12px; 
  background-color: #f0f0f0; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-top: 40px; 
`;

export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #999; 
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box; 
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #6C5B7B; 
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8e44ad; ; 
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
