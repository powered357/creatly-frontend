import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { apiGetOffersByCourse } from 'API/offers';

import { Text, Input } from 'UI-KIT';

import { OfferCard } from 'COMPONENTS/Offer/OfferCard';

import { Container, PreviewContainer } from './styles/OfferStyle';
export const Offer = () => {
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiGetOffersByCourse(id).then(({ data }) => setOffers(() => data));
  }, []);

  return (
    <>
      <PreviewContainer>
        <Text>Данный курс входит в следующие пакеты :</Text>
        <Input placeholder="Ввести промокод и получить скидку" />
      </PreviewContainer>
      {offers && offers.length - 1 ? (
        <Container>
          {offers.map((el) => (
            <OfferCard key={uuidv4()} offer={el} verticalAlign />
          ))}
        </Container>
      ) : (
        <OfferCard key={offers[0].name} offer={offers[0]} />
      )}
    </>
  );
};
