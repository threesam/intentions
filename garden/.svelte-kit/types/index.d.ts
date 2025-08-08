type DynamicRoutes = {
	"/pages/[slug]": { slug: string };
	"/studio/[...catchall]": { catchall: string }
};

type Layouts = {
	"/": { slug?: string; catchall?: string };
	"/pages": { slug?: string };
	"/pages/[slug]": { slug: string };
	"/posts": undefined;
	"/projects": undefined;
	"/studio": { catchall?: string };
	"/studio/[...catchall]": { catchall: string }
};

export type RouteId = "/" | "/pages" | "/pages/[slug]" | "/posts" | "/projects" | "/studio" | "/studio/[...catchall]";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/pages" | `/pages/${string}` & {} | "/posts" | "/projects" | "/studio" | `/studio/${string}` & {};

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = never;