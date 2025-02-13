import { useState } from 'react'
import {AdminRegisterContainer,
    FormContainer,
    InputField,
    SubmitButton
} from '../styles/AdminRegisterStyles'

const AdminRegister =() =>{
    
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');

    const handleRegister =() =>{
        console.log('Admin Registered',{email,password});
    }
    return (
        <AdminRegisterContainer>
            <h2> Admin Register </h2>
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
                <SubmitButton type='button' onClick={handleRegister} > Register </SubmitButton>
            </FormContainer>
            </AdminRegisterContainer>
    )
}

export default AdminRegister;