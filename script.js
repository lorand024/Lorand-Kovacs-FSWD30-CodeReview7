class Persons {

	constructor(name, surname, age, inRelation, imgURL) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.inRelation = inRelation;
		this.imgURL = imgURL;
	}


				// Method to class Persons
	render() {
		let msg = `
         <div class="ppl">
         		<img src = "${this.imgURL}">	
           		<p>Name: <h3>${this.name}</h3></p> 
            	<p>Surname: <h3>${this.surname}</h3></p>
            	<p>Age: <h3>${this.age}</h3></p>
            	<p>Gender: <h3>${this.constructor.name}</h3></p>
            	<p>In relationship: <h3>${this.inRelation}</h3></p>
            	<p><a href="#" class = "btn btn-primary" role= "button">Like</a>
            	<img id = "hearth" src = "img/like.png"></p>
        </div>
        `; 
        return msg; 

	}
}

// Class for female

class Female extends Persons {

	constructor(name, surname, age, inRelation, imgURL, gender) {
		super(name, surname, age, inRelation, imgURL);
		this.gender = gender;
	}

	// Overwrite the method

	reder() {
		let msg = `
         <div class="ppl">
         	<img src = "${this.imgURL}">
            <p>Name: <h3>${this.name}</h3></p> 
            <p>Surname: <h3>${this.surname}</h3></p>
            <p>Age: <h3>${this.age}</h3></p>
            <p>Gender: <h3>${this.gender}</h3></p>
            <p>In relationship: <h3>${this.inRelation}</h3></p>
            <p><a href="#" class = "btn btn-primary" role= "button">Like</a>
            <img id = "hearth" src = "img/like.png"></p>
        </div>
        `; 
        return msg; 

	
	}
}

// Class for male

 class Male extends Persons {

	constructor(name, surname, age, inRelation, imgURL, gender) {
		super(name, surname, age, inRelation, imgURL);
		this.gender = gender;
	}

	// Overwrite the method

	reder() {
		let msg = `
         <div class="ppl">
         	<img src = "${this.imgURL}">
            <p>Name: <h3>${this.name}</h3></p> 
            <p>Surname: <h3>${this.surname}</h3></p>
            <p>Age: <h3>${this.age}</h3></p>
            <p>Gender: <h3>${this.gender}</h3></p>
            <p>In relationship: <h3>${this.inRelation}</h3></p>
            <p><a href="#" class = "btn btn-primary" role= "button">Like</a>
            <img id = "hearth" src = "img/like.png"></p>
        </div>
        `; 
        return msg; 

	
	}
}

// List of people

var personCollection = [
	new Male("John", "Doe", 30, false, "img/img1.jpg", "Male"),
	new Female("Jane", "Doe", 25, false, "img/img4.jpg", "Female"),
	new Female("Angelina", "Trump", 20, true, "img/img3.jpg", "Female"),
	new Male("George", "Bush", 50, true, "img/img2.jpg", "Male"),
	new Male("John", "Doe", 30, false, "img/img1.jpg", "Male"),
	new Female("Jane", "Doe", 25, false, "img/img4.jpg", "Female"),
	new Female("Angelina", "Fitz", 20, true, "img/img3.jpg", "Female"),
	new Male("George", "Bush", 50, true, "img/img2.jpg", "Male"),	
	];

	//Function to show everyone

function showAll() {
	let bigList = document.getElementById("bigList");
	for (var i = 0; i < personCollection.length; i++) {
		bigList.innerHTML += personCollection[i].render();
	}
}

	//Function to show only Female

function showFemale() {
	let bigList = document.getElementById("bigList");
	for (var i = 0; i < personCollection.length; i++) {
		
		if (personCollection[i].constructor.name == "Female") {
			bigList.innerHTML += personCollection[i].render();
		}	
	}
}

	//Function to show only Male
		
function showMale() {
	let bigList = document.getElementById("bigList");
	for (var i = 0; i < personCollection.length; i++) {
		
		if (personCollection[i].constructor.name == "Male") {
			bigList.innerHTML += personCollection[i].render();
		}
	}
}
