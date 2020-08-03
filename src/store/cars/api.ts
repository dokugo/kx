import { Car, CarStatus } from './types'

const API_ROOT =
  'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26'

const sleep = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time))

const parseResponse = (item: Car): Car => {
  const parsedItem = {
    ...item,
    id: String(item.id),
    price: item.price.toLocaleString().replace(/\W+/g, ' '),
    year: String(item.year),
    status:
      item.status === CarStatus.Incorrect ? CarStatus.Pending : item.status,
  }

  return parsedItem
}

const getRequest = async (): Promise<Car[]> => {
  const response = await fetch(`${API_ROOT}/frontend_test_table.json`)
  const rawData = await response.json()
  return rawData
}

export const ApiClient = {
  get: async (): Promise<Car[]> => {
    await sleep(1000)
    const rawData = await getRequest()
    const parsedData = rawData.map(parseResponse)
    return parsedData
  },
}
