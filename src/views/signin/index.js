import React, { useState } from 'react';

import { useHistory, Redirect } from 'react-router-dom';

import { Envelope, LockAlt } from '@styled-icons/boxicons-regular';

import { SmallContainer } from '../../components/shared/containers';
import { Input, Button } from '../../components/forms';

import { HeaderText } from './styles';

import authentication from '../../api/authentication';

export default function SignIn() {
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleSubmit(event) {
        event.preventDefault();

        const [authenticated, message] = await authentication.authenticate(email, password);

        if (!authenticated) {
            return alert(message);
        }

        history.push('/home');
    }

    if (authentication.isAuthenticated()) {
        return <Redirect to="/home"></Redirect>;
    }

    return (
        <SmallContainer>
            <HeaderText>Statikk</HeaderText>
            <HeaderText style={{ paddingTop: 4 }} size="14px" color="#7583A8">
                Sign-in to access your dashboard
            </HeaderText>
            <form onSubmit={handleSubmit}>
                <Input
                    style={{ marginTop: 18 }}
                    type="email"
                    name="email"
                    icon={<Envelope width={18} />}
                    placeholder="your@email.com"
                    onChange={({ target }) => setEmail(target.value)}
                    required
                />
                <Input
                    style={{ marginTop: 6 }}
                    type="password"
                    name="password"
                    icon={<LockAlt width={18} />}
                    placeholder="••••••••••••"
                    onChange={({ target }) => setPassword(target.value)}
                    required
                />
                <Button style={{ marginTop: 8 }}>Sign-in</Button>
            </form>
        </SmallContainer>
    );
}
