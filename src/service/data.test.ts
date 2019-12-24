import { get } from './data'
import expectedData from './mock/expected-data.json'

import { v2 } from 'api/srv2/module1'
import mockedApiData from './mock/api-sample.json'

describe('data service', () => {
  it('get', async () => {
    v2.content.list = jest.fn().mockImplementationOnce(async () => mockedApiData)

    const data = await get()

    expect(data).toEqual(expectedData)
  })
})
