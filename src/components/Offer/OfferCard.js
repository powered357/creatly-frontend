import PropTypes from 'prop-types';

import { Button } from 'UI-KIT';

import { Description, Heading, OfferContainer, Title } from 'COMPONENTS/Offer/styles/OfferStyle';
import { BtnContainer } from 'COMPONENTS/CourseCard/styles/CourseCardStyled';

export const OfferCard = ({ offer, verticalAlign }) => (
  <OfferContainer verticalAlign>
    <Heading>
      <Title>{offer.name}</Title>
    </Heading>
    {!verticalAlign && <Description>{offer.description}</Description>}
    {verticalAlign && offer.benefits && offer.benefits.map((el) => <li key={Math.random()}> {el} </li>)}
    <BtnContainer>
      <Button fullWidth>Купить</Button>
    </BtnContainer>
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
