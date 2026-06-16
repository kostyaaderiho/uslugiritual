'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Typography, Divider } from 'antd';
import Link from 'next/link';

const Sc = {
    Container: styled.div`
        box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.05);

        &:hover {
            box-shadow: 0 8px 32px 8px rgba(0, 0, 0, 0.05);
        }
    `,

    Content: styled.div`
        padding: 16px;
    `,

    Title: styled(Typography.Title).attrs({
        level: 3,
    })`
        font-family: --font-eb-garamond;
        font-size: 20px !important;
        font-weight: 300 !important;
        margin: 0 0 16px;

        & a {
            color: ${({ theme }) => theme.colorText};

            &:hover {
                color: ${({ theme }) => theme.colorPrimary};
            }
        }
    `,

    ImageLink: styled(Link)`
        display: block;

        position: relative;

        width: 100%;
        aspect-ratio: 16 / 18;

        overflow: hidden;
        border-radius: 8px;
        border: 1px solid #eaeaea;
    `,

    Image: styled(Image)`
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        object-fit: cover;
        object-position: center;
    `,

    Description: styled(Typography.Paragraph)`
        font-size: 14px !important;
    `,

    Size: styled(Typography.Paragraph)`
        font-family: 11px;
    `,

    Divider: styled(Divider)`
        margin: 0;
    `,

    Footer: styled.div`
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    Price: styled(Typography.Text)`
        font-family: --font-eb-garamond;
        font-size: 18px !important;
        color: ${({ theme }) => theme.colorPrimary};
    `,

    Link: styled(Link)`
        text-transform: uppercase;
        color: ${({ theme }) => theme.colorText};

        &:hover {
            color: ${({ theme }) => theme.colorPrimary};
        }
    `,
};

export type ProductProps = {
    title: string;
    description: string;
    sizes: string;
    price: string;
    imgSrc: string;
    href: string;
};

export const Product = ({
    title,
    description,
    sizes,
    price,
    imgSrc,
    href,
}: ProductProps) => {
    return (
        <Sc.Container>
            <Sc.ImageLink href={href}>
                <Sc.Image
                    sizes="(max-width: 768px) 100vw, 360px"
                    src={imgSrc}
                    alt=""
                    fill
                />
            </Sc.ImageLink>
            <Sc.Content>
                <Sc.Title>
                    <Link href={href}>{title}</Link>
                </Sc.Title>
                <Sc.Size>{sizes}</Sc.Size>
                <Sc.Description>{description}</Sc.Description>
                <Sc.Divider />
                <Sc.Footer>
                    <Sc.Price>{price}</Sc.Price>
                    <Sc.Link href={href}>Подробнее →</Sc.Link>
                </Sc.Footer>
            </Sc.Content>
        </Sc.Container>
    );
};
