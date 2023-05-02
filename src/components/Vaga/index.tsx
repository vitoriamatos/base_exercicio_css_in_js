import Title from '../Titulo'
import Vacancies, { VacanciesTitle } from './style'
import { VacanciesLink } from './style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vacancies>
    <VacanciesTitle>
      <Title color={'main'} fontSize={1.17}>
        {props.titulo}
      </Title>
    </VacanciesTitle>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VacanciesLink href="#">Ver detalhes e candidatar-se</VacanciesLink>
  </Vacancies>
)

export default Vaga
