import { User } from "./User";

export interface Pair {
  name: () => string
  rate: (rating: number) => Pair
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

  rate = (rating: number) =>
    new SomePair(this.user, rating)

}

export class NoPair implements Pair {
  name = () => ""
  rate = (rating: number) => new NoPair()
}