export interface Root {
  bottles: Bottles
}

export interface Bottles {
  info: Info
  bottles: Bottle[]
}

export interface Info {
  total: number
  pages: number
}

export interface Bottle {
  _id: string
  nombre: string
  imagen: string
  uva: string
  anyo: number
  precio: number
}
