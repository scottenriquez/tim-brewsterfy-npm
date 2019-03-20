// tslint:disable-next-line
import Sentiment = require('sentiment');

export function brewsterfy(text: string): string {
	return text + '‼️';
}

export function analyzeSentimentWithBrewsterisms(text: string): number {
	const sentiment = new Sentiment();
	const options = {
		extras: {
			ballers: 10,
			lit: 20,
			facts: 30,
			thestation: 100
		},
		language: 'en'
	};
	return sentiment.analyze(text, options).score;
}
