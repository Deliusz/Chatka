import { redirectIfUserIsLoggedIn } from '$lib/functions/helpers';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	redirectIfUserIsLoggedIn(locals, '/');
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			// Auth user to locals
			await locals.pb
				.collection('users')
				.authWithPassword(data.email.toString(), data.password.toString());
		} catch (err) {
			// Return auth err
			return {
				error: true,
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
