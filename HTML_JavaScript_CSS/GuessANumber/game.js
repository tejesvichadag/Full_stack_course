var num,input_text,input_num;
var finished = false;
var guesses = 0;

function do_game(){
	num = Math.floor(Math.random()*100) + 1;
	while(!finished){
		input_text = prompt("Guess the number between 1 to 100");
		input_num = parseInt(input_text);
		guesses++;
		finished = check();
	}
}

function check(){
	if(isNaN(input_num)){
		alert("please enter a number between 1 to 100");
	}
	else if(input_num<1 || input_num>100){
		alert("please enter a number between 1 to 100");
	}
	else if(input_num>num){
		alert("your guess is greater than the number I am thinking");
	}
	else if(input_num<num){
		alert("your guess is smaller than the number I am thinking");
	}
	else if(input_num==num){
		alert("you guessed the right number in " + guesses + " guesses");
		return true;
	}
	return false;
}