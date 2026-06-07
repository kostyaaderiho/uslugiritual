'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';

import {
    CentralizedContainer,
    SimilarProducts,
    CallButton,
    SubTitle,
} from '../../../components';

const Sc = {
    Container: styled.div`
        display: flex;
        gap: 80px;
    `,
    Content: styled.div`
        display: flex;
        flex-direction: column;
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

export default function Page() {
    // TODO: Take products from API
    const products = [
        {
            id: '1',
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
        {
            id: '2',
            title: 'Венок «Светлая память»',
            description:
                'Белые розы и лилии на каркасе из живой зелени. Символ чистоты и вечной памяти.',
            sizes: 'Ø 60 см',
            price: 'От 4500р',
            imgSrc: '/images/wreath-1-CQt_nJKf.jpg',
        },
    ];

    return (
        <CentralizedContainer>
            <Sc.Container>
                <Image
                    src="/images/wreath-1-CQt_nJKf.jpg"
                    alt="Wreath"
                    width={500}
                    height={500}
                />

                <Sc.Content>
                    <SubTitle $centered={false}>Венки</SubTitle>
                    <Sc.Title>Венок «Светлая память»</Sc.Title>
                    <Sc.Size>Ø 60 см</Sc.Size>
                    <Sc.Description>
                        Белые розы и лилии на каркасе из живой зелени. Символ
                        чистоты и вечной памяти.
                    </Sc.Description>
                    <Sc.Price>от 4 500 ₽</Sc.Price>
                    <Sc.CallButton />
                </Sc.Content>
            </Sc.Container>

            <Sc.Divider size="medium" />

            <SimilarProducts href="/wreaths" products={products} />
        </CentralizedContainer>
    );
}
