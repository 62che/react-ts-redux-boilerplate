import { v2, Data as Data_ } from 'api/srv2/module1'

export interface Data {
  some: string
}

export const get = async (): Promise<Data> => {
  const data_: Data_ = await v2.content.list()
  const data: Data = data_

  return data
}
