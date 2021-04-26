import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchFooterSettings } from 'STORE/footer';

import { Container } from 'COMPONENTS/Container';
import { FondayLogoCard } from 'COMPONENTS/FondayLogoCard';

import { Block, Title, Content, FooterStyled, Body, BodyItem } from './styles/FooterStyled';

const pages = {
  confidential: '/privacy',
  refundPolicy: '/refund',
  serviceAgreement: '/service',
};

const contactInfo = {
  address: 'ул. Мира, д.1',
  businessName: 'Иванов Иван Иванович',
  email: 'test@test.com',
  registrationNumber: '579-125-967-2348',
};

export const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterSettings());
  }, []);

  return (
    <FooterStyled>
      <Container>
        <Content>
          <Block>
            <Title>Информация:</Title>
            <Body>
              <BodyItem inactive>
                <Link to={pages.confidential}>Политика конфиденциальности</Link>
              </BodyItem>
              <BodyItem inactive>
                <Link to={pages.serviceAgreement}>Условия предоставления услуг</Link>
              </BodyItem>
              <BodyItem inactive>
                <Link to={pages.refundPolicy}>Условия возврата денежных средств</Link>
              </BodyItem>
            </Body>
          </Block>
          <Block>
            <Title>Контакты:</Title>
            <Body>
              <BodyItem>ФЛП: {contactInfo.businessName}</BodyItem>
              <BodyItem>Рег.№.: {contactInfo.address}</BodyItem>
              <BodyItem>Адрес: {contactInfo.registrationNumber}</BodyItem>
              <BodyItem>
                <a href={`mailto:${contactInfo.email}`}>e-mail: {contactInfo.email}</a>
              </BodyItem>
            </Body>
          </Block>
          <Block>
            <a href="https://fondy.ua/ru/" target="_blank">
              <FondayLogoCard />
            </a>
          </Block>
        </Content>
      </Container>
    </FooterStyled>
  );
};
