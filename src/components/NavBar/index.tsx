import { Container, Menu, MenuItem } from './styles'

import logoImg from '../../assets/Logo.svg'
import searchIcon from '../../assets/Search.svg'


export function NavBar() {
  
  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <Menu>
        <li><MenuItem href="#">Home</MenuItem></li>
        <li><MenuItem href="#">Quadrinhos</MenuItem></li>
        <li><MenuItem href="#">Meus Pedidos</MenuItem></li>
        <li><MenuItem href="#">Sobre Nós</MenuItem></li>
      </Menu>
      <Menu>
        <span>
          <input type="text" placeholder='Buscar HQ' />
          <img src={searchIcon} alt="Search Icon" />
        </span>
        <a href="">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0403 25.6316C21.6947 22.8331 19.3087 20.6667 16.4167 20.6667H13.5833C10.6913 20.6667 8.3053 22.8331 7.95968 25.6316M22.0403 25.6316C25.4814 23.3484 27.75 19.4391 27.75 15C27.75 7.95837 22.0416 2.25 15 2.25C7.95837 2.25 2.25 7.95837 2.25 15C2.25 19.4391 4.5186 23.3484 7.95968 25.6316M22.0403 25.6316C20.0229 26.9703 17.6025 27.75 15 27.75C12.3975 27.75 9.97709 26.9703 7.95968 25.6316M19.25 12.1667C19.25 14.5139 17.3472 16.4167 15 16.4167C12.6528 16.4167 10.75 14.5139 10.75 12.1667C10.75 9.81946 12.6528 7.91667 15 7.91667C17.3472 7.91667 19.25 9.81946 19.25 12.1667Z" stroke="white" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </Menu>
    </Container>
  )
}
