import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  ContainerCard,
  CardtextContent,
  CardText,
  CardIcon,
  CardTotalContent,
  CardTotal,
  CardTotalText,
  ListagemTitle,
} from './styles';

const Card: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerCard>
          <CardtextContent>
            <CardText>Entradas</CardText>
            <CardIcon>
              <Icon name="arrow-up-circle" color="#12A454" size={33} />
            </CardIcon>
          </CardtextContent>
          <CardTotalContent>
            <CardTotal>R$ 15.000,00</CardTotal>
            <CardTotalText>Última entrada dia 13 de abril</CardTotalText>
          </CardTotalContent>
        </ContainerCard>
      </Container>
    </>
  );
};

export default Card;
