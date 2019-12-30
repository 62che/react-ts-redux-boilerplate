import React from 'react'
import { Provider } from 'react-redux'
import { StoryFn } from '@storybook/addons'

import { createStore } from 'store'
import ClassCounterWithRedux from 'component/example/ClassCounterWithRedux'

const store = createStore()

export default {
  title: 'Example|ExampleGroup/ClassCounterWithRedux',
  decorators: [(story: StoryFn<JSX.Element>) => <Provider store={store}>{story()}</Provider>]
}

export const WithRedux1 = () => <ClassCounterWithRedux />
