import { Play } from 'phosphor-react'

import * as Styled from './styles'

const Home = () => {
  return (
    <Styled.HomeContainer>
      <form>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          ></Styled.TaskInput>

          <label htmlFor="minutesAmount">durante</label>
          <Styled.MinutesAmountInput id="minutesAmount" type="number" />

          <span>minutos.</span>
        </Styled.FormContainer>

        <Styled.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CountdownContainer>

        <Styled.StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  )
}

export default Home
