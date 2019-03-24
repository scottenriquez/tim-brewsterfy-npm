// tslint:disable-next-line
import Sentiment = require('sentiment');
import {BrewsterfyResponse} from './brewsterfy-response';

export function brewsterfy(text: string): BrewsterfyResponse {
	const sentimentScore = analyzeSentimentWithBrewsterisms(text);
	const canBrewsterfy = canBrewsterfyBasedOnSentiment(sentimentScore);
	let brewsterfiedText;
	if (canBrewsterfy) {
		brewsterfiedText = appendFlameEmojis(sentimentScore, text);
		brewsterfiedText = replaceSinglePeriodsWithExclamationMarks(brewsterfiedText);
	}
	return new BrewsterfyResponse(canBrewsterfy, text, sentimentScore, brewsterfiedText);
}

export function analyzeSentimentWithBrewsterisms(text: string): number {
	const sentiment = new Sentiment();
	const options = {
		extras: {
			happening: 2,
			facts: 3,
			championships: 3,
			lit: 5,
			ballers: 5,
			ballerseverywhere: 5,
			thestation: 10
		},
		language: 'en'
	};
	return sentiment.analyze(text, options).score;
}

export function canBrewsterfyBasedOnSentiment(sentimentScore: number): boolean {
	return sentimentScore >= 10;
}

export function appendFlameEmojis(sentimentScore: number, text: string): string {
	const litnessFactor = sentimentScore / 10;
	return text + '🔥'.repeat(litnessFactor);
}

export function replaceSinglePeriodsWithExclamationMarks(text: string): string {
	// tslint:disable-next-line
	return text.replace(new RegExp('(?<!\\.)\\.(?!\\.)', 'g'), '!!');
}
