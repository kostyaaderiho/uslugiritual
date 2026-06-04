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
            <MainTitle>Аренда ритуального зала</MainTitle>
            <Description>
                Просторный ритуальный зал для прощания в центре Могилева. Тихая
                обстановка, всё необходимое для церемонии и удобство для
                близких.
            </Description>
            <ServiceList>
                <Service>Зал на 60 человек</Service>
                <Service>Музыкальное и звуковое сопровождение</Service>
                <Service>Цветочное оформление</Service>
                <Service>Парковка для гостей</Service>
                <Service>Поминальный обед по запросу</Service>
            </ServiceList>
            <CallButton />
        </CentralizedContainer>
    );
}
