import { useState } from 'react'
import {TeacherSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/TeacherSignInStyles';

const TeacherSignIn =() =>{
    
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');

    const handleTeacherSignIn =() =>{
        console.log('Student SignIn',{email,password});
    }
    return (
        <TeacherSignInContainer>
            <h2>Teacher SignIn </h2>
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
                <SubmitButton to="/teacher/dashboard" onClick={handleTeacherSignIn} > Register </SubmitButton>
            </FormContainer>
            </TeacherSignInContainer>
    )
}

export default TeacherSignIn;