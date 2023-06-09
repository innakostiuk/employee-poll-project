export function formatDate(timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatPoll(poll, author) {
    const { optionOne, optionTwo } = poll;
    const { avatarURL } = author;

    return {
        optionOneText: optionOne.text,
        optionTwoText: optionTwo.text,
        optionOneVotes: optionOne.votes,
        optionTwoVotes: optionTwo.votes,
        avatar: avatarURL,
    }
}
