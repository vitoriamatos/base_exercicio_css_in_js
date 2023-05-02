import { FormEvent, useState } from 'react'
import FormVagasStyle, { ButtonVagas } from './styles'
import { InputVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagasStyle onSubmit={aoEnviarForm}>
      <InputVagas
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonVagas type="submit">Pesquisar</ButtonVagas>
    </FormVagasStyle>
  )
}
export default FormVagas
