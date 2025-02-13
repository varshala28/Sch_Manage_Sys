import { useState } from 'react'
import {AdminSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/AdminSignInStyles'

const AdminSignIn =() =>{
    
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');

    const handleSignIn =() =>{
        console.log('Admin SignIn',{email,password});
    }
    return (
        <AdminSignInContainer>
            <h2> Admin SignIn </h2>
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
                <SubmitButton to="/admin/dashboard" onClick={handleSignIn} > Register </SubmitButton>
            </FormContainer>
            </AdminSignInContainer>
    )
}

export default AdminSignIn;