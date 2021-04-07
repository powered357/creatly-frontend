import { Link } from 'react-router-dom';

import { Container } from 'COMPONENTS/Container';
import { FondayLogoCard } from 'COMPONENTS/Footer/components/FondayLogoCard';

import { Block, Title, Content, FooterStyled, Body, BodyItem, SocialMedia } from './styles/FooterStyled';

const informationBlock = [
  { link: '/privacy', name: 'Политика конфиденциальности' },
  { link: '/service', name: 'Условия предоставления услуг' },
  { link: '/refund', name: 'Условия возврата денежных средств' },
];

const contactsBlock = [
  { link: '', name: 'ФЛП: Иванов Иван Иванович' },
  { link: '', name: 'Рег.№.: 579-125-967-2348' },
  { link: 'mailto:test@test.com', name: 'e-mail: test@test.com' },
];

export const Footer = () => (
  <FooterStyled>
    <Container>
      <Content>
        <Block>
          <Title>Информация:</Title>
          <Body>
            {informationBlock.map((el) => (
              <BodyItem key={el.name}>
                <Link to={el.link}>{el.name}</Link>
              </BodyItem>
            ))}
          </Body>
        </Block>
        <Block>
          <Title>Контакты:</Title>
          <Body>
            {contactsBlock.map((el) =>
              el.link === '' ? (
                <BodyItem key={el.name}>{el.name}</BodyItem>
              ) : (
                <BodyItem key={el.name}>
                  <a href={el.link}>{el.name}</a>
                </BodyItem>
              ),
            )}
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
