
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/defaultTheme"
import GlobalStyle from "./styles/global"
import { Home } from "./pages/Home"
import { NavBar } from "./components/NavBar"

export function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <NavBar />
        <Home />
        <GlobalStyle />
      </ThemeProvider>
  )
} 
