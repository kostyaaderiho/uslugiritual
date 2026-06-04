import React from 'react';
import styled from 'styled-components';

const Sc = {
    Container: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 48px;
        padding: 64px 0;
    `,
};

export type ProductsProps = {
    children: React.ReactNode;
};

export const Products = ({ children }: ProductsProps) => {
    return <Sc.Container>{children}</Sc.Container>;
};
