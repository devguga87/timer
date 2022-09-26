import * as Styled from './styles'
import * as zod from 'zod'
import { useForm, useFormContext } from 'react-hook-form'

import { useContext } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <Styled.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <Styled.TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
        <option value="projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <Styled.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </Styled.FormContainer>
  )
}

export default NewCycleForm
