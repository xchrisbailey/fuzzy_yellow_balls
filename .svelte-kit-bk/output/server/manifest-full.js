export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","tennis_ball.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.wEArW0SD.js","app":"_app/immutable/entry/app.-aurgfSL.js","imports":["_app/immutable/entry/start.wEArW0SD.js","_app/immutable/chunks/scheduler.t4ki4vww.js","_app/immutable/chunks/singletons.88_YLMnZ.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/stringify.zTK2Chiw.js","_app/immutable/entry/app.-aurgfSL.js","_app/immutable/chunks/scheduler.t4ki4vww.js","_app/immutable/chunks/index.Hesyyt9I.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(protected)/(user)/activity",
				pattern: /^\/activity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/youtube/[type]/[brand]/[string]",
				pattern: /^\/api\/youtube\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"brand","optional":false,"rest":false,"chained":false},{"name":"string","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/youtube/_type_/_brand_/_string_/_server.ts.js'))
			},
			{
				id: "/(protected)/brands/add",
				pattern: /^\/brands\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(protected)/(user)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(public)/rackets",
				pattern: /^\/rackets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(protected)/rackets/add",
				pattern: /^\/rackets\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(public)/rackets/[id]",
				pattern: /^\/rackets\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(protected)/rackets/[id]/update",
				pattern: /^\/rackets\/([^/]+?)\/update\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(protected)/reviews/rackets/add/[racket_id]",
				pattern: /^\/reviews\/rackets\/add\/([^/]+?)\/?$/,
				params: [{"name":"racket_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(protected)/reviews/rackets/update/[racket_id]",
				pattern: /^\/reviews\/rackets\/update\/([^/]+?)\/?$/,
				params: [{"name":"racket_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(protected)/reviews/strings/add/[id]",
				pattern: /^\/reviews\/strings\/add\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(protected)/reviews/strings/update/[string_id]",
				pattern: /^\/reviews\/strings\/update\/([^/]+?)\/?$/,
				params: [{"name":"string_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(public)/strings",
				pattern: /^\/strings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(protected)/strings/add",
				pattern: /^\/strings\/add\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(public)/strings/[id]",
				pattern: /^\/strings\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(protected)/strings/[id]/update",
				pattern: /^\/strings\/([^/]+?)\/update\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
