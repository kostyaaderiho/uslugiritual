'use client';

import styled from 'styled-components';
import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';

import {
    H1Title,
    SubTitle,
    Description,
    H2Title,
    CentralizedContainer,
    CallButton,
} from '@/components';

const Sc = {
    Contacts: styled.div`
        display: flex;
        gap: 48px;
        margin: 48px 0 24px;
    `,
    Contact: styled.div`
        height: 220px;
        border: 1px solid ${({ theme }) => theme.colorBorder};
        padding: 24px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        flex: 1;

        &:hover {
            box-shadow: 0 8px 32px 8px rgba(0, 0, 0, 0.05);
        }
    `,
    IconWrapper: styled.div`
        border-radius: 50%;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #eeebe8;
        margin: 0 auto 20px;
        flex-shrink: 0;
    `,
    Title: styled(Typography.Paragraph)`
        font-size: 18px;
        text-align: center;
        font-weight: 300;
        font-family: --font-eb-garamond;
    `,
    Description: styled(Typography.Paragraph)`
        font-size: 14px;
        text-align: center;
    `,
    CallSpecialist: styled.div`
        background-color: #eeebe880;
        padding: 64px;
    `,
};

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
                <Description>
                    Замер места установки памятника, консультация и расчёт
                    стоимости — бесплатно по Москве и Московской области.
                </Description>
                <CallButton>Вызвать специалиста</CallButton>
            </Sc.CallSpecialist>
        </CentralizedContainer>
    );
}
