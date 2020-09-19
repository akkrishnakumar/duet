import { User } from "../Models/User";

export const jsonToUser = (jsonObj: any): User => {
  const user =
    new User(
      jsonObj['id'],
      jsonObj['name']
    )
  user.currentPair = jsonObj['currentPair']
  user.previousPairs = jsonObj['previousPairs']
  return user
}