'use client';

import { Typography, Button, Divider } from 'antd';

import { CentralizedContainer } from '../components/CentralizedContainer';

import * as Sc from './page.styled';

const Banner = () => {
    return (
        <Sc.BannerSection>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.Divider />

                    <Sc.SubTitle>
                        Ритуальная помощь - Могилев и Могилевская область
                    </Sc.SubTitle>

                    <Sc.MainTitle level={1}>
                        Достойная память о близких
                    </Sc.MainTitle>

                    <Sc.Description>
                        Полный комплекс ритуальных услуг — круглосуточно, по
                        всей Могилевской области.
                    </Sc.Description>

                    <Button
                        type="primary"
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="large"
                        style={{
                            margin: '16px 0 0',
                            fontWeight: 300,
                            borderRadius: '0',
                            padding: '0 40px',
                        }}
                    >
                        Связаться
                    </Button>

                    <Sc.BannerBottomDivider />
                </Sc.SectionContent>
            </CentralizedContainer>
        </Sc.BannerSection>
    );
};

const HowWeWork = () => {
    const steps = [
        {
            title: 'Звонок и выезд агента',
            description:
                'Принимаем звонок 24/7, отправляем агента на дом или в морг в течение часа.',
        },
        {
            title: 'Оформление документов',
            description:
                'Получаем медицинское свидетельство, оформляем гербовое в ЗАГСе, помогаем с пособием.',
        },
        {
            title: 'Подготовка церемонии',
            description:
                'Подбираем гроб, венки, ритуальные принадлежности. Согласуем зал, транспорт и время.',
        },
        {
            title: 'Погребение и поминки',
            description:
                'Копаем могилу, организуем катафалк, проводим прощание и поминальный обед.',
        },
    ];

    return (
        <Sc.Section>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.SubTitle>Как мы работаем</Sc.SubTitle>
                    <Sc.Divider />
                    <Sc.Title level={2}>Этапы организации похорон</Sc.Title>
                    <Sc.Description>
                        Берём на себя все хлопоты — от первого звонка до
                        поминального обеда.
                    </Sc.Description>
                </Sc.SectionContent>

                <Sc.Steps>
                    {steps.map((step, index) => (
                        <div key={step.title}>
                            <Divider />
                            <Sc.StepNumber>0{index + 1}</Sc.StepNumber>
                            <Sc.StepTitle>{step.title}</Sc.StepTitle>
                            <Sc.StepDescription>
                                {step.description}
                            </Sc.StepDescription>
                        </div>
                    ))}
                </Sc.Steps>
            </CentralizedContainer>
        </Sc.Section>
    );
};

const Organization = () => {
    return (
        <Sc.Section>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.SubTitle>Тарифы</Sc.SubTitle>
                    <Sc.Divider />
                    <Sc.Title level={2}>
                        Комплексная организация прощания
                    </Sc.Title>
                    <Sc.Description>
                        Готовые комплексы услуг для организации похорон. Берём
                        на себя всё — от документов до поминального обеда.
                    </Sc.Description>
                    <Sc.Description>
                        Стоимость уточняется индивидуально. Возможна рассрочка и
                        помощь с получением государственного пособия.
                    </Sc.Description>
                </Sc.SectionContent>
            </CentralizedContainer>
        </Sc.Section>
    );
};

const ContactUs = () => {
    return (
        <Sc.ContactUsSection>
            <CentralizedContainer>
                <Sc.SectionContent>
                    <Sc.Title level={1}>
                        Готовы помочь в любое время суток
                    </Sc.Title>
                    <Sc.Description>
                        Свяжитесь удобным способом — мы на связи 24/7 и ответим
                        на все вопросы.
                    </Sc.Description>
                    <Button
                        type="primary"
                        href="https://example.com"
                        size="large"
                    >
                        Позвонить
                    </Button>
                    <Button type="primary" variant="solid">
                        Viber
                    </Button>
                    <Button type="primary" variant="solid">
                        Telegram
                    </Button>
                    <Button type="primary" variant="solid">
                        Whatsapp
                    </Button>
                </Sc.SectionContent>
            </CentralizedContainer>
        </Sc.ContactUsSection>
    );
};

export default function HomePage() {
    return (
        <>
            <Banner />
            <HowWeWork />
            <Organization />
            <ContactUs />
        </>
    );
}
