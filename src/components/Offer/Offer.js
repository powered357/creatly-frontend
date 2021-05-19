import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiGetCourseOffers } from 'API/offers';

import { Text, Input } from 'UI-KIT';

import { OfferCard } from 'COMPONENTS/Offer/OfferCard';

import { OfferList, PreviewContainer } from './styles/OfferStyled';

export const Offer = () => {
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiGetCourseOffers(id).then(({ data }) => setOffers(() => data));
  }, []);

  return (
    <>
      {!!offers.length && (
        <>
          <PreviewContainer>
            <Text>Данный курс входит в следующие пакеты :</Text>
            <Input placeholder="Ввести промокод и получить скидку" />
          </PreviewContainer>
          <OfferList>
            {offers.map((el, i) => (
              <OfferCard key={i} offer={el} isVertical={offers.length === 1} />
            ))}
          </OfferList>
        </>
      )}
    </>
  );
};
