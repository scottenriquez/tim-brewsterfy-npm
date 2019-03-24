export class BrewsterfyResponse {
	wasTextBrewsterfied: boolean;
	originalText: string;
	originalTextSentimentScore: number;
	brewsterfiedText?: string;

	constructor(wasTextBrewsterfied: boolean, originalText: string, originalTextSentimentScore: number, brewsterfiedText?: string) {
		this.wasTextBrewsterfied = wasTextBrewsterfied;
		this.originalText = originalText;
		this.originalTextSentimentScore = originalTextSentimentScore;
		this.brewsterfiedText = brewsterfiedText;
	}

	equals(other: BrewsterfyResponse): boolean {
		return this.wasTextBrewsterfied === other.wasTextBrewsterfied
			&& this.originalText === other.originalText
			&& this.originalTextSentimentScore === other.originalTextSentimentScore
			&& this.brewsterfiedText === other.brewsterfiedText;
	}
}
