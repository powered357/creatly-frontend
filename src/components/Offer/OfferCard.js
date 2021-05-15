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

export const OfferCard = ({ offer, isVertical }) => (
  <OfferContainer vertical={!!isVertical}>
    <Content>
      <Title>{offer.name}</Title>
      <Description>{offer.description}</Description>
      <Purchase>
        <Button>Купить</Button>
        <Price>
          {CURRENCIES[offer.price.currency.toUpperCase()]}
          {offer.price.value}
        </Price>
      </Purchase>
    </Content>
    {offer.benefits && (
      <BenefitsList vertical={!!isVertical}>
        {offer.benefits.map((el) => (
          <Benefit key={uuidv4()}>
            <Icon name="check" /> {el}
          </Benefit>
        ))}
      </BenefitsList>
    )}
  </OfferContainer>
);

OfferCard.propTypes = {
  offer: PropTypes.object,
  isVertical: PropTypes.bool,
};

OfferCard.defaultProps = {
  offer: null,
  isVertical: false,
};
