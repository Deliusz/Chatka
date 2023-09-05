export const actions = {
	update: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		try {
			const id = await locals.pb
				.collection('comebacks')
				.getFirstListItem('userId = "' + locals.pb.authStore.model?.id + '"');

			await locals.pb.collection('comebacks').update(id.id, { time: JSON.stringify(data) });
		} catch (err) {
			console.log(err);
		}
	}
};
