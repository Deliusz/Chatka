import { redirectIfUserIsNotLoggedIn } from '$lib/helpers.js';

export const load = async ({ locals, url }) => {
	if (url.pathname != '/login') redirectIfUserIsNotLoggedIn(locals, 'login');

	if (locals.pb.authStore.model) {
		return {
			user: {
				avatar: locals.pb.files.getUrl(locals.pb.authStore.model, locals.pb.authStore.model.avatar),
				email: locals.pb.authStore.model.email,
				name: locals.pb.authStore.model.name,
				username: locals.pb.authStore.model.username
			}
		};
	}
};
