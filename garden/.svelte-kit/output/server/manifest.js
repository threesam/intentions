export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.Xg0j7OKz.js",app:"_app/immutable/entry/app.Sn39tNm-.js",imports:["_app/immutable/entry/start.Xg0j7OKz.js","_app/immutable/chunks/ByoNvyUI.js","_app/immutable/chunks/BZZQuDw4.js","_app/immutable/chunks/DLPnSCDz.js","_app/immutable/chunks/wrx-CtbB.js","_app/immutable/entry/app.Sn39tNm-.js","_app/immutable/chunks/D9Z9MdNV.js","_app/immutable/chunks/DLPnSCDz.js","_app/immutable/chunks/wrx-CtbB.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BZZQuDw4.js","_app/immutable/chunks/DjjaFz6w.js","_app/immutable/chunks/C5ZoF0cF.js","_app/immutable/chunks/6yDR_Zjc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pages/[slug]",
				pattern: /^\/pages\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/studio/[...catchall]",
				pattern: /^\/studio(?:\/([^]*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
