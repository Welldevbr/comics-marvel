import { Button } from '../../components/Button';
import { useAPI } from '../../hooks/useAPI';
import { Banner, HomeContainer } from './styles';

export function Home() {
  const { items } = useAPI()

  console.log( items )

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