'use client';

import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';

import {
    H1Title,
    SubTitle,
    Description,
    H2Title,
    CentralizedContainer,
    CallButton,
} from '@/components';

import * as Sc from './page.styled';

export default function Page() {
    const contacts = [
        {
            title: 'Телефон',
            description: '+375 (29) 123-45-67',
            icon: (
                <PhoneOutlined style={{ fontSize: '24px', color: '#af926a' }} />
            ),
        },
        {
            title: 'Электронная почта',
            description: 'info@example.com',
            icon: (
                <MailOutlined style={{ fontSize: '24px', color: '#af926a' }} />
            ),
        },
        {
            title: 'Адрес мастерской',
            description: 'г. Минск, ул. Примерная, 123',
            icon: (
                <EnvironmentOutlined
                    style={{ fontSize: '24px', color: '#af926a' }}
                />
            ),
        },
        {
            title: 'Часы работы',
            description: 'Ежедневно, без выходных с 8:00 до 21:00',
            icon: (
                <ClockCircleOutlined
                    style={{ fontSize: '24px', color: '#af926a' }}
                />
            ),
        },
    ];

    return (
        <CentralizedContainer>
            <SubTitle>Связаться</SubTitle>
            <H1Title>Контакты</H1Title>
            <Description>
                Мы на связи круглосуточно. Позвоните, напишите или приезжайте в
                мастерскую — наши специалисты ответят на все ваши вопросы.
            </Description>

            <Sc.Contacts>
                {contacts.map((contact) => (
                    <Sc.Contact key={contact.title}>
                        <Sc.IconWrapper>{contact.icon}</Sc.IconWrapper>
                        <Sc.Title>{contact.title}</Sc.Title>
                        <Sc.Description>{contact.description}</Sc.Description>
                    </Sc.Contact>
                ))}
            </Sc.Contacts>

            <Sc.CallSpecialist>
                <H2Title>Выезд специалиста бесплатно</H2Title>
                <Sc.Description>
                    Замер места установки памятника, консультация и расчёт
                    стоимости — бесплатно по Москве и Московской области.
                </Sc.Description>
                <CallButton>Вызвать специалиста</CallButton>
            </Sc.CallSpecialist>
        </CentralizedContainer>
    );
}
