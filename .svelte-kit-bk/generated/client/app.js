export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~2],
		"/(protected)/(user)/activity": [~5],
		"/(protected)/brands/add": [~7],
		"/(auth)/login": [~3],
		"/(protected)/(user)/profile": [~6],
		"/(public)/rackets": [~16],
		"/(protected)/rackets/add": [~9],
		"/(public)/rackets/[id]": [~17],
		"/(protected)/rackets/[id]/update": [~8],
		"/(protected)/reviews/rackets/add/[racket_id]": [~10],
		"/(protected)/reviews/rackets/update/[racket_id]": [~11],
		"/(protected)/reviews/strings/add/[id]": [~12],
		"/(protected)/reviews/strings/update/[string_id]": [~13],
		"/(auth)/signup": [~4],
		"/(public)/strings": [~18],
		"/(protected)/strings/add": [~15],
		"/(public)/strings/[id]": [~19],
		"/(protected)/strings/[id]/update": [~14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';