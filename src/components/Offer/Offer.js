import PropTypes from 'prop-types';

import { Button } from 'UI-KIT';

import { BtnContainer } from 'COMPONENTS/CourseCard/styles/CourseCardStyled';

import { Container, Description, Heading, OfferContainer, Title } from './styles/OfferStyle';

export const OfferCard = ({ offer }) => (
  <OfferContainer>
    <Heading>
      <Title>{offer.name}</Title>
    </Heading>
    <Description>{offer.description}</Description>
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
      benefits: ['1', '2', '3'],
    },
    {
      description:
        'Все предыдущие программы, которые мы писали, работали с текстовыми данными. Действительно, команда input() считывает строку текста.',
      name: 'Язык Go Для Начинающих. Теория (Текст + Видео) + Разбор реального проекта.',
      price: {
        currency: 'usd',
        value: 140,
      },
      benefits: ['1', '2', '3'],
    },
    {
      description: 'Все предыдущие программы. Действительно, команда input() считывает строку текста.',
      name: 'Язык Go Для Начинающих. Теория (Текст + Видео).',
      price: {
        currency: 'usd',
        value: 10,
      },
      benefits: ['1', '2', '3'],
    },
  ];

  return (
    <div>
      Данный курс входит в следующие пакеты :
      {offers.length - 1 ? (
        <Container>
          {offers.map((el) => (
            <OfferCard key={el.name} offer={el} />
          ))}
        </Container>
      ) : (
        <OfferCard key={offers[0].name} offer={offers[0]} />
      )}
    </div>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object,
};

OfferCard.defaultProps = {
  offer: null,
};
