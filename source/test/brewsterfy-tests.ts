import test, {TestContext} from 'ava';
import {brewsterfy} from '../index';

test('should add brewsterfy emojis', (t: TestContext) => {
	// Arrange
	const input = '#TheStation is lit';
	const expectedOutput = '#TheStation is lit‼️';

	// Act
	const actualOutput = brewsterfy(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});
