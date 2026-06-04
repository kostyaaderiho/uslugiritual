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
            <MainTitle>Организация похорон</MainTitle>
            <Description>
                Полный комплекс услуг по организации похорон под ключ. Берём на
                себя оформление документов, транспорт, ритуальный зал и всё
                необходимое.
            </Description>
            <ServiceList>
                <Service>Консультация круглосуточно</Service>
                <Service>Оформление документов в ЗАГСе и моргe</Service>
                <Service>Подбор гроба, венков и принадлежностей</Service>
                <Service>Транспорт катафалка и автобуса для близких</Service>
                <Service>Организация церемонии прощания</Service>
                <Service>Согласование с кладбищем и крематорием</Service>
            </ServiceList>
            <CallButton />
        </CentralizedContainer>
    );
}
