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
