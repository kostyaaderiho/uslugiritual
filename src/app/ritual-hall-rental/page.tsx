'use client';

import {
    CentralizedContainer,
    SubTitle,
    H1Title,
    Description,
    CallButton,
    Services,
    Service,
} from '../../components';

const services: Service[] = [
    {
        title: 'Зал на 60 человек',
    },
    {
        title: 'Музыкальное и звуковое сопровождение',
    },
    {
        title: 'Цветочное оформление',
    },
    {
        title: 'Парковка для гостей',
    },
    {
        title: 'Поминальный обед по запросу',
    },
];

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Ритуальные услуги</SubTitle>
            <H1Title>Аренда ритуального зала</H1Title>
            <Description>
                Просторный ритуальный зал для прощания в центре Могилева. Тихая
                обстановка, всё необходимое для церемонии и удобство для
                близких.
            </Description>
            <Services services={services} />
            <CallButton />
        </CentralizedContainer>
    );
}
