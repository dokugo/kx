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
  Pednding = 'pednding',
  OutOfStock = 'out_of_stock',
  Unset = '',
}

export enum InputTypes {
  Title = 'title',
  Year = 'year',
  Price = 'price',
  Description = 'description',
}

export interface InputParams {
  type: InputTypes
  label: string
}

export interface InputData {
  type: {
    Title: InputTypes.Title
    Year: InputTypes.Year
    Price: InputTypes.Price
    Description: InputTypes.Description
  }
  payload: {
    [InputTypes.Title]: string
    [InputTypes.Year]: string
    [InputTypes.Price]: string
    [InputTypes.Description]: string
  }
}

export enum CarProperties {
  Title = 'Название',
  Year = 'Год',
  Price = 'Цена',
  Description = 'Описание',
}

export interface Car {
  Title: string
  year: string
  price: string
  description: string
  color: CarColor
  status: CarStatus
}
