'use client';

import { Divider } from 'antd';
import {
    SendOutlined,
    PhoneOutlined,
    MessageOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons';

import {
    CentralizedContainer,
    Description,
    CallButton,
    SubTitle,
    H2Title,
    Prices,
} from '@/components';

import * as Sc from './page.styled';

const Banner = () => (
    <Sc.BannerSection>
        <CentralizedContainer>
            <Sc.SectionContent>
                <Sc.Divider />

                <SubTitle>
                    Ритуальная помощь · Могилев и Могилевская область
                </SubTitle>

                <Sc.BannerTitle level={1}>
                    Достойная память <Sc.BannerClose>о близких</Sc.BannerClose>
                </Sc.BannerTitle>

                <Sc.BannerDescription>
                    Полный комплекс ритуальных услуг — круглосуточно, по всей
                    Могилевской области.
                </Sc.BannerDescription>

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
                    <SubTitle>Как мы работаем</SubTitle>
                    <Sc.Divider />
                    <H2Title>Этапы организации похорон</H2Title>
                    <Description>
                        Берём на себя все хлопоты — от первого звонка до
                        поминального обеда.
                    </Description>
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

const Organization = () => (
    <Sc.Section>
        <CentralizedContainer>
            <Sc.SectionContent>
                <SubTitle>Тарифы</SubTitle>
                <Sc.Divider />
                <H2Title>Комплексная организация прощания</H2Title>
                <Description>
                    Готовые комплексы услуг для организации похорон. Берём на
                    себя всё — от документов до поминального обеда.
                </Description>
            </Sc.SectionContent>

            <Prices />

            <Description>
                Стоимость уточняется индивидуально. Возможна рассрочка и помощь
                с получением государственного пособия.
            </Description>
        </CentralizedContainer>
    </Sc.Section>
);

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
                    <Sc.ContactUsTitle>
                        Готовы помочь в любое время суток
                    </Sc.ContactUsTitle>
                    <Sc.ContactUsDescription>
                        Свяжитесь удобным способом — мы на связи 24/7 и ответим
                        на все вопросы.
                    </Sc.ContactUsDescription>

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

                    <Sc.ContactUsPhone>+375 (29) 540-19-19</Sc.ContactUsPhone>
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
