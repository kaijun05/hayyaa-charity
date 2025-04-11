import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	console.log(params);
	return {
		id: params.id
	};
};
