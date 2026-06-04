'use client';

import { Divider } from 'antd';
import {
    SendOutlined,
    PhoneOutlined,
    MessageOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons';

import { CentralizedContainer, CallButton } from '../components';

import * as Sc from './page.styled';

const Banner = () => (
    <Sc.BannerSection>
        <CentralizedContainer>
            <Sc.SectionContent>
                <Sc.Divider />

                <Sc.SubTitle>
                    Ритуальная помощь · Могилев и Могилевская область
                </Sc.SubTitle>

                <Sc.MainTitle level={1}>
                    Достойная память о близких
                </Sc.MainTitle>

                <Sc.Description>
                    Полный комплекс ритуальных услуг — круглосуточно, по всей
                    Могилевской области.
                </Sc.Description>

                <CallButton />

                <Sc.BannerBottomDivider />
            </Sc.SectionContent>
        </CentralizedContainer>
    </Sc.BannerSection>
);

const HowWeWork = () => {
    const steps = [
        {
            title: 'Звонок и выезд агента',
            description:
                'Принимаем звонок 24/7, отправляем агента на дом или в морг в течение часа.',
        },
        {
            title: 'Оформление документов',
            description:
                'Получаем медицинское свидетельство, оформляем гербовое в ЗАГСе, помогаем с пособием.',
        },
        {
            title: 'Подготовка церемонии',
            description:
                'Подбираем гроб, венки, ритуальные принадлежности. Согласуем зал, транспорт и время.',
        },
        {
            title: 'Погребение и поминки',
            description:
                'Копаем могилу, организуем катафалк, проводим прощание и поминальный обед.',
        },
    ];

    return (
        <Sc.Section>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.SubTitle>Как мы работаем</Sc.SubTitle>
                    <Sc.Divider />
                    <Sc.Title level={2}>Этапы организации похорон</Sc.Title>
                    <Sc.Description>
                        Берём на себя все хлопоты — от первого звонка до
                        поминального обеда.
                    </Sc.Description>
                </Sc.SectionContent>

                <Sc.Steps>
                    {steps.map((step, index) => (
                        <div key={step.title}>
                            <Divider />
                            <Sc.StepNumber>0{index + 1}</Sc.StepNumber>
                            <Sc.StepTitle>{step.title}</Sc.StepTitle>
                            <Sc.StepDescription>
                                {step.description}
                            </Sc.StepDescription>
                        </div>
                    ))}
                </Sc.Steps>
            </CentralizedContainer>
        </Sc.Section>
    );
};

const Organization = () => {
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
        <Sc.Section>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.SubTitle>Тарифы</Sc.SubTitle>
                    <Sc.Divider />
                    <Sc.Title level={2}>
                        Комплексная организация прощания
                    </Sc.Title>
                    <Sc.Description>
                        Готовые комплексы услуг для организации похорон. Берём
                        на себя всё — от документов до поминального обеда.
                    </Sc.Description>
                </Sc.SectionContent>
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

                <Sc.Description>
                    Стоимость уточняется индивидуально. Возможна рассрочка и
                    помощь с получением государственного пособия.
                </Sc.Description>
            </CentralizedContainer>
        </Sc.Section>
    );
};

const ContactUs = () => {
    const contacts = [
        {
            title: 'Позвонить',
            icon: <PhoneOutlined />,
        },
        {
            title: 'Viber',
            icon: <MessageOutlined />,
        },
        {
            title: 'Telegram',
            icon: <SendOutlined />,
        },
        {
            title: 'Whatsapp',
            icon: <WhatsAppOutlined />,
        },
    ];

    return (
        <Sc.ContactUs>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.Title level={1}>
                        Готовы помочь в любое время суток
                    </Sc.Title>
                    <Sc.Description>
                        Свяжитесь удобным способом — мы на связи 24/7 и ответим
                        на все вопросы.
                    </Sc.Description>

                    <Sc.ContactUsLinks>
                        {contacts.map((contact) => (
                            <Sc.ContactUsLink
                                key={contact.title}
                                type="default"
                                href="https://example.com"
                                size="large"
                                icon={contact.icon}
                            >
                                {contact.title}
                            </Sc.ContactUsLink>
                        ))}
                    </Sc.ContactUsLinks>

                    <Sc.ContactUsPhone>+375 (29) 000-00-00</Sc.ContactUsPhone>
                </Sc.SectionContent>
            </CentralizedContainer>
        </Sc.ContactUs>
    );
};

export default function HomePage() {
    return (
        <>
            <Banner />
            <HowWeWork />
            <Organization />
            <ContactUs />
        </>
    );
}
