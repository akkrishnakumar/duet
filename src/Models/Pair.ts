import { User } from "./User";

export interface Pair {
  name: () => string
}

export class SomePair implements Pair {

  readonly user: User
  readonly rating: number

  constructor(
    user: User,
    rating: number = 3
  ) {
    this.user = user
    this.rating = rating
  }

  name = () => this.user?.name ?? ""

}

export class NoPair implements Pair {
  name = () => ""
}