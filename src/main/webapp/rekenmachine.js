var som = " ";
var displayInvoer = "";


function knop_zero(event){
	  displayInvoer += "0";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}

function knop_one(event){
	  displayInvoer += "1";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_two(event){
	  displayInvoer += "2";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_three(event){
	  displayInvoer += "3";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_four(event){
	  displayInvoer += "4";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_five(event){
	  displayInvoer += "5";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_six(event){
	  displayInvoer += "6";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_seven(event){
	  displayInvoer += "7";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_eight(event){
	  displayInvoer += "8";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_nine(event){
	  displayInvoer += "9";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_div(event){
	  displayInvoer += "/";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_prod(event){
	  displayInvoer += "*";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_min(event){
	  displayInvoer += "-";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_clear(event){
	  displayInvoer = " ";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_plus(event){
	  displayInvoer += "+";
	  document.querySelector("#display").innerHTML = displayInvoer;
	}
function knop_eq(event){
	  som =  eval(displayInvoer);
	  document.querySelector("#display").innerHTML = som;
}



document.querySelector("#btn_0").addEventListener("click",knop_zero)
document.querySelector("#btn_1").addEventListener("click",knop_one)
document.querySelector("#btn_2").addEventListener("click",knop_two)
document.querySelector("#btn_3").addEventListener("click",knop_three)
document.querySelector("#btn_4").addEventListener("click",knop_four)
document.querySelector("#btn_5").addEventListener("click",knop_five)
document.querySelector("#btn_6").addEventListener("click",knop_six)
document.querySelector("#btn_7").addEventListener("click",knop_seven)
document.querySelector("#btn_8").addEventListener("click",knop_eight)
document.querySelector("#btn_9").addEventListener("click",knop_nine)
document.querySelector("#btn_div").addEventListener("click",knop_div)
document.querySelector("#btn_prod").addEventListener("click",knop_prod)
document.querySelector("#btn_min").addEventListener("click",knop_min)
document.querySelector("#btn_clear").addEventListener("click",knop_clear)
document.querySelector("#btn_eq").addEventListener("click",knop_eq)
document.querySelector("#btn_plus").addEventListener("click",knop_plus)
