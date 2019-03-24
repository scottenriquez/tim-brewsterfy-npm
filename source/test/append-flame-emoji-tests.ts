import test, {TestContext} from 'ava';
import {appendFlameEmojis} from '../index';

test('should append flame emojis for whole number', (t: TestContext) => {
	// Arrange
	const text = 'lit';
	const sentimentScore = 30;
	const expectedOutput = 'lit🔥🔥🔥';

	// Act
	const actualOutput = appendFlameEmojis(sentimentScore, text);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should truncate litness factor and append flame emojis for number with decimal', (t: TestContext) => {
	// Arrange
	const text = 'lit';
	const sentimentScore = 39;
	const expectedOutput = 'lit🔥🔥🔥';

	// Act
	const actualOutput = appendFlameEmojis(sentimentScore, text);

	// Assert
	t.true(expectedOutput === actualOutput);
});
