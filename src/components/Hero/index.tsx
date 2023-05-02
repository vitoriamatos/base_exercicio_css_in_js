import HeroStyle, { HeroTitle } from './styles'
import { Container } from '../../styles'
import { Title } from '../Titulo/styles'
const Hero = () => (
  <HeroStyle>
    {' '}
    <Container>
      <HeroTitle>
        <Title fontSize={3}>
          As melhores vagas para tecnologia, design e artes visuais.
        </Title>
      </HeroTitle>{' '}
    </Container>
  </HeroStyle>
)

export default Hero
