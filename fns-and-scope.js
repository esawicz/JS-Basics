//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
  if (name === 'Tyler') {
  	return true;
  }
  else {
  	return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
	return prompt("Enter name")

}


  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	alert("Welcome, " + getName());
}

  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Parameters is what the function is going to expect.  Is is a placeholder.  
// Argument is what goes into the function, data that is entered into the parameter.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

// null 
// 0
// NaN 
// undefined
// false
// " "


  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
	return "Ellen";
}
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

  //Code Here

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return function() {
		return "Ellen";
	}

  //Code Here
}

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
