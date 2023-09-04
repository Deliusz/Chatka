import { redirect } from '@sveltejs/kit';

export const serializeNonPOJOs = (obj: object) => {
	return JSON.parse(JSON.stringify(obj));
};

export const redirectIfUserIsLoggedIn = (locals: App.Locals, path: string) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, path);
	}
};

export const redirectIfUserIsNotLoggedIn = (locals: App.Locals, path: string) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, path);
	}
};
