import PropTypes from 'prop-types';

import { Button } from 'UI-KIT';

import {
  BenefitsList,
  Benefit,
  ContentContainer,
  Description,
  Heading,
  OfferContainer,
  Title,
} from 'COMPONENTS/Offer/styles/OfferStyle';
import { BtnContainer } from 'COMPONENTS/CourseCard/styles/CourseCardStyled';

export const OfferCard = ({ offer, verticalAlign }) => (
  <OfferContainer verticalAlign>
    <ContentContainer>
      <Heading>
        <Title>{offer.name}</Title>
      </Heading>
      {!verticalAlign && <Description>{offer.description}</Description>}
      <BtnContainer>
        <Button>Купить</Button>
      </BtnContainer>
    </ContentContainer>
    {verticalAlign && offer.benefits && (
      <BenefitsList>
        {offer.benefits.map((el) => (
          <Benefit key={Math.random()}> {el} </Benefit>
        ))}
      </BenefitsList>
    )}
  </OfferContainer>
);

OfferCard.propTypes = {
  offer: PropTypes.object,
  verticalAlign: PropTypes.bool,
};

OfferCard.defaultProps = {
  offer: null,
  verticalAlign: false,
};
