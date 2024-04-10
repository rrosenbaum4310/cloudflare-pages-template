				import worker, * as OTHER_EXPORTS from "/Users/ryanrosenbaum/Code/cloudflare-pages-template/.wrangler/tmp/pages-jywC38/functionsWorker-0.9384178370063954.mjs";
				import * as __MIDDLEWARE_0__ from "/opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/ryanrosenbaum/Code/cloudflare-pages-template/.wrangler/tmp/pages-jywC38/functionsWorker-0.9384178370063954.mjs";
				export default worker;