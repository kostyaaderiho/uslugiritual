'use client';

import {
    CentralizedContainer,
    SubTitle,
    MainTitle,
    Description,
    Service,
    ServiceList,
    CallButton,
} from '../../components';

export default function Page() {
    return (
        <CentralizedContainer>
            <SubTitle>Ритуальные услуги</SubTitle>
            <MainTitle>Копка могил</MainTitle>
            <Description>
                Профессиональная копка могил на всех кладбищах Могилева и
                области. Ручная и механизированная копка, благоустройство
                участка.
            </Description>
            <ServiceList>
                <Service>Стандартная и двойная могила</Service>
                <Service>Зимняя копка в мёрзлом грунте</Service>
                <Service>Подзахоронение в родственную могилу</Service>
                <Service>Установка и демонтаж памятников</Service>
                <Service>Уборка и благоустройство участка</Service>
            </ServiceList>
            <CallButton />
        </CentralizedContainer>
    );
}
