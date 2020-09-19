export class User {
  
  readonly id: number
  readonly name: string

  currentPair: User | undefined = undefined
  previousPairs: Array<User> = []

  constructor(
    id: number,
    name: string
  ) {
    this.id = id
    this.name = name
  }

}