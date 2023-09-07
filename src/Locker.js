import { atom, task } from "nanostores";
import {
  Account,
  AppwriteException,
  Client,
  Functions,
  Databases,
  Storage,
  ID,
  Models,
  Query,
} from "appwrite";

export const appwriteClient = new Client()
  .setEndpoint("https://ap.kbve.com/v1")
  .setProject("6436a6dc9a6b48db802f");

  export const api$ = atom(false);
