'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Typography, Divider } from 'antd';

import { CallButton, SubTitle } from '@/components';
import { breakpoints } from '@/constants';

const Sc = {
    Container: styled.div`
        display: flex;
        gap: 56px;
        flex-direction: column;

        @media (min-width: ${breakpoints.lg}) {
            flex-direction: row;
        }
    `,

    Content: styled.div`
        display: flex;
        flex-direction: column;
    `,

    ImageWrapper: styled.div`
        display: block;

        position: relative;

        flex-basis: 640px;
        aspect-ratio: 16 / 18;

        overflow: hidden;
        border-radius: 8px;
    `,

    Image: styled(Image)`
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        object-fit: cover;
        object-position: center;
    `,
    Title: styled(Typography.Title)`
        font-family: --font-eb-garamond;
        font-weight: 300 !important;
        margin: 0 !important;
    `,
    Size: styled(Typography.Paragraph)`
        font-family: --font-eb-garamond;
        font-weight: 300 !important;
        font-size: 20px !important;
        margin: 16px 0 0;
    `,
    Description: styled(Typography.Paragraph)`
        font-size: 16px;
    `,
    Price: styled(Typography.Paragraph)`
        color: ${({ theme }) => theme.colorPrimary};
        font-size: 30px;
        margin-top: 32px;
        font-weight: 300;
    `,
    CallButton: styled(CallButton)`
        text-align: left;
    `,
    Divider: styled(Divider)`
        margin: 64px 0 !important;
    `,
};

type ProductDetailsProps = {
    category: string;
    title: string;
    size: string;
    description: string;
    price: string;
    imageSrc: string;
};

export const ProductDetails = ({
    category,
    title,
    size,
    description,
    price,
    imageSrc,
}: ProductDetailsProps) => (
    <Sc.Container>
        <Sc.ImageWrapper>
            <Sc.Image
                src={imageSrc}
                alt={title}
                sizes="(max-width: 768px) 100vw, 360px"
                fill
            />
        </Sc.ImageWrapper>

        <Sc.Content>
            <SubTitle $centered={false}>{category}</SubTitle>
            <Sc.Title>{title}</Sc.Title>
            <Sc.Size>{size}</Sc.Size>
            <Sc.Description>{description}</Sc.Description>
            <Sc.Price>{price}</Sc.Price>
            <Sc.CallButton />
        </Sc.Content>
    </Sc.Container>
);
