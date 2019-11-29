import React, { useState } from 'react'
import { useSelector, shallowEqual /*, useDispatch*/ } from 'react-redux'

import { useDispatchers } from '../lib/hook'

import { RootState } from '../store'
import { todoActionCreators, TodoActionCreators } from '../store/module/todo'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    default: {},
    done: { textDecorationLine: 'line-through' }
  })
)

const FunctionalCounter: React.FC = () => {
  const todoState = useSelector((state: RootState) => state.todo, shallowEqual)
  const todoDispatchers: TodoActionCreators = useDispatchers(todoActionCreators)

  const [name, setName] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onInsert = () => {
    if (!name) return
    todoDispatchers.newInsert(name)
    setName('')
  }

  const styles = useStyles()

  return (
    <div>
      <div>
        <h1>Todo</h1>
        <input type="text" value={name} onChange={onChangeName} />
        <button onClick={onInsert}>Add</button>
      </div>
      <ul>
        {todoState.todos.map(t => {
          return (
            <li key={t.id} className={t.done ? styles.done : styles.default}>
              {t.id}&nbsp;
              {t.name}&nbsp;
              <button onClick={() => todoDispatchers.newToggle(t.id)}>v</button>&nbsp;
              <button onClick={() => todoDispatchers.newRemove(t.id)}>x</button>&nbsp;
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FunctionalCounter
