import type { PageServerLoad } from './$types.js';
import { TokenServer } from '../../lib/interfaces/token.interface.js';

export const load: PageServerLoad = async () => {
	const tokenDB = new TokenServer();
	const tokens = await tokenDB.getTokenInfo(300);
	return {
		tokens: JSON.parse(JSON.stringify(tokens))
	};
};
