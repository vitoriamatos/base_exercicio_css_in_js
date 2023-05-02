import Header from './components/Cabecalho'
import Hero from './components/Hero'
import Styles, { Container } from './styles'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <Styles />

      <Header />
      <Hero />
      <Container>
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </>
  )
}

export default App
