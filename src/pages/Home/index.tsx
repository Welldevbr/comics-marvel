import { Button } from '../../components/Button';
import { NavBar } from '../../components/NavBar';
import { Banner, HomeContainer } from './styles';

export function Home() {
 return (
   <HomeContainer>
      <h1>Novos Lançamentos</h1>
      <Banner>
        <p>
          Compre a sua HQ através da Comics Marvel e ganhe 500 pontos 
        </p>
        <Button>Enviar</Button>
      </Banner>
   </HomeContainer>
 );
}