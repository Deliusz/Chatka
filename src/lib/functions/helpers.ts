import { redirect } from '@sveltejs/kit';

export const serializeNonPOJOs = (obj: object) => {
	return JSON.parse(JSON.stringify(obj));
};

export const redirectIfUserIsLoggedIn = (locals: App.Locals, path: string) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, path);
	}
};

export const redirectIfUserIsNotLoggedIn = (locals: App.Locals, path: string) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, path);
	}
};

export interface timeData {
	Mon: string;
	Tue: string;
	Wed: string;
	Thu: string;
	Fri: string;
	Sat: string;
	Sun: string;
}

export const getCurrentDayComebackTime = (obj: object) => {
	const objdata = obj as timeData;
	const currnetDate = new Date();
	const currentDay = currnetDate.toDateString().split(' ')[0];
	const timeCurrentDay = objdata[currentDay as keyof timeData];
	return timeCurrentDay;
};

export interface ComebacksData {
	id: string;
	username: string;
	avatar: string;
	time: timeData;
	color: string;
}

export const getCurrentDay = () => {
	const currnetDate = new Date();
	const currentDay = currnetDate.toDateString().split(' ')[0];
	return currentDay;
};

export const sortComebacksByTime = (comebacks: Array<ComebacksData>) => {
	comebacks.sort((a, b) => {
		const aa = new Date(`2000-01-01T${a.time[getCurrentDay() as keyof timeData]}`).getTime();
		const bb = new Date(`2000-01-01T${b.time[getCurrentDay() as keyof timeData]}`).getTime();

		return aa - bb;
	});
	return comebacks;
};

export const getJSONfromFetch = async (url: string) => {
	const data = await fetch(url);
	const json = await data.json();
	return json;
};

export const avaliableTimes = ['13:50', '14:50', '15:50', '16:50', '00:00'];
export const avaliableDays = [
	{ long: 'Poniedziałek', short: 'Mon' },
	{ long: 'Tuesday', short: 'Tue' },
	{ long: 'Wednesday', short: 'Wed' },
	{ long: 'Thuersday', short: 'Thu' },
	{ long: 'Friday', short: 'Fri' },
	{ long: 'Saturday', short: 'Sat' },
	{ long: 'Sunday', short: 'Sun' }
];

export const ifTimeIsInDay = (data: timeData, day: string, time: string) => {
	if (data[day as keyof timeData] == time) {
		return true;
	}
	return false;
};

interface User {
	id: string;
	avatar: string;
	color: string;
	email: string;
	name: string;
	username: string;
}

export interface UserData {
	user: User;
}
