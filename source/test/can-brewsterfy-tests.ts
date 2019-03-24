import test, {TestContext} from 'ava';
import {canBrewsterfyBasedOnSentiment} from '../index';

test('should return true for high enough sentiment', (t: TestContext) => {
	// Arrange
	const input = 10;
	const expectedOutput = true;

	// Act
	const actualOutput = canBrewsterfyBasedOnSentiment(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should return false for a sentiment too low', (t: TestContext) => {
	// Arrange
	const input = 9;
	const expectedOutput = false;

	// Act
	const actualOutput = canBrewsterfyBasedOnSentiment(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});
