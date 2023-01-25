import { Button } from '../../components/Button';
import { Banner, HomeContainer } from './styles';
import ComicsList from '../../components/ComicList';

export function Home() {  

 return (
   <HomeContainer>
      <h1>Novos Lançamentos</h1>
      <Banner>
        <p>
          Compre a sua HQ através da Comics Marvel e ganhe 500 pontos 
        </p>
        <Button>Entrar</Button>
      </Banner>
      <ComicsList />
   </HomeContainer>
 );
}