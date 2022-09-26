import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'
import * as Styled from './styles'

const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <Styled.HistoryContainer>
      <h1>Meu histórico</h1>

      <Styled.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Styled.Status statusColor="green">
                        Concluido
                      </Styled.Status>
                    )}
                    {cycle.interruptedDate && (
                      <Styled.Status statusColor="red">
                        Interrompido
                      </Styled.Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Styled.Status statusColor="yellow">
                        Em andamento
                      </Styled.Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Styled.HistoryList>
    </Styled.HistoryContainer>
  )
}

export default History
