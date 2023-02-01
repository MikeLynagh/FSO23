import { useState } from 'react';

const Button = ({ HandleClick, text }) => {
	return (
		<div>
			<button onClick={HandleClick}>{text}</button>
		</div>
	);
};

const Header = ({ text }) => <h1>{text}</h1>;
const Votes = ({ votes }) => <p>has {votes} votes </p>;

const App = () => {
	const [selected, setSelected] = useState(0);
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	// select a random anecdote
	const HandleClick = () => {
		setSelected(Math.round(Math.random() * 6));
	};

	const HandlePoints = () => {
		const copy = [...votes];
		copy[selected] += 1;
		setVotes(copy);

		console.log('the new array is', copy);
	};

	// find the largest value in the array of votes
	const highestVote = Math.max(...votes);
	console.log('the higest anecdote is', highestVote);

	// return the array from anecdotes with the highest score
	const WinningAnecdote = () => {
		let answer = anecdotes[votes.indexOf(highestVote)];

		if (answer !== 0) {
			return <p>{answer}</p>;
		} else {
			return <p>No votes yet </p>;
		}
	};

	return (
		<div>
			<Header text='Anecdote of the day' />
			{anecdotes[selected]}
			<Votes votes={votes[selected]} />
			<div>
				<Button HandleClick={HandleClick} text='next anecdote' />
				<Button HandleClick={HandlePoints} text='vote' />
			</div>
			<Header text='Anecdote with most votes' />
			<WinningAnecdote />
			<Votes votes={highestVote} />
		</div>
	);
};

export default App;
