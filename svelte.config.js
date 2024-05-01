
// Note: Old GCP config
//
// import adapter from "svelte-adapter-appengine";

// /** @type {import('@sveltejs/kit').Config} */

// const config = {
//   kit: {
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: undefined,
// 			precompress: false,
// 			strict: true
// 		})
//   },
// 	handleHttpError: (error, request) => {
// 		console.log('handleHttpError called:', error, request);
// 		if (error instanceof HttpError && error.status === 405) {
// 			return new Response(null, { status: 200 });
// 		}
// 		return new Response(error.message, { status: error.status });
// 	}
// }

// export default config

// Github Pages Config
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    })
  }
};

export default config;
