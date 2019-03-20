import test, {TestContext} from 'ava';
import {brewsterfy, analyzeSentimentWithBrewsterisms} from '../index';

test('brewsterfy adds emojis', (t: TestContext) => {
	// Arrange
	const input = '#TheStation is lit';
	const expectedOutput = '#TheStation is lit‼️';

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('brewsterisms override sentiment', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit TheStation';
	const expectedScore = 130;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});

test('brewsterisms override sentiment with additional hashtags', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit #TheStation #Facts';
	const expectedScore = 160;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});
