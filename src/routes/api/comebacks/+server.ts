export const GET = async ({ locals }) => {
	const getComebacks = async () => {
		const comebacks: Array<object> = [];
		try {
			const data = await locals.pb.collection('comebacks').getList();
			for (let i = 0; i < data.items.length; i++) {
				const item = data.items[i];
				const user = await locals.pb
					.collection('users')
					.getFirstListItem('id = "' + item.userId + '"');

				comebacks.push({
					username: user.username,
					avatar: locals.pb.files.getUrl(user, user.avatar),
					time: item.time
				});
			}
		} catch (err) {
			console.log(err);
		}
		return comebacks;
	};

	return new Response(JSON.stringify(await getComebacks()), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};