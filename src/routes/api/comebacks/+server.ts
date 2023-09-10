interface ComebackData {
	id: string;
	username: string;
	avatar: string;
	time: string;
	color: string;
}

export const GET = async ({ locals }) => {
	const getComebacks = async () => {
		const comebacks: Array<ComebackData> = [];
		try {
			const userGroups = await locals.pb
				.collection('comebackGroupUsers')
				.getFullList({ filter: 'userId = "' + locals.pb.authStore.model?.id + '"' });

			let first = true;

			for (let i = 0; i < userGroups.length; i++) {
				const userGroup = userGroups[i].comebackGroupId;
				const users = await locals.pb
					.collection('comebackGroupUsers')
					.getFullList({ filter: 'comebackGroupId = "' + userGroup + '"' });
				for (let l = 0; l < users.length; l++) {
					const user = users[l].userId;
					const userProfileData = await locals.pb
						.collection('users')
						.getFirstListItem('id = "' + user + '"');
					const userComebacksData = await locals.pb
						.collection('comebacks')
						.getFirstListItem('userId = "' + user + '"');

					const comeback = {
						id: userProfileData.id,
						username: userProfileData.username,
						avatar: locals.pb.files.getUrl(userProfileData, userProfileData.avatar),
						time: userComebacksData.time,
						color: userProfileData.accentColor
					};

					let includes = false;

					if (first) {
						comebacks.push(comeback);
						first = false;
						includes = true;
					} else {
						for (let k = 0; k < comebacks.length; k++) {
							if (comebacks[k].id === comeback.id) {
								includes = true;
								break;
							}
						}
					}
					if (!includes) {
						comebacks.push(comeback);
					}
				}
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
