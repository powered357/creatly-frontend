import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { apiGetOffersByCourse } from 'API/offers';

import { Text, Input } from 'UI-KIT';

import { OfferCard } from 'COMPONENTS/Offer/OfferCard';

import { OfferList, PreviewContainer } from './styles/OfferStyle';

export const Offer = () => {
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiGetOffersByCourse(id).then(({ data }) => setOffers(() => data));
  }, []);

  return (
    <>
      {!!offers.length && (
        <>
          <PreviewContainer>
            <Text>Данный курс входит в следующие пакеты :</Text>
            <Input placeholder="Ввести промокод и получить скидку" />
          </PreviewContainer>
          {offers.length > 1 ? (
            <OfferList>
              {offers.map((el) => (
                <OfferCard key={uuidv4()} offer={el} />
              ))}
            </OfferList>
          ) : (
            <OfferCard offer={offers[0]} isVertical />
          )}
        </>
      )}
    </>
  );
};
