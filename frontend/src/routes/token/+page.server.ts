import type { PageServerLoad } from './$types.js';
import { TokenServer } from './token.interface.js';

export const load: PageServerLoad = async () => {
	const tokenDB = new TokenServer();
	const tokens = await tokenDB.getTokenInfo(10);
	return {
		tokens: JSON.parse(JSON.stringify(tokens))
	};
};
