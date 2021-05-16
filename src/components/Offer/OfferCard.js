import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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
} from 'COMPONENTS/Offer/styles/OfferStyle';

export const OfferCard = ({
  offer: {
    name,
    description,
    price: { currency, value },
    benefits,
  },
  isVertical,
}) => (
  <OfferContainer vertical={!!isVertical}>
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
      <BenefitsList vertical={!!isVertical}>
        {benefits.map((el) => (
          <Benefit key={uuidv4()}>
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
