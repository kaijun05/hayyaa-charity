export interface Token {
	id: string;
	end_at: Date;
	created_at: Date;
	number_of_people_donated: number;
	total_amount: number;
	fund_distributed: FundDistributed[];
}

export interface FundDistributed {
	id: string;
	token_id: string;
	purpose: string;
	percentage: number;
	amount_used: number;
}

export class TokenServer {
	public async getTokenInfo(count: number = 5): Promise<Token[]> {
		const tokens: Token[] = [];

		for (let i = 0; i < count; i++) {
			const tokenId = this.generateRandomId();
			const donated = Math.floor(Math.random() * 100) + 1;
			const totalAmount = Math.floor(Math.random() * 10000) + 1000;
			const createdAt = new Date();
			const endAt = new Date(createdAt.getTime());
			endAt.setDate(endAt.getDate() + 7);

			const token: Token = {
				id: tokenId,
				created_at: createdAt,
				end_at: endAt,
				number_of_people_donated: donated,
				total_amount: totalAmount,
				fund_distributed: this.generateFundDistributions(tokenId, totalAmount)
			};

			tokens.push(token);
		}

		return tokens;
	}

	private generateFundDistributions(tokenId: string, totalAmount: number): FundDistributed[] {
		// example purposes
		const purposes = ['Education', 'Healthcare', 'Environment', 'Animals', 'Community'];
		const distributions: FundDistributed[] = [];
		let percentageLeft = 100;

		const count = Math.floor(Math.random() * 4) + 2;

		for (let i = 0; i < count && percentageLeft > 0; i++) {
			const percentage =
				i === count - 1 ? percentageLeft : Math.floor(Math.random() * percentageLeft * 0.8) + 1;

			const purpose = purposes[Math.floor(Math.random() * purposes.length)];

			distributions.push({
				id: this.generateRandomId(),
				token_id: tokenId,
				purpose,
				percentage,
				amount_used: Math.floor((totalAmount * percentage) / 100)
			});

			percentageLeft -= percentage;
		}

		return distributions;
	}

	private generateRandomId(): string {
		return Math.random().toString(36).substring(2, 10);
	}
}
