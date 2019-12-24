import http from 'lib/http'

import * as srv2 from './srv2'

export type Content = any

const srv1 = {
  module1: {
    v1: {
      content: {
        list: async (): Promise<Content> => {
          return await http({
            method: 'get',
            url: '/module/v1/content/list',
            params: {
            }
          })
        }
      }
    }
  }
}

export { srv1, srv2 }
