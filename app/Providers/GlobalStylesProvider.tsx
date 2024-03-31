"use client";

import React from 'react'
import { styled } from 'styled-components';
// import styled from 'styled-components/dist/constructors/styled';

interface Props {
    children: React.ReactNode;
}

function GlobalStylesProvider({ children }: Props) {

    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        // setting timer
        setTimeout(() => {
            setIsReady(true);
        }, 200);
    }, []);

    if (!isReady) {
        return null;
    }

  return <GlobalStyles>{children}</GlobalStyles>;
}

const GlobalStyles = styled.div`
    padding: 2.5rem;
    display: flex;
    gap: 2.5rem;
    height: 100%;
`;

export default GlobalStylesProvider
