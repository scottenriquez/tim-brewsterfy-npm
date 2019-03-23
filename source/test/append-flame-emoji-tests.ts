import test, {TestContext} from 'ava';
import {appendFlameEmojis} from '../index';

test('should append flame emojis for whole number', (t: TestContext) => {
	// Arrange
	const text = 'lit';
	const sentimentScore = 300;
	const expectedOutput = 'lit🔥🔥🔥';

	// Act
	const actualOutput = appendFlameEmojis(sentimentScore, text);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should truncate litness factor and append flame emojis for number with decimal', (t: TestContext) => {
	// Arrange
	const text = 'lit';
	const sentimentScore = 364;
	const expectedOutput = 'lit🔥🔥🔥';

	// Act
	const actualOutput = appendFlameEmojis(sentimentScore, text);

	// Assert
	t.true(expectedOutput === actualOutput);
});
