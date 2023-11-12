export const unescape = (str: string) => {
	return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
};
