import {analyzeSentimentWithBrewsterisms} from '../index';
import test, {TestContext} from 'ava';

test('brewsterisms override sentiment', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit TheStation';
	const expectedScore = 200;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});

test('brewsterisms override sentiment with additional hashtags', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit #TheStation #Facts';
	const expectedScore = 230;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});
