import { Pair, NoPair } from "./Pair"

export class User {

  readonly id: number
  readonly name: string

  currentPair: Pair = NoPair
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

}