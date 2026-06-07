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
        title: 'Стандартная и двойная могила',
    },
    {
        title: 'Зимняя копка в мёрзлом грунте',
    },
    {
        title: 'Подзахоронение в родственную могилу',
    },
    {
        title: 'Установка и демонтаж памятников',
    },
    {
        title: 'Уборка и благоустройство участка',
    },
];

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Ритуальные услуги</SubTitle>
            <H1Title>Копка могил</H1Title>
            <Description>
                Профессиональная копка могил на всех кладбищах Могилева и
                области. Ручная и механизированная копка, благоустройство
                участка.
            </Description>
            <Services services={services} />
            <CallButton />
        </CentralizedContainer>
    );
}
