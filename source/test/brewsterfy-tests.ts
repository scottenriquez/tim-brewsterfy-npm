import {BrewsterfyResponse} from '../brewsterfy-response';
import test, {TestContext} from 'ava';
import {brewsterfy} from '../index';

test('should not brewsterfy with low sentiment', (t: TestContext) => {
	// Arrange
	const input = 'this is boring';
	const expectedOutput = new BrewsterfyResponse(false, 'this is boring', -3, undefined);

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput.equals(actualOutput));
});

test('should brewsterfy for acceptable sentiment', (t: TestContext) => {
	// Arrange
	const input = '#TheStation... is lit.';
	const expectedOutput = new BrewsterfyResponse(true, '#TheStation... is lit.', 15, '#TheStation... is lit!!🔥');

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput.equals(actualOutput));
});

test('should brewsterfy for acceptable sentiment without brewsterisms', (t: TestContext) => {
	// Arrange
	const input = 'Today was awesome. Best day of my life...I love everything.';
	const expectedOutput = new BrewsterfyResponse(true, 'Today was awesome. Best day of my life...I love everything.', 10, 'Today was awesome!! Best day of my life...I love everything!!🔥');

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput.equals(actualOutput));
});
