/* eslint-disable @typescript-eslint/camelcase */

import { CarColor, TextField } from 'store/cars/types'
import theme from 'theme'

export const carLabel = {
  title: 'Название',
  year: 'Год',
  color: 'Цвет',
  status: 'Статус',
  price: 'Цена',
  description: 'Описание',
}

export const carColor = {
  white: theme.color.white,
  black: theme.color.black,
  grey: theme.color.grey,
  red: theme.color.lightred,
  green: theme.color.green,
}

export const inputData = {
  title: {
    type: TextField.Title,
    label: carLabel.title,
  },
  year: {
    type: TextField.Year,
    label: carLabel.year,
  },
  price: {
    type: TextField.Price,
    label: carLabel.price,
  },
  description: {
    type: TextField.Description,
    label: carLabel.description,
  },
}

export const radioData = {
  types: [
    {
      color: carColor.white,
      value: CarColor.White,
      id: 0,
    },
    {
      color: carColor.black,
      value: CarColor.Black,
      id: 1,
    },
    {
      color: carColor.grey,
      value: CarColor.Grey,
      id: 2,
    },
    {
      color: carColor.red,
      value: CarColor.Red,
      id: 3,
    },
    {
      color: carColor.green,
      value: CarColor.Green,
      id: 4,
    },
  ],
}

export const carStatus = {
  in_stock: 'В наличии',
  pending: 'Ожидается',
  out_of_stock: 'Нет в наличии',
}

export const selectData = {
  unset: 'Статус',
  types: {
    in_stock: {
      id: 1,
      text: carStatus.in_stock,
    },
    pending: {
      id: 2,
      text: carStatus.pending,
    },
    out_of_stock: {
      id: 3,
      text: carStatus.out_of_stock,
    },
  },
}
