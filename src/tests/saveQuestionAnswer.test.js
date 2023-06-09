import { _saveQuestionAnswer } from '../utils/_DATA';

describe('_saveQuestionAnswer', () => {
	// Unit Test No.3
	it('returns true when when correctly formatted data is passed to the function', async () => {
		const mockQuestionAnswer = {
			authedUser: 'sarahedo',
			qid: 'vthrdm985a262al8qx3do',
			answer: 'optionOne'
		};
		const result = await _saveQuestionAnswer(mockQuestionAnswer);
		expect(result).toEqual(true);
	});

	// Unit Test No.4
	it('will return an error if incorrect data is passed to the function', async () => {
		const incorrectQuestionAnswer = {
			authedUser: 'sarahedo',
			qid: 'vthrdm985a262al8qx3do'
		};
		await expect(_saveQuestionAnswer(incorrectQuestionAnswer)).rejects.toEqual(
			'Please provide authedUser, qid, and answer'
		);
	});
});
