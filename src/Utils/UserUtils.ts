import { User } from "../Models/User";
import { jsonToUser } from "./JsonAdaptor";

export const loggedInUser = (): User => jsonToUser(JSON.parse(sessionStorage.getItem("user") ?? ""))