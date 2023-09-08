interface colorData {
	red: string;
	orange: string;
	amber: string;
	yellow: string;
	lime: string;
	green: string;
	emerald: string;
	teal: string;
	cyan: string;
	sky: string;
	blue: string;
	indigo: string;
	violet: string;
	fuchsia: string;
	pink: string;
	rose: string;
}

const backgroundColorVariants = {
	red: 'bg-red-600',
	orange: 'bg-orange-600',
	amber: 'bg-amber-600',
	yellow: 'bg-yellow-600',
	lime: 'bg-lime-600',
	green: 'bg-green-600',
	emerald: 'bg-emeral-600',
	teal: 'bg-teal-600',
	cyan: 'bg-cyan-600',
	sky: 'bg-sky-600',
	blue: 'bg-blue-600',
	indigo: 'bg-indigo-600',
	violet: 'bg-violet-600',
	fuchsia: 'bg-fuchsia-600',
	pink: 'bg-pink-600',
	rose: 'bg-rose-600'
};

const borderColorVariants = {
	red: 'border-red-600',
	orange: 'border-orange-600',
	amber: 'border-amber-600',
	yellow: 'border-yellow-600',
	lime: 'border-lime-600',
	green: 'border-green-600',
	emerald: 'border-emeral-600',
	teal: 'border-teal-600',
	cyan: 'border-cyan-600',
	sky: 'border-sky-600',
	blue: 'border-blue-600',
	indigo: 'border-indigo-600',
	violet: 'border-violet-600',
	fuchsia: 'border-fuchsia-600',
	pink: 'border-pink-600',
	rose: 'border-rose-600'
};

const peerCheckedBorderColorVariants = {
	red: 'peer-checked:border-red-600',
	orange: 'peer-checked:border-orange-600',
	amber: 'peer-checked:border-amber-600',
	yellow: 'peer-checked:border-yellow-600',
	lime: 'peer-checked:border-lime-600',
	green: 'peer-checked:border-green-600',
	emerald: 'peer-checked:border-emeral-600',
	teal: 'peer-checked:border-teal-600',
	cyan: 'peer-checked:border-cyan-600',
	sky: 'peer-checked:border-sky-600',
	blue: 'peer-checked:border-blue-600',
	indigo: 'peer-checked:border-indigo-600',
	violet: 'peer-checked:border-violet-600',
	fuchsia: 'peer-checked:border-fuchsia-600',
	pink: 'peer-checked:border-pink-600',
	rose: 'peer-checked:border-rose-600'
};

const textColorVariants = {
	red: 'text-red-400',
	orange: 'text-orange-400',
	amber: 'text-amber-400',
	yellow: 'text-yellow-400',
	lime: 'text-lime-400',
	green: 'text-green-400',
	emerald: 'text-emeral-400',
	teal: 'text-teal-400',
	cyan: 'text-cyan-400',
	sky: 'text-sky-400',
	blue: 'text-blue-400',
	indigo: 'text-indigo-400',
	violet: 'text-violet-400',
	fuchsia: 'text-fuchsia-400',
	pink: 'text-pink-400',
	rose: 'text-rose-400'
};

const peerCheckedTextColorVariants = {
	red: 'peer-checked:text-red-500',
	orange: 'peer-checked:text-orange-500',
	amber: 'peer-checked:text-amber-500',
	yellow: 'peer-checked:text-yellow-500',
	lime: 'peer-checked:text-lime-500',
	green: 'peer-checked:text-green-500',
	emerald: 'peer-checked:text-emeral-500',
	teal: 'peer-checked:text-teal-500',
	cyan: 'peer-checked:text-cyan-500',
	sky: 'peer-checked:text-sky-500',
	blue: 'peer-checked:text-blue-500',
	indigo: 'peer-checked:text-indigo-500',
	violet: 'peer-checked:text-violet-500',
	fuchsia: 'peer-checked:text-fuchsia-500',
	pink: 'peer-checked:text-pink-500',
	rose: 'peer-checked:text-rose-500'
};

const backgroundGradientVariants = {
	red: 'bg-gradient-to-tr from-red-500 to-red-700',
	orange: 'bg-gradient-to-tr from-orange-500 to-orange-700',
	amber: 'bg-gradient-to-tr from-amber-500 to-amber-700',
	yellow: 'bg-gradient-to-tr from-yellow-500 to-yellow-700',
	lime: 'bg-gradient-to-tr from-lime-500 to-lime-700',
	green: 'bg-gradient-to-tr from-green-500 to-green-700',
	emerald: 'bg-gradient-to-tr from-emerald-500 to-emerald-700',
	teal: 'bg-gradient-to-tr from-teal-500 to-teal-700',
	cyan: 'bg-gradient-to-tr from-cyan-500 to-cyan-700',
	sky: 'bg-gradient-to-tr from-sky-500 to-sky-700',
	blue: 'bg-gradient-to-tr from-blue-500 to-blue-700',
	indigo: 'bg-gradient-to-tr from-indigo-500 to-indigo-700',
	violet: 'bg-gradient-to-tr from-violet-500 to-violet-700',
	fuchsia: 'bg-gradient-to-tr from-fuchsia-500 to-fuchsia-700',
	pink: 'bg-gradient-to-tr from-pink-500 to-pink-700',
	rose: 'bg-gradient-to-tr from-rose-500 to-rose-700'
};

export const getBackgroundColorVariant = (color: string) => {
	return backgroundColorVariants[color as keyof colorData];
};

export const getBackgroundGradientVariant = (color: string) => {
	return backgroundGradientVariants[color as keyof colorData];
};

export const getBorderColorVariant = (color: string) => {
	return borderColorVariants[color as keyof colorData];
};

export const getPeerCheckedTextColorVariant = (color: string) => {
	return peerCheckedTextColorVariants[color as keyof colorData];
};

export const getPeerCheckedBorderColorVariant = (color: string) => {
	return peerCheckedBorderColorVariants[color as keyof colorData];
};

export const getTextColorVariant = (color: string) => {
	return textColorVariants[color as keyof colorData];
};
