export const GET = async ({ locals, params }) => {
	const getComeback = async () => {
		let comeback: object = {};
		try {
			const user = await locals.pb
				.collection('users')
				.getFirstListItem('id = "' + params.userId + '"');
			const requestedUsergroups = await locals.pb
				.collection('comebackGroupUsers')
				.getFullList({ filter: 'userId = "' + params.userId + '"' });

			const loggedInUsergroups = await locals.pb
				.collection('comebackGroupUsers')
				.getFullList({ filter: 'userId = "' + locals.pb.authStore?.model?.id + '"' });

			let inSameGroup = false;

			for (let i = 0; i < loggedInUsergroups.length; i++) {
				const loggedInGroup = loggedInUsergroups[i].comebackGroupId;
				for (let l = 0; l < requestedUsergroups.length; l++) {
					const requestedGroup = requestedUsergroups[l].comebackGroupId;
					if (loggedInGroup == requestedGroup) {
						inSameGroup = true;
						break;
					}
				}
			}

			if (inSameGroup) {
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
