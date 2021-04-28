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
  address: 'ул. Ветеранов 19, кв. 74',
  businessName: 'Жашкевич М.И.',
  email: 'zhashkevychmaksim@gmail.com',
  registrationNumber: 'ИНН 3664808833',
};

export const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterSettings());
  }, []);

  return (
    <FooterStyled>
      <Container autoHeight>
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
              <BodyItem>{contactInfo.businessName}</BodyItem>
              <BodyItem>{contactInfo.address}</BodyItem>
              <BodyItem>{contactInfo.registrationNumber}</BodyItem>
              <BodyItem>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
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
