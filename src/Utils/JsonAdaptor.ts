import { User } from "../Models/User";
import { Pair, NoPair, SomePair } from "../Models/Pair";

export const jsonToUser = (jsonObj: any): User => {
  const user = new User(jsonObj['id'], jsonObj['name'])
  user.currentPair = jsonToPair(jsonObj['currentPair'])
  user.previousPairs = jsonToPairs(jsonObj['previousPairs'])
  return user
}

const jsonToPair = (json: any): Pair =>
  json && json.user ?
    new SomePair(jsonToUser(json.user), json.rating) :
    new NoPair()

const jsonToPairs = (jsonArray: any): Array<Pair> =>
  jsonArray?.length > 0 ?
    [...jsonArray].map(jsonToPair) :
    []
