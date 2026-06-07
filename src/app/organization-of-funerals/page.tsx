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
        title: 'Консультация круглосуточно',
    },
    {
        title: 'Оформление документов в ЗАГСе и моргe',
    },
    {
        title: 'Подбор гроба, венков и принадлежностей',
    },
    {
        title: 'Транспорт катафалка и автобуса для близких',
    },
    {
        title: 'Организация церемонии прощания',
    },
    {
        title: 'Согласование с кладбищем и крематорием',
    },
];

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Ритуальные услуги</SubTitle>
            <H1Title>Организация похорон</H1Title>
            <Description>
                Полный комплекс услуг по организации похорон под ключ. Берём на
                себя оформление документов, транспорт, ритуальный зал и всё
                необходимое.
            </Description>
            <Services services={services} />
            <CallButton />
        </CentralizedContainer>
    );
}
