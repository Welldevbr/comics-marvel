import { Button } from '../../components/Button';
import { Banner, Footer, HomeContainer } from './styles';
import ComicsList from '../../components/ComicList';
import logo from '../../assets/Logo-Alt.svg'

export function Home() {  

 return (
   <>
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
    <Footer>
      <div>
        <img src={logo} alt="logo marvel" />
        <span>
          <h3>Developed by </h3>
          <a href="https://github.com/Welldevbr/">Wellington Santana</a>
        </span>
        <p>© 2023 MARVEL</p>
      </div>
    </Footer>
  </>
 );
}