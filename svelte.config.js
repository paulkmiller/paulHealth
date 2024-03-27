import adapter from "svelte-adapter-appengine";

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
  },
	handleHttpError: (error, request) => {
		console.log('handleHttpError called:', error, request);
		if (error instanceof HttpError && error.status === 405) {
			return new Response(null, { status: 200 });
		}
		return new Response(error.message, { status: error.status });
	}
}

export default config
