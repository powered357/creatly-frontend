import PropTypes from 'prop-types';

import { CURRENCIES } from 'CONSTANTS/currencies';

import { Button, Icon } from 'UI-KIT';

import {
  BenefitsList,
  Purchase,
  Benefit,
  Content,
  Description,
  OfferContainer,
  Title,
  Price,
  BlockTitle,
} from 'COMPONENTS/Offer/styles/OfferStyled';

export const OfferCard = ({
  offer: {
    name,
    description,
    price: { currency, value },
    benefits,
  },
  isVertical,
}) => (
  <OfferContainer vertical={isVertical}>
    <Content>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Purchase>
        <Button disabled>Купить</Button>
        <Price>
          {CURRENCIES[currency.toUpperCase()]}
          {value}
        </Price>
      </Purchase>
    </Content>
    {benefits && (
      <BenefitsList vertical={isVertical}>
        <BlockTitle>Преимущества пакета:</BlockTitle>
        {benefits.map((el, i) => (
          <Benefit key={i}>
            <Icon name="check" /> {el}
          </Benefit>
        ))}
      </BenefitsList>
    )}
  </OfferContainer>
);

OfferCard.propTypes = {
  offer: {
    name: PropTypes.string,
    description: PropTypes.string,
    price: {
      currency: PropTypes.string,
      value: PropTypes.string || PropTypes.number,
    },
    benefits: PropTypes.array,
  },
  isVertical: PropTypes.bool,
};

OfferCard.defaultProps = {
  offer: { name: null, description: null, price: null, benefits: null },
  isVertical: false,
};
