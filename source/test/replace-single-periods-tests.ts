import test, {TestContext} from 'ava';
import {replaceSinglePeriodsWithExclamationMarks} from '../index';

test('should replace a single dot with exclamation marks', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence.';
	const expectedOutput = 'A normal boring sentence!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should ignore ellipses', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence... But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence... But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should ignore double periods', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence.. But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence.. But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('should replace all single periods in the text string', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence. But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence!! But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});
