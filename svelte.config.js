import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
import { resolve } from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// Refer: https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		adapter: adapter({ pages: 'public' }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		
		vite: {
			// Refer: https://github.com/firebase/firebase-js-sdk/issues/5140
			ssr: {
				 external: ['firebase']
			},

			// Refer: https://dev.to/danawoodman/how-to-add-module-import-aliases-in-sveltekit-2ck
			resolve: {
				alias: {
					$classes: resolve('./src/classes'),
					$components: resolve('./src/components'),
					$firebase: resolve('./src/firebase'),
					$interfaces: resolve('./src/interfaces'),
					$stores: resolve('./src/stores')
				}
			},

			build: {
				// vendorファイル(主にfirestoreとrealtime db)が500kbを超えてしまう...どうにかして小さくできないか...？
				chunkSizeWarningLimit: 1000,
			},
		}
	}
};

export default config
