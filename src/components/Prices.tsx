'use client';

import { Divider } from 'antd';

import * as Sc from './Prices.styled';

export const Prices = () => {
    const prices = [
        {
            title: 'Базовый',
            description: 'Всё необходимое для достойного прощания.',
            price: 'от 1200 BYN',
            services: [
                {
                    title: 'Оформление документов',
                },
                {
                    title: 'Гроб эконом класса',
                },
            ],
            popular: false,
        },
        {
            title: 'Стандартный',
            description: 'Полный комплекс услуг с расширенным сопровождением.',
            price: 'от 2400 BYN',
            services: [
                {
                    title: 'Оформление документов',
                },
                {
                    title: 'Гроб из массива дерева',
                },
            ],
            popular: true,
        },
        {
            title: 'Премиум',
            description: 'Организация под ключ с индивидуальным подходом.',
            price: 'от 4 500 BYN',
            services: [
                {
                    title: 'Персональный распорядитель',
                },
                {
                    title: 'Гроб премиум-класса',
                },
            ],
            popular: false,
        },
    ];

    return (
        <Sc.Prices>
            {prices.map((price) => (
                <Sc.Price key={price.title} $isPopular={price.popular}>
                    {price.popular ? (
                        <Sc.PricePopular>Популярный</Sc.PricePopular>
                    ) : null}
                    <Sc.PriceTitle>{price.title}</Sc.PriceTitle>
                    <Sc.PriceDescription>
                        {price.description}
                    </Sc.PriceDescription>
                    <Sc.PriceNumber>{price.price}</Sc.PriceNumber>
                    <Divider />
                    <Sc.PriceServices>
                        {price.services.map((service) => (
                            <Sc.PriceService key={service.title}>
                                {service.title}
                            </Sc.PriceService>
                        ))}
                    </Sc.PriceServices>

                    <Sc.PriceButton
                        type={price.popular ? 'primary' : 'default'}
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="large"
                    >
                        Заказать
                    </Sc.PriceButton>
                </Sc.Price>
            ))}
        </Sc.Prices>
    );
};
