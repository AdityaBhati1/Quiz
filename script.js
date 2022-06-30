let correctCounter = 0;
		const questions = ["Who is the Father of our Nation ?", "Who is known as Father of Indian Constitution ?","Which is the most sensitive organ in our body?","Which of the following is most densest element on Earth ?", "What is capital of Madhya Pradesh ?"];
		const optionsA = ["Mahatma Gandhi","Dr. Jawaharlal Nehru","Ears","Indium","Jaipur"];
		const optionsB = ["Dr. Br. Ambedkar","Virat Kohli","Eyes","Thorium","Bhopal"];
		const optionsC = ["Dr. Jawaharlal Nehru","Dr. Br. Ambedkar","Nose","Osmium","Udaipur"];
		const optionsD = ["Virat Kohli","Mahatma Gandhi","Skin","Gold","Raipur"];

		const correctOpt = ["Mahatma Gandhi","Dr. Br. Ambedkar","Eyes","Osmium","Bhopal"]
		let funcArr = [
    function() {
        document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			setTimeout(function q1c(){
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').innerHTML = 'Q. 1';
			document.getElementById('options').style.opacity = "1";
			document.getElementById('options').style.marginTop = "0";
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('ques').innerHTML = questions[0];
			document.getElementById('start').style.marginLeft = "298px";
			document.getElementById('start').style.marginTop = "80px";
			document.getElementById('start').style.opacity = "1";
			document.getElementById('start').innerHTML = "Check";
			document.getElementById('option1').innerHTML = optionsA[0];
			document.getElementById('option2').innerHTML = optionsB[0];
			document.getElementById('option3').innerHTML = optionsC[0];
			document.getElementById('option4').innerHTML = optionsD[0];
			},700);
    },
    
    function() {

if (document.getElementById('opt1').checked == false &&
					document.getElementById('opt2').checked == false &&
					document.getElementById('opt3').checked == false &&
					document.getElementById('opt4').checked == false ) {
					alert("Select A Option First")
				}
		else{
    	if (document.getElementById('option1').innerHTML === correctOpt[0]) {

					document.getElementById('optDiv1').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv1').style.background = "#f47174";
				}
				if (document.getElementById('option2').innerHTML === correctOpt[0]) {
					document.getElementById('optDiv2').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv2').style.background = "#f47174";
				}
				if (document.getElementById('option3').innerHTML === correctOpt[0]) {
					document.getElementById('optDiv3').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv3').style.background = "#f47174";
				}
				if (document.getElementById('option4').innerHTML === correctOpt[0]) {
					document.getElementById('optDiv4').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv4').style.background = "#f47174";
				}
				setTimeout(function(){
				document.getElementById('start').innerHTML = "Next";	
				},500);
				if (document.getElementById('option1').innerHTML === correctOpt[0] &&
					document.getElementById('opt1').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option2').innerHTML === correctOpt[0] &&
					document.getElementById('opt2').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option3').innerHTML === correctOpt[0] &&
					document.getElementById('opt3').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option4').innerHTML === correctOpt[0] &&
					document.getElementById('opt4').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				} 
			}
    },
    
    function() {
       document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('options').style.marginLeft = "-380px";
			document.getElementById('options').style.opacity = "0";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.opacity = "0";
			document.getElementById('opt1').checked = false;
			document.getElementById('opt2').checked = false;
			document.getElementById('opt3').checked = false;
			document.getElementById('opt4').checked = false;
			document.getElementById('optDiv1').style.background = "transparent";
			document.getElementById('optDiv2').style.background = "transparent";
			document.getElementById('optDiv3').style.background = "transparent";
			document.getElementById('optDiv4').style.background = "transparent";
			setTimeout(function q2c(){
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').innerHTML = 'Q. 2';
			document.getElementById('options').style.opacity = "1";
			document.getElementById('options').style.marginTop = "0";
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('options').style.marginLeft = "0";
			document.getElementById('start').style.marginLeft = "298px";
			document.getElementById('start').style.marginTop = "80px";
			document.getElementById('start').style.opacity = "1";
			document.getElementById('start').innerHTML = "Check";
			document.getElementById('ques').innerHTML = questions[1];
			document.getElementById('option1').innerHTML = optionsA[1];
			document.getElementById('option2').innerHTML = optionsB[1];
			document.getElementById('option3').innerHTML = optionsC[1];
			document.getElementById('option4').innerHTML = optionsD[1];
			},700);
    },
    
    function() {
        if (document.getElementById('opt1').checked == false &&
					document.getElementById('opt2').checked == false &&
					document.getElementById('opt3').checked == false &&
					document.getElementById('opt4').checked == false ) {
					alert("Select A Option First")
				}
		else{
    	if (document.getElementById('option1').innerHTML === correctOpt[1]) {

					document.getElementById('optDiv1').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv1').style.background = "#f47174";
				}
				if (document.getElementById('option2').innerHTML === correctOpt[1]) {
					document.getElementById('optDiv2').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv2').style.background = "#f47174";
				}
				if (document.getElementById('option3').innerHTML === correctOpt[1]) {
					document.getElementById('optDiv3').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv3').style.background = "#f47174";
				}
				if (document.getElementById('option4').innerHTML === correctOpt[1]) {
					document.getElementById('optDiv4').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv4').style.background = "#f47174";
				}
				setTimeout(function(){
				document.getElementById('start').innerHTML = "Next";	
				},500);
				if (document.getElementById('option1').innerHTML === correctOpt[1] &&
					document.getElementById('opt1').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option2').innerHTML === correctOpt[1] &&
					document.getElementById('opt2').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option3').innerHTML === correctOpt[1] &&
					document.getElementById('opt3').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option4').innerHTML === correctOpt[1] &&
					document.getElementById('opt4').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				} 
			}
    },
    
    function() {
        document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('options').style.marginLeft = "-380px";
			document.getElementById('options').style.opacity = "0";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('quesNo').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			document.getElementById('opt1').checked = false;
			document.getElementById('opt2').checked = false;
			document.getElementById('opt3').checked = false;
			document.getElementById('opt4').checked = false;
			document.getElementById('optDiv1').style.background = "transparent";
			document.getElementById('optDiv2').style.background = "transparent";
			document.getElementById('optDiv3').style.background = "transparent";
			document.getElementById('optDiv4').style.background = "transparent";
			setTimeout(function q2c(){
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').innerHTML = 'Q. 3';
			document.getElementById('options').style.opacity = "1";
			document.getElementById('options').style.marginTop = "0";
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('options').style.marginLeft = "0";
			document.getElementById('start').style.marginLeft = "298px";
			document.getElementById('start').style.marginTop = "80px";
			document.getElementById('start').style.opacity = "1";
			document.getElementById('start').innerHTML = "Check";
			document.getElementById('ques').innerHTML = questions[2];
			document.getElementById('option1').innerHTML = optionsA[2];
			document.getElementById('option2').innerHTML = optionsB[2];
			document.getElementById('option3').innerHTML = optionsC[2];
			document.getElementById('option4').innerHTML = optionsD[2];
			},700);
    },
    function(){
    	if (document.getElementById('opt1').checked == false &&
					document.getElementById('opt2').checked == false &&
					document.getElementById('opt3').checked == false &&
					document.getElementById('opt4').checked == false ) {
					alert("Select A Option First")
				}
		else{
    	if (document.getElementById('option1').innerHTML === correctOpt[2]) {

					document.getElementById('optDiv1').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv1').style.background = "#f47174";
				}
				if (document.getElementById('option2').innerHTML === correctOpt[2]) {
					document.getElementById('optDiv2').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv2').style.background = "#f47174";
				}
				if (document.getElementById('option3').innerHTML === correctOpt[2]) {
					document.getElementById('optDiv3').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv3').style.background = "#f47174";
				}
				if (document.getElementById('option4').innerHTML === correctOpt[2]) {
					document.getElementById('optDiv4').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv4').style.background = "#f47174";
				}
				setTimeout(function(){
				document.getElementById('start').innerHTML = "Next";	
				},500);
				if (document.getElementById('option1').innerHTML === correctOpt[2] &&
					document.getElementById('opt1').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option2').innerHTML === correctOpt[2] &&
					document.getElementById('opt2').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option3').innerHTML === correctOpt[2] &&
					document.getElementById('opt3').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option4').innerHTML === correctOpt[2] &&
					document.getElementById('opt4').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				} 
			}
    },
    function(){
    	document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('options').style.marginLeft = "-380px";
			document.getElementById('options').style.opacity = "0";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('quesNo').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			document.getElementById('opt1').checked = false;
			document.getElementById('opt2').checked = false;
			document.getElementById('opt3').checked = false;
			document.getElementById('opt4').checked = false;
			document.getElementById('optDiv1').style.background = "transparent";
			document.getElementById('optDiv2').style.background = "transparent";
			document.getElementById('optDiv3').style.background = "transparent";
			document.getElementById('optDiv4').style.background = "transparent";
			setTimeout(function q2c(){
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').innerHTML = 'Q. 4';
			document.getElementById('options').style.opacity = "1";
			document.getElementById('options').style.marginTop = "0";
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('options').style.marginLeft = "0";
			document.getElementById('start').style.marginLeft = "298px";
			document.getElementById('start').style.marginTop = "80px";
			document.getElementById('start').style.opacity = "1";
			document.getElementById('start').innerHTML = "Check";
			document.getElementById('ques').innerHTML = questions[3];
			document.getElementById('option1').innerHTML = optionsA[3];
			document.getElementById('option2').innerHTML = optionsB[3];
			document.getElementById('option3').innerHTML = optionsC[3];
			document.getElementById('option4').innerHTML = optionsD[3];
			},700);
    },
    function(){
    	if (document.getElementById('opt1').checked == false &&
					document.getElementById('opt2').checked == false &&
					document.getElementById('opt3').checked == false &&
					document.getElementById('opt4').checked == false ) {
					alert("Select A Option First")
				}
		else{
    	if (document.getElementById('option1').innerHTML === correctOpt[3]) {

					document.getElementById('optDiv1').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv1').style.background = "#f47174";
				}
				if (document.getElementById('option2').innerHTML === correctOpt[3]) {
					document.getElementById('optDiv2').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv2').style.background = "#f47174";
				}
				if (document.getElementById('option3').innerHTML === correctOpt[3]) {
					document.getElementById('optDiv3').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv3').style.background = "#f47174";
				}
				if (document.getElementById('option4').innerHTML === correctOpt[3]) {
					document.getElementById('optDiv4').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv4').style.background = "#f47174";
				}
				setTimeout(function(){
				document.getElementById('start').innerHTML = "Next";	
				},500);
				if (document.getElementById('option1').innerHTML === correctOpt[3] &&
					document.getElementById('opt1').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option2').innerHTML === correctOpt[3] &&
					document.getElementById('opt2').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option3').innerHTML === correctOpt[3] &&
					document.getElementById('opt3').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option4').innerHTML === correctOpt[3] &&
					document.getElementById('opt4').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				} 
			}
    },
    function(){
    	document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('options').style.marginLeft = "-380px";
			document.getElementById('options').style.opacity = "0";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('quesNo').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			document.getElementById('opt1').checked = false;
			document.getElementById('opt2').checked = false;
			document.getElementById('opt3').checked = false;
			document.getElementById('opt4').checked = false;
			document.getElementById('optDiv1').style.background = "transparent";
			document.getElementById('optDiv2').style.background = "transparent";
			document.getElementById('optDiv3').style.background = "transparent";
			document.getElementById('optDiv4').style.background = "transparent";
			setTimeout(function q2c(){
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').innerHTML = 'Q. 5';
			document.getElementById('options').style.opacity = "1";
			document.getElementById('options').style.marginTop = "0";
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('quesNo').style.opacity = "1";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('quesNo').style.marginLeft = "0";
			document.getElementById('options').style.marginLeft = "0";
			document.getElementById('start').style.marginLeft = "298px";
			document.getElementById('start').style.marginTop = "80px";
			document.getElementById('start').style.opacity = "1";
			document.getElementById('start').innerHTML = "Check";
			document.getElementById('ques').innerHTML = questions[4];
			document.getElementById('option1').innerHTML = optionsA[4];
			document.getElementById('option2').innerHTML = optionsB[4];
			document.getElementById('option3').innerHTML = optionsC[4];
			document.getElementById('option4').innerHTML = optionsD[4];
			},700);
    },
    function(){
    	if (document.getElementById('opt1').checked == false &&
					document.getElementById('opt2').checked == false &&
					document.getElementById('opt3').checked == false &&
					document.getElementById('opt4').checked == false ) {
					alert("Select A Option First")
				}
		else{
    	if (document.getElementById('option1').innerHTML === correctOpt[4]) {

					document.getElementById('optDiv1').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv1').style.background = "#f47174";
				}
				if (document.getElementById('option2').innerHTML === correctOpt[4]) {
					document.getElementById('optDiv2').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv2').style.background = "#f47174";
				}
				if (document.getElementById('option3').innerHTML === correctOpt[4]) {
					document.getElementById('optDiv3').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv3').style.background = "#f47174";
				}
				if (document.getElementById('option4').innerHTML === correctOpt[4]) {
					document.getElementById('optDiv4').style.background = "#77dd77";
				}
				else{
					document.getElementById('optDiv4').style.background = "#f47174";
				}
				setTimeout(function(){
				document.getElementById('start').innerHTML = "See Results";	
				},500);
				if (document.getElementById('option1').innerHTML === correctOpt[4] &&
					document.getElementById('opt1').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option2').innerHTML === correctOpt[4] &&
					document.getElementById('opt2').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option3').innerHTML === correctOpt[4] &&
					document.getElementById('opt3').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				}
				else if (document.getElementById('option4').innerHTML === correctOpt[4] &&
					document.getElementById('opt4').checked == true) {
					correctCounter++;
					console.log(correctCounter)
				} 
			}
    },
    function(){
    	
    		document.getElementById('start').style.opacity = "0";
			document.getElementById('start').style.transition = "all 0.7s";
			document.getElementById('start').style.marginTop = "-270px";
			document.getElementById('ques').style.fontSize = "2em";
			document.getElementById('ques').style.margin= "10px";
			document.getElementById('ques').style.transition = "all 0.7s";
			document.getElementById('quesNo').style.transition = "all 0.7s";
			document.getElementById('options').style.transition = "all 0.7s";
			document.getElementById('options').style.marginLeft = "-380px";
			document.getElementById('options').style.opacity = "0";
			document.getElementById('ques').style.opacity = "0";
			document.getElementById('ques').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.marginLeft = "-300px";
			document.getElementById('quesNo').style.opacity = "0";
			document.getElementById('opt1').checked = false;
			document.getElementById('opt2').checked = false;
			document.getElementById('opt3').checked = false;
			document.getElementById('opt4').checked = false;
			document.getElementById('optDiv1').style.background = "transparent";
			document.getElementById('optDiv2').style.background = "transparent";
			document.getElementById('optDiv3').style.background = "transparent";
			document.getElementById('optDiv4').style.background = "transparent";
			setTimeout(function(){
			document.getElementById('ques').style.opacity = "1";
			document.getElementById('ques').style.marginLeft = "0";
			document.getElementById('ques').innerHTML = "Here Is Your Quiz Results";
			document.getElementById('ques').style.fontSize = "1.5em";
			document.getElementById('ques').style.textAlign = "center";
			document.getElementById('res').style.fontSize = "13em";

			document.getElementById('res').style.transition = "all 0.7s";
			document.getElementById('res').innerHTML = correctCounter + "/5";
			if (correctCounter <= 2) {
				document.getElementById('res').style.color = "#f47174";
			} 
			else if (correctCounter == 3){
				document.getElementById('res').style.color = "#EFB700";
			}
			else if (correctCounter >= 4){
				document.getElementById('res').style.color = "#77dd77";
			}
			},1000)
    	}
];

let i = 0;

window.onload = function() {
    document.querySelector('#start').onclick = function() {
        funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
    }
}