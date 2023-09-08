import { atom, task, keepMount  } from "nanostores";
// import {
//   Account,
//   AppwriteException,
//   Client,
//   Functions,
//   Databases,
//   Storage,
//   ID,
//   Models,
//   Query,
// } from "appwrite";

// export const appwriteClient = new Client()
//   .setEndpoint("https://ap.kbve.com/v1")
//   .setProject("6436a6dc9a6b48db802f");

// export const api$ = atom(false);

export const title$ = atom('Title');
export const category$ = atom('General');
export const img$ = atom('https://source.unsplash.com/random/480x360/?4');
export const link$ = atom('/#');
export const description$ = atom('Description');
export const n8n$ = atom('');
export const load$ = atom(true);

export const tasker = async (__key, __data) => {
	task(async () => {
		console.log(`Storing ${__data} into atom!`);
		__key.set(__data);
		keepMount(__key);
	});
};