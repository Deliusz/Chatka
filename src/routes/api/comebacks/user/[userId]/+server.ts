export const GET = async ({ locals, params }) => {
	const getComeback = async () => {
		let comeback: object = {};
		try {
			const user = await locals.pb
				.collection('users')
				.getFirstListItem('id = "' + params.userId + '"');
			if (user.group == locals.pb.authStore?.model?.group) {
				const data = await locals.pb
					.collection('comebacks')
					.getFirstListItem('userId = "' + params.userId + '"');

				comeback = {
					time: data.time,
					username: user.username,
					avatar: locals.pb.files.getUrl(user, user.avatar)
				};
			}
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
