// tslint:disable-next-line
import Sentiment = require('sentiment');

export function brewsterfy(text: string): string {
	return text + '‼️';
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

export function replaceSinglePeriodsWithExclamationMarks(text: string): string {
	// tslint:disable-next-line
	return text.replace(new RegExp('(?<!\\.)\\.(?!\\.)', 'g'), '!!');
}
