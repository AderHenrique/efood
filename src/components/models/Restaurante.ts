class Restaurante {
  id: number
  title: string
  category: string
  description: string
  image: string
  note: number
  rote: string
  highlight?: string

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    note: number,
    rote: string,
    highlight?: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.note = note
    this.rote = rote
    this.highlight = highlight
  }
}

export default Restaurante
