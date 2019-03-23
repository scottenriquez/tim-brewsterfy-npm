import test, {TestContext} from 'ava';
import {brewsterfy} from '../index';

test('brewsterfy adds emojis', (t: TestContext) => {
	// Arrange
	const input = '#TheStation is lit';
	const expectedOutput = '#TheStation is lit‼️';

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});
