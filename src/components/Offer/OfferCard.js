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

export const OfferCard = ({ offer, isVertical }) => {
  const {
    name,
    description,
    price: { currency, value },
    benefits,
  } = offer;

  return (
    offer && (
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
    )
  );
};

OfferCard.propTypes = {
  offer: PropTypes.object,
  isVertical: PropTypes.bool,
};

OfferCard.defaultProps = {
  offer: null,
  isVertical: false,
};
