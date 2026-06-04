'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Typography } from 'antd';
import Link from 'next/link';

const Sc = {
    Container: styled.div``,
    Title: styled(Typography.Paragraph)``,
    Size: styled(Typography.Paragraph)``,
    Description: styled(Typography.Paragraph)``,
    Price: styled(Typography.Text)``,
    Footer: styled.div``,
    Link: styled(Link)``,
};

export type ProductProps = {
    title: string;
    description: string;
    sizes: string;
    price: string;
    imgSrc: string;
};

export const Product = ({ title, description, sizes, price }: ProductProps) => {
    return (
        <Sc.Container>
            <Image
                src={'/images/wreath-1-CQt_nJKf.jpg'}
                alt=""
                width={320}
                height={240}
            />
            <Sc.Title>{title}</Sc.Title>
            <Sc.Size>{sizes}</Sc.Size>
            <Sc.Description>{description}</Sc.Description>
            <Sc.Footer>
                <Sc.Price>{price}</Sc.Price>
                <Sc.Link href="">Подробнее →</Sc.Link>
            </Sc.Footer>
        </Sc.Container>
    );
};
