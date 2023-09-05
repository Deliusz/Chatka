export const GET = async ({ locals }) => {
	const getComeback = async () => {
		let comeback: object = {};
		try {
			const data = await locals.pb
				.collection('comebacks')
				.getFirstListItem('userId = "' + locals.pb.authStore.model?.id + '"');
			comeback = data.time;
		} catch (err) {
			console.log(err);
		}
		return comeback;
	};

	return new Response(JSON.stringify(await getComeback()), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
