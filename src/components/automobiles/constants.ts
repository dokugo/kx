/* eslint-disable @typescript-eslint/camelcase */
import { CarColor, /* CarStatus, */ InputTypes } from 'store/automobile/types'

export const inputData = {
  model: {
    type: InputTypes.Title,
    label: 'Название',
  },
  year: {
    type: InputTypes.Year,
    label: 'Год',
  },
  price: {
    type: InputTypes.Price,
    label: 'Цена',
  },
  description: {
    type: InputTypes.Description,
    label: 'Описание',
  },

  /*   label: {
    model: 'Название',
    year: 'Год',
    price: 'Цена',
    description: 'Описание',
  },
  type: {
    model: InputTypes.Model,
    year: InputTypes.Year,
    price: InputTypes.Price,
    description: InputTypes.Description,
  }, */
}

export const radioData = {
  // name: 'automobileColors',
  types: [
    {
      color: '#fff',
      value: CarColor.White,
      id: 0,
    },
    {
      color: '#000',
      value: CarColor.Black,
      id: 1,
    },
    {
      color: '#cbcbcc',
      value: CarColor.Grey,
      id: 2,
    },
    {
      color: '#d74345',
      value: CarColor.Red,
      id: 3,
    },
    {
      color: '#88c504',
      value: CarColor.Green,
      id: 4,
    },
  ],
}

export const selectData = {
  unset: 'Статус',
  types: {
    in_stock: {
      id: 1,
      text: 'В наличии',
    },
    pending: {
      id: 2,
      text: 'Ожидается',
    },
    out_of_stock: {
      id: 3,
      text: 'Нет в наличии',
    },
  },
}

/* export const selectData = {
  unset: 'Статус',
  types: [
    { id: 1, text: 'В наличии', type: CarStatus.InStock },
    { id: 2, text: 'Ожидается', type: CarStatus.Pednding },
    { id: 3, text: 'Нет в наличии', type: CarStatus.OutOfStock },
  ],
} */
