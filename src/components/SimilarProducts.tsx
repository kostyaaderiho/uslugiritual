'use client';

import styled from 'styled-components';
import { Typography } from 'antd';

import { Link } from './Link';
import { SubTitle } from './Text';
import { Products } from './Products';
import { Product } from './Product';
import { Product as ProductType } from '../types';

const Sc = {
    Container: styled.div``,
    Header: styled.div`
        display: flex;
        align-items: flex-end;
    `,
    Title: styled(Typography.Title).attrs({
        level: 2,
    })`
        justify-content: space-between;
        margin: 0 !important;
        font-size: 36px;
        font-weight: 300 !important;
    `,
    Link: styled(Link)`
        margin-left: auto;
        margin-bottom: 8px;
    `,
};

export type SimilarProductsProps = {
    href: string;
    products: ProductType[];
};

export const SimilarProducts = ({ href, products }: SimilarProductsProps) => {
    return (
        <Sc.Container>
            <Sc.Header>
                <div>
                    <SubTitle $centered={false}>Похожие товары</SubTitle>
                    <Sc.Title>Может быть интересно</Sc.Title>
                </div>
                <Sc.Link href={href}>Весь каталог →</Sc.Link>
            </Sc.Header>

            <Products>
                {products.map((product) => (
                    <Product
                        key={product.title}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        sizes={product.sizes}
                        imgSrc={product.imgSrc}
                        href={`/wreaths/${product.id}`}
                    />
                ))}
            </Products>
        </Sc.Container>
    );
};
