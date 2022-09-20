import * as Styled from './styles'

const NewCycleForm = () => {
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
