/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		const pathParts = url.pathname.split('/').slice(1);

		if (pathParts.length === 4) {
			const [tileset, zoom, x, y] = pathParts;
			const origin = request.headers.get('host');
			const sourceUrl = true
				? `https://ps738.user.srcf.net/slope/${tileset}/${zoom}/${x}/${y}.webp`
				: (parseInt(x) + parseInt(y)) % 2 === 0
					? `https://ps738.user.srcf.net/slope/${tileset}/${zoom}/${x}/${y}.webp`
					: 'https://i.imgur.com/O3pTlRQ.png';

			const resp = await fetch(sourceUrl, {
				method: request.method,
			});

			return new Response(resp.body, {
				status: resp.status,
			});
		}
		return new Response('Visit https://github.com/zabop/slopes4osm.');
	},
} satisfies ExportedHandler<Env>;
