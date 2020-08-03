function questionOne() {
	let x = document.getElementById("answerOne").value;
	console.log(x);
	if (x == 144) {
		var audio = new Audio("http://soundbible.com/grab.php?id=1964&type=mp3");
		audio.play();
		alert("You are correct!");
	} else {
		alert("You Are WRONG");
		
}
