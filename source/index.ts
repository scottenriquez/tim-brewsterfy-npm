// tslint:disable-next-line
import Sentiment = require('sentiment');
import {BrewsterfyResponse} from './brewsterfy-response';

export function brewsterfy(text: string): BrewsterfyResponse {
	const sentimentScore = analyzeSentimentWithBrewsterisms(text);
	const canBrewsterfy = canBrewsterfyBasedOnSentiment(sentimentScore);
	return new BrewsterfyResponse(canBrewsterfy, text, sentimentScore, undefined);
}

export function analyzeSentimentWithBrewsterisms(text: string): number {
	const sentiment = new Sentiment();
	const options = {
		extras: {
			happening: 20,
			facts: 30,
			lit: 50,
			ballers: 50,
			ballerseverywhere: 60,
			championships: 70,
			thestation: 100
		},
		language: 'en'
	};
	return sentiment.analyze(text, options).score;
}

export function canBrewsterfyBasedOnSentiment(sentimentScore: number): boolean {
	return sentimentScore > 20;
}

export function appendFlameEmojis(sentimentScore: number, text: string): string {
	const litnessFactor = sentimentScore / 100;
	return text + '🔥'.repeat(litnessFactor);
}

export function replaceSinglePeriodsWithExclamationMarks(text: string): string {
	// tslint:disable-next-line
	return text.replace(new RegExp('(?<!\\.)\\.(?!\\.)', 'g'), '!!');
}
