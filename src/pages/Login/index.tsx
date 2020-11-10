import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form, Input, Button } from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { push } = useHistory();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!email || !password) {
            return alert('Email ou Senha inválidos.');
        }

        api.post('/users/login', {email, password})
        .then(response => {
            localStorage.setItem("token", response.data);
            push('/home');
        })
        .catch(error => console.log(error));
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Input placeholder="Email" value={email} onChange={email => setEmail(email.target.value)} />
                <Input type="password" placeholder="Senha" value={password} onChange={password => setPassword(password.target.value)} />
                <Button>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;
