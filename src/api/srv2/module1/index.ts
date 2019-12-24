// import http from 'lib/http'
import mockData from './mock/data.json'
import { delay } from 'lib/util'

export interface Data {
  some: string
}

const v2 = {
  content: {
    list: async (): Promise<Data> => {
      // const { data } = await http.get('/list', {
      //   headers: {
      //   }
      // })
      // return data
      await delay(1000) // simulate network
      return mockData
    }
  }
}

export { v2 }
