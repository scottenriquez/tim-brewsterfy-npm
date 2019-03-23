import {analyzeSentimentWithBrewsterisms} from '../index';
import test, {TestContext} from 'ava';

test('should override standard sentiment values for brewsterisms', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit TheStation';
	const expectedScore = 200;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});

test('should override standard sentiment values for brewsterisms with hashtags', (t: TestContext) => {
	// Arrange
	const input = 'ballers lit #TheStation #Facts';
	const expectedScore = 230;

	// Act
	const actualScore = analyzeSentimentWithBrewsterisms(input);

	// Assert
	t.true(expectedScore === actualScore);
});
