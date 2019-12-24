import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { useThunk } from 'lib/hook'

import * as todo from 'store/example/todo'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    default: {},
    done: { textDecorationLine: 'line-through' }
  })
)

const FunctionalCounter: React.FC = () => {
  const todos = useSelector(todo.selector.todos, shallowEqual)
  const todoThunk: todo.Thunk = useThunk(todo.thunk)

  const [name, setName] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onInsert = () => {
    if (!name) return
    todoThunk.insert(name)
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
        {todos.map(t => {
          return (
            <li key={t.id} className={t.done ? styles.done : styles.default}>
              {t.id}&nbsp;
              {t.name}&nbsp;
              <button onClick={() => todoThunk.toggle(t.id)}>v</button>&nbsp;
              <button onClick={() => todoThunk.remove(t.id)}>x</button>&nbsp;
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FunctionalCounter
