'use client';

import {
    CentralizedContainer,
    SubTitle,
    H1Title,
    Description,
    CallButton,
    Services,
    Service,
} from '@/components';

const services: Service[] = [
    {
        title: 'Подача катафалка в течение часа',
    },
    {
        title: 'Перевозка из дома, больницы или морга',
    },
    {
        title: 'Междугородние перевозки',
    },
    {
        title: 'Сопровождение и оформление документов',
    },
    {
        title: 'Организация церемонии прощания',
    },
    {
        title: 'Работа 24/7, включая выходные',
    },
];

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Ритуальные услуги</SubTitle>
            <H1Title>Перевозка тела</H1Title>
            <Description>
                Перевозка тела умершего по Могилеву, области и в другие города.
                Специализированный транспорт, бережное обращение, работа
                круглосуточно.
            </Description>
            <Services services={services} />
            <CallButton />
        </CentralizedContainer>
    );
}
