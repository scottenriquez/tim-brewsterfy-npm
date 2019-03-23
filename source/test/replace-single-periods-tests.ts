import test, {TestContext} from 'ava';
import {replaceSinglePeriodsWithExclamationMarks} from '../index';

test('single dots are replaced with two exclamation marks', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence.';
	const expectedOutput = 'A normal boring sentence!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('ellipses are ignored', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence... But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence... But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('double periods are ignored', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence.. But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence.. But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});

test('all single periods are replaced', (t: TestContext) => {
	// Arrange
	const input = 'A normal boring sentence. But wait there\'s more.';
	const expectedOutput = 'A normal boring sentence!! But wait there\'s more!!';

	// Act
	const actualOutput = replaceSinglePeriodsWithExclamationMarks(input);

	// Assert
	t.true(expectedOutput === actualOutput);
});
