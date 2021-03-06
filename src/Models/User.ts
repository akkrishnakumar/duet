import { Pair, NoPair } from "./Pair"

export class User {

  readonly id: number
  readonly name: string

  currentPair: Pair = new NoPair()
  previousPairs: Array<Pair> = []

  constructor(
    id: number,
    name: string,
  ) {
    this.id = id
    this.name = name
  }

  setCurrentPairTo = (pair: Pair) => {
    this.addCurrentToPreviousPair()
    this.currentPair = pair
  }

  addCurrentToPreviousPair = () => {
    if (this.currentPair)
      this.previousPairs.push(this.currentPair)
  }

  rateCurrentPair = (rating: number) =>
    this.currentPair = this.currentPair.rate(rating)

}