// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// src/app.d.ts
import PocketBase from 'pocketbase';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			pb: PocketBase;
			user
		}
	}
}

export {};
