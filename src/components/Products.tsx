import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '@/constants';

const Sc = {
    Container: styled.div`
        display: grid;
        gap: 48px;
        padding: 64px 0;
        grid-template-columns: 1fr;

        @media (min-width: ${breakpoints.sm}) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: ${breakpoints.lg}) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: ${breakpoints.xl}) {
            grid-template-columns: repeat(4, 1fr);
        }
    `,
};

export type ProductsProps = {
    children: React.ReactNode;
};

export const Products = ({ children }: ProductsProps) => {
    return <Sc.Container>{children}</Sc.Container>;
};
