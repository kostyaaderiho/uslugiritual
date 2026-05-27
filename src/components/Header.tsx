'use client';

import { Layout, Menu } from 'antd';
import Link from 'next/link';

import Logo from '../assets/icons/logo.svg';

import { CentralizedContainer } from './CentralizedContainer';
import * as Sc from './Header.styled';

const { Header: Header_ } = Layout;
const { SubMenu } = Menu;

export const Header = () => {
    return (
        <Header_ style={{ padding: 0 }}>
            <CentralizedContainer>
                <Sc.Content>
                    <Link href="/">
                        <Sc.LogoContainer>
                            <Sc.LogoBorder>
                                <Logo width="30" height="30" />
                            </Sc.LogoBorder>
                            <Sc.LogoText>Ритуальная помощь</Sc.LogoText>
                        </Sc.LogoContainer>
                    </Link>

                    <Menu mode="horizontal" style={{ border: 0, flex: 1 }}>
                        <Menu.Item key="home">Главная</Menu.Item>
                        <SubMenu
                            key="Ritual_Services"
                            title="Ритуальные Услуги"
                        >
                            <Menu.Item key="service1">
                                Организация похорон
                            </Menu.Item>
                            <Menu.Item key="service2">Перевозка тела</Menu.Item>
                            <Menu.Item key="service3">Копка могил</Menu.Item>
                            <Menu.Item key="service4">
                                Аренда ритуального зала
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="Ritual_Stuff" title="Ритуальные Товары">
                            <Menu.Item key="service5">Венки</Menu.Item>
                            <Menu.Item key="service6">Памятники</Menu.Item>
                            <Menu.Item key="service7">Гробы</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="price">Стоимость</Menu.Item>
                        <Menu.Item key="contacts">Контакты</Menu.Item>
                    </Menu>

                    <Sc.Contacts></Sc.Contacts>
                </Sc.Content>
            </CentralizedContainer>
        </Header_>
    );
};
