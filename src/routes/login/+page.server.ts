import { redirectIfUserIsLoggedIn } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	redirectIfUserIsLoggedIn(locals, '/');
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(data.email.toString(), data.password.toString());
		} catch (err) {
			return {
				error: true,
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
