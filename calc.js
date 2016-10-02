function Calc(){
	expression = "";
    answer = "";
    input = "";
	this.opClicked = true;
	this.pointClicked = false;
	this.first = true;
	this.equalsClicked = false;
	this.getExpression = function(){
		if (expression.length == 0)
			return 0;
		return expression;
	}
	evaluate = function(){
		answer = eval(expression);
        expression = "";
		if( answer.length > 20 )
			answer = 0;
		return answer;
	}
	this.build = function(char){
		
		input += char;
		if(input.length > 10 )
			input = "";
		
		
	}
	this.clearEntry = function(){
		input = "";
	}
	this.allClear = function(){
		input = "";
		expression = "";
		answer = "";
	}
	this.getAnswer = function(){
		evaluate();
		input  = '';
		expression = answer;
		return answer;
	}
	this.displayInput = function(){
	if( input.length == 0 )
			return 0;
		return input;
	}
	this.pushExpress = function(){
		expression += input;
		input = '';
	}
	this.percent = function(){
		input = eval(input+'/100');

	}

}// end Calc constructor

	var cal = new Calc();
	
	document.getElementById("display").innerHTML = cal.getExpression();

	
	


	function myFunction (event) {

    var x = event.target.id;

    switch (x) {
        case 'one':
			if(cal.equalsClicked){

				cal.allClear();
			}
            cal.build('1');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.first = false;
			cal.equalsClicked = false;
            break;
        case 'two':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('2');
		   document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.first = false;
			cal.equalsClicked = false;
            break;
        case 'three':
          if(cal.equalsClicked){

				cal.allClear();
			}
			cal.build('3');
		  document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.first = false;
			cal.equalsClicked = false;
            break;
		  case 'four':
			if(cal.equalsClicked){

				cal.allClear();
			}
            cal.build('4');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.first = false;
			cal.equalsClicked = false;
            break;
        case 'five':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('5');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
        case 'six':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('6');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
		  case 'seven':
			if(cal.equalsClicked){

				cal.allClear();
			}
            cal.build('7');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
        case 'eight':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('8');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
        case 'nine':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('9');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
		case 'zero':
			if(cal.equalsClicked){

				cal.allClear();
			}
           cal.build('0');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.equalsClicked = false;
            break;
		case 'point': if( !cal.pointClicked ){
           cal.build('.');
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = false;
			cal.pointClicked = true; 
			cal.equalsClicked = false;}
            break;
		case 'subtract':
			if( !cal.opClicked ){
            cal.build('-');
			cal.pushExpress();
			document.getElementById("display").innerHTML =
			'-';
			cal.opClicked = true;
			cal.first = true;
			cal.pointClicked = false;
			}
            break;
        case 'add':
			if( !cal.opClicked ){
           cal.build('+');
			cal.pushExpress();
			document.getElementById("display").innerHTML =
			'+';
			cal.opClicked = true;
			cal.first = true;
			cal.pointClicked = false;
			cal.equalsClicked = false;}
            break;
        case 'multiply':if( !cal.opClicked ){
           cal.build('*');
			cal.pushExpress();
			document.getElementById("display").innerHTML =
			'X';
			cal.opClicked = true;
			cal.first = true;
			cal.pointClicked = false;
			cal.equalsClicked = false;}
            break;
		case 'divide':if( !cal.opClicked ){
           cal.build('/');
			cal.pushExpress();
			document.getElementById("display").innerHTML =
			'&divide';
			cal.opClicked = true;
			cal.first = true;
			cal.pointClicked = false;
			cal.equalsClicked = false;}
            break;
		case 'equals':
			if( !cal.equalsClicked){
            cal.pushExpress();
			document.getElementById("display").innerHTML = cal.getAnswer();
			cal.opClicked = false;
			cal.equalsClicked = true;
			cal.pointClicked = false;}
            break;
		case 'clearEntry':
			cal.clearEntry();
			document.getElementById("display").innerHTML =
			cal.displayInput();
			break;
		case 'allClear':
			cal.allClear();
			document.getElementById("display").innerHTML =
			cal.displayInput();
			cal.opClicked = true;

			//want to do something like this but need to think it through
			cal.pointClicked = false;
			cal.first = true;
			cal.equalsClicked = false;
			
			break;
		case 'percent':
			cal.percent();
			document.getElementById("display").innerHTML =
			cal.displayInput();
        default:
            return false;
    }
}

var parent = document.getElementById('bod');
parent.addEventListener('click', myFunction);
var elementStyle = document.getElementById("calculator").style;
var width = document.getElementById("calculator").style.width;
elementStyle.position = "relative";
elementStyle.top = (window.innerHeight / 2 - 200)+"px";
elementStyle.left = (window.innerWidth / 2 - 200) +"px";




	

