export enum CarColor {
  White = 'white',
  Black = 'black',
  Grey = 'grey',
  Red = 'red',
  Green = 'green',
  Unset = '',
}

export enum CarStatus {
  InStock = 'in_stock',
  Pending = 'pending',
  OutOfStock = 'out_of_stock',
  Unset = '',
  Incorrect = 'pednding',
}

export enum TextField {
  Title = 'title',
  Year = 'year',
  Price = 'price',
  Description = 'description',
}

export interface Car {
  color: CarColor
  description: string
  id: string
  price: string
  status: CarStatus
  title: string
  year: string
}

export interface TextFieldParams {
  type: TextField
  label: string
}

export interface TextFieldData {
  type: {
    Title: TextField.Title
    Year: TextField.Year
    Price: TextField.Price
    Description: TextField.Description
  }
  payload: {
    [TextField.Title]: Car['title']
    [TextField.Year]: Car['year']
    [TextField.Price]: Car['price']
    [TextField.Description]: Car['description']
  }
}
