import config from '@/common/config'
import { request } from '@/utils/request'
import { TestReqModel } from '@/model'

export const getTest = (params: TestReqModel): Promise<any> => {
  return request({
    baseURL: config.domains.BASE,
    method: 'get',
    headers: {
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
    },
    url: `/api/front/brandStore/main/${params.brandUrl}`,
    option: { useErrorHandle: true },
  })
}
