import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

import * as Styled from './styles'
import { useEffect, useState } from 'react'
import NewCycleForm from './NewCycleForm'
import Countdown from './Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prev) => [...prev, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Time | ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />
        <Countdown
          activeCycle={activeCycle}
          setCycles={setCycles}
          activeCycleId={activeCycleId}
        />

        <Styled.CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Styled.Separator>:</Styled.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Styled.CountdownContainer>

        {activeCycle ? (
          <Styled.StopCountdownButton
            onClick={handleInterruptCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interromper
          </Styled.StopCountdownButton>
        ) : (
          <Styled.StartCountdownButton
            disabled={isSubmitDisabled}
            type="submit"
          >
            <Play size={24} />
            Começar
          </Styled.StartCountdownButton>
        )}
      </form>
    </Styled.HomeContainer>
  )
}

export default Home
