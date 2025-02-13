import { useState } from 'react'
import {StudentSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/StudentSignInStyles';

const StudentSignIn =() =>{
    
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');

    const handleStudentSignIn =() =>{
        console.log('Student SignIn',{email,password});
    }
    return (
        <StudentSignInContainer>
            <h2>Student SignIn </h2>
            <FormContainer>
                <InputField
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton to="/student/dashboard" onClick={handleStudentSignIn} > Register </SubmitButton>
            </FormContainer>
            </StudentSignInContainer>
    )
}

export default StudentSignIn;