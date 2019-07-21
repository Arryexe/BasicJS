var loop = true;
while (loop) {
	// Player
	var player = prompt('Pick : rock / scissor / paper');

	// Random Generator
	var computer = Math.random();

	if (computer < 0.34) {
		computer = 'rock';
	} else if (computer >= 0.34 && computer < 0.67) {
		computer = 'paper';
	} else {
		computer = 'scissor';
	}

	// Rules
	var result = '';
	if (player == computer) {
		result = 'Draw';
	} else if (player == 'rock') {
		result = (computer == 'paper') ? 'Lose' : 'Win';
	} else if (player == 'paper') {
		result = (computer == 'rock') ? 'Win' : 'Lose';
	} else if (player == 'scissor') {
		result = (computer == 'rock') ? 'Lose' : 'Win';
	} else {
		result = 'Entered the Wrong Keyword'
	}

	// Show Results

	alert((result == 'Draw') ? "It's " + result + '... (Computer pick ' + computer + ')': 'You ' + result + ' and The Computer pick ' + computer);

	loop = confirm('Again ??');
}