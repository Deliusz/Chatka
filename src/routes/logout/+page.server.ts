import { redirect } from '@sveltejs/kit';

export const actions = {
	logout: async ({ locals }) => {
		try {
			locals.pb.authStore.clear();
		} catch (err) {
			console.log(err);
		}

		throw redirect(303, '/');
	}
};
