
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const GOOGLE_API_KEY: string;
	export const VSCODE_CLI: string;
	export const STARSHIP_SHELL: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const TERM_PROGRAM: string;
	export const FNM_LOGLEVEL: string;
	export const TERM: string;
	export const SHELL: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const TMPDIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const PNPM_HOME: string;
	export const FNM_COREPACK_ENABLED: string;
	export const USER: string;
	export const fzf_directory_opts: string;
	export const OPENAI_API_KEY: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PYENV_VIRTUALENV_INIT: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const TMUX: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const FNM_ARCH: string;
	export const PATH: string;
	export const LaunchInstanceID: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const EDITOR: string;
	export const LANG: string;
	export const WEZTERM_PANE: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const TMUX_PANE: string;
	export const FNM_MULTISHELL_PATH: string;
	export const XPC_SERVICE_NAME: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const SHLVL: string;
	export const PYENV_SHELL: string;
	export const HOME: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const tmux_version: string;
	export const VSCODE_NLS_CONFIG: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const FNM_DIR: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LOGNAME: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const VSCODE_PID: string;
	export const FNM_RESOLVE_ENGINES: string;
	export const version_pat: string;
	export const WEZTERM_EXECUTABLE: string;
	export const BAT_THEME: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const is_vim: string;
	export const VSCODE_CWD: string;
	export const SECURITYSESSIONID: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const NODE_EXTRA_CA_CERTS: string;
	export const COLORTERM: string;
	export const TEST: string;
	export const VITEST: string;
	export const NODE_ENV: string;
	export const PROD: string;
	export const DEV: string;
	export const BASE_URL: string;
	export const MODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		GOOGLE_API_KEY: string;
		VSCODE_CLI: string;
		STARSHIP_SHELL: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		TERM_PROGRAM: string;
		FNM_LOGLEVEL: string;
		TERM: string;
		SHELL: string;
		FNM_NODE_DIST_MIRROR: string;
		TMPDIR: string;
		TERM_PROGRAM_VERSION: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		PNPM_HOME: string;
		FNM_COREPACK_ENABLED: string;
		USER: string;
		fzf_directory_opts: string;
		OPENAI_API_KEY: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PYENV_VIRTUALENV_INIT: string;
		ELECTRON_RUN_AS_NODE: string;
		VSCODE_AMD_ENTRYPOINT: string;
		TMUX: string;
		WEZTERM_EXECUTABLE_DIR: string;
		FNM_VERSION_FILE_STRATEGY: string;
		FNM_ARCH: string;
		PATH: string;
		LaunchInstanceID: string;
		__CFBundleIdentifier: string;
		PWD: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		EDITOR: string;
		LANG: string;
		WEZTERM_PANE: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		TMUX_PANE: string;
		FNM_MULTISHELL_PATH: string;
		XPC_SERVICE_NAME: string;
		WEZTERM_UNIX_SOCKET: string;
		SHLVL: string;
		PYENV_SHELL: string;
		HOME: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		tmux_version: string;
		VSCODE_NLS_CONFIG: string;
		WEZTERM_CONFIG_DIR: string;
		FNM_DIR: string;
		STARSHIP_SESSION_KEY: string;
		LOGNAME: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_CODE_CACHE_PATH: string;
		FZF_CTRL_T_COMMAND: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		FZF_DEFAULT_COMMAND: string;
		VSCODE_PID: string;
		FNM_RESOLVE_ENGINES: string;
		version_pat: string;
		WEZTERM_EXECUTABLE: string;
		BAT_THEME: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		is_vim: string;
		VSCODE_CWD: string;
		SECURITYSESSIONID: string;
		WEZTERM_CONFIG_FILE: string;
		NODE_EXTRA_CA_CERTS: string;
		COLORTERM: string;
		TEST: string;
		VITEST: string;
		NODE_ENV: string;
		PROD: string;
		DEV: string;
		BASE_URL: string;
		MODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
