import PropTypes from 'prop-types';

import { Button, Text, Input } from 'UI-KIT';

import { BtnContainer } from 'COMPONENTS/CourseCard/styles/CourseCardStyled';

import { Container, Description, Heading, OfferContainer, PreviewContainer, Title } from './styles/OfferStyle';

export const OfferCard = ({ offer, verticalAlign }) => (
  <OfferContainer verticalAlign>
    <Heading>
      <Title>{offer.name}</Title>
    </Heading>
    {!verticalAlign && <Description>{offer.description}</Description>}
    {verticalAlign && offer.benefits.map((el) => <li> {el} </li>)}
    <BtnContainer>
      <Button fullWidth>Купить</Button>
    </BtnContainer>
  </OfferContainer>
);

export const Offer = () => {
  const offers = [
    {
      description:
        'Все предыдущие программы, которые мы писали, работали с текстовыми данными. Действительно, команда input() считывает строку текста.',
      name: 'Язык Go Для Начинающих. Теория (Текст + Видео) + Разбор реального проекта + Доступ в закрытый чат.',
      price: {
        currency: 'usd',
        value: 100,
      },
      benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    },
    {
      description:
        'Все предыдущие программы, которые мы писали, работали с текстовыми данными. Действительно, команда input() считывает строку текста.',
      name: 'Язык Go Для Начинающих. Теория (Текст + Видео) + Разбор реального проекта.',
      price: {
        currency: 'usd',
        value: 140,
      },
      benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    },
    {
      description: 'Все предыдущие программы. Действительно, команда input() считывает строку текста.',
      name: 'Язык Go Для Начинающих. Теория (Текст + Видео).',
      price: {
        currency: 'usd',
        value: 10,
      },
      benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
    },
  ];

  return (
    <>
      <PreviewContainer>
        <Text>Данный курс входит в следующие пакеты :</Text>
        <Input placeholder="Ввести промокод и получить скидку" />
      </PreviewContainer>
      {offers.length - 1 ? (
        <Container>
          {offers.map((el) => (
            <OfferCard key={el.name} offer={el} verticalAlign />
          ))}
        </Container>
      ) : (
        <OfferCard key={offers[0].name} offer={offers[0]} />
      )}
    </>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object,
  verticalAlign: PropTypes.bool,
};

OfferCard.defaultProps = {
  offer: null,
  verticalAlign: false,
};
