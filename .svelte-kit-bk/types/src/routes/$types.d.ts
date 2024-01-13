import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = EnsureDefined<LayoutServerData>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/(auth)/login" | "/(auth)/signup" | "/(protected)/(user)/activity" | "/(protected)/(user)/profile" | "/(protected)/brands/add" | "/(protected)/rackets/[id]/update" | "/(protected)/rackets/add" | "/(protected)/reviews/rackets/add/[racket_id]" | "/(protected)/reviews/rackets/update/[racket_id]" | "/(protected)/reviews/strings/add/[id]" | "/(protected)/reviews/strings/update/[string_id]" | "/(protected)/strings/[id]/update" | "/(protected)/strings/add" | "/(public)/rackets" | "/(public)/rackets/[id]" | "/(public)/strings" | "/(public)/strings/[id]" | null
type LayoutParams = RouteParams & { id?: string; racket_id?: string; string_id?: string }
type LayoutServerParentData = EnsureDefined<{}>;
type LayoutParentData = EnsureDefined<{}>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
type ExcludeActionFailure<T> = T extends Kit.ActionFailure<any> ? never : T extends void ? never : T;
type ActionsSuccess<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: ExcludeActionFailure<Awaited<ReturnType<T[Key]>>>; }[keyof T];
type ExtractActionFailure<T> = T extends Kit.ActionFailure<infer X>	? X extends void ? never : X : never;
type ActionsFailure<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: Exclude<ExtractActionFailure<Awaited<ReturnType<T[Key]>>>, void>; }[keyof T];
type ActionsExport = typeof import('./proxy+page.server.js').actions
export type SubmitFunction = Kit.SubmitFunction<Expand<ActionsSuccess<ActionsExport>>, Expand<ActionsFailure<ActionsExport>>>
export type ActionData = Expand<Kit.AwaitedActions<ActionsExport>> | null;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type LayoutServerLoad<OutputData extends OutputDataShape<LayoutServerParentData> = OutputDataShape<LayoutServerParentData>> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>>>>;
export type LayoutData = Expand<Omit<LayoutParentData, keyof LayoutServerData> & EnsureDefined<LayoutServerData>>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;