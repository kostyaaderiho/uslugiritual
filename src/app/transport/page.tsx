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
            <MainTitle>Перевозка тела</MainTitle>
            <Description>
                Перевозка тела умершего по Могилеву, области и в другие города.
                Специализированный транспорт, бережное обращение, работа
                круглосуточно.
            </Description>
            <ServiceList>
                <Service>Подача катафалка в течение часа</Service>
                <Service>Перевозка из дома, больницы или морга</Service>
                <Service>Междугородние перевозки</Service>
                <Service>Сопровождение и оформление документов</Service>
                <Service>Организация церемонии прощания</Service>
                <Service>Работа 24/7, включая выходные</Service>
            </ServiceList>
            <CallButton />
        </CentralizedContainer>
    );
}
