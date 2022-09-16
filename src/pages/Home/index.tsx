import { Play } from 'phosphor-react'

import * as Styled from './styles'

const Home = () => {
  return (
    <Styled.HomeContainer>
      <form>
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task"></input>

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />

          <span>minutos.</span>
        </Styled.FormContainer>

        <Styled.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </Styled.HomeContainer>
  )
}

export default Home
