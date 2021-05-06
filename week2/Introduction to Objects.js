//Basic Requirements

//1

{
	firstName : 'Yan',
 	lastname: 'Fan' 
}


 {
 	a: 1,
  	b: 2, 
	c: 3,
	d: 4
}

 { 
       animal: 'dog', 
       noise: 'bark', 
       age: 3, 
       type: 'Golden Retriever', 
       color: 'Yellow' 
 }

 //2

var person = {
	firstName : "Nidhal",
	lastname : "BHS",
	age : 34,
	hometown: "Ezzahra"
}

var person ={
    firstName : "Samar",
    lastName : "Zribi",
    age : "22",
    homeTown : "Hammamet"
}

//3
person.favoritefood = "lablebi";

//4

singleName={
    firstName : "Samar",
    lastName : "Zribi",
    middleName : "nickname"
}

singleName={
    firstName : "Samar",
    lastName : "Zribi",
    middleName : "nickname"
}

//5
function emptyObject(){
    return {};

}

//6

function addProperty(object,key){
    object[key]= true;
    return object;

}

//7

function deleteProperty‌‌(object,key){
    delete object[key];
    return object;
}

//8

function add(object1,key,object2){
	object1[key]=object2;
	return object1;
}

//9

function addFullNameProperty‌‌(object){
	if(object.hasOwnProperty(firstName) && object.hasOwnProperty(lastName)){
		object.fullName= firstName+" " +lastname;
		return object;
	}
}

//10

function addFullNameProperty‌‌(object){
	if(object.hasOwnProperty("firstName") && object.hasOwnProperty("lastname")){
		object.fullName= object.firstName+" " +object.lastname;
		return object;
	}
}

//11

function printAllProperties‌‌(object){
    for (var key in object){
        console.log(object[key]);
    }
}

//More practice 

//1

function removeNumbersLargerThan(number,object){
    for(var key in object){
        if (object[key]>number){
            delete object[key];
        }
    }
    return object;
}

//2

function removeAllEvenValues(object){
    for (var key in object){
        if (object[key]%2==0){
            delete object[key];
        }
    }
    return object
};

//3

function removePropertiesNotEqualTo10(object){
    for (var key in object){
        if (object[key]!==10){
            delete object[key];
        }
    }
    return object;
};

//4

function removeStringsLongerThan(number, object){
    for (var key in object){
        if (object[key].length>number){
            delete object[key];
        }
    }
    return object;
}

//5

function removeAllNumbers(object){
    for (var key in object){
        if (Number.isInteger(object[key])){
            delete object[key];
        }
    }
    return object;
}

//6

function removeArrays(object){
    for (var key in object){
        if (Array.isArray(object[key])){
            delete object[key];
        }
    }
    return object;
}

//7 )

function getFirstElementOfProperty(object,key) {
	var firstElement;
	for (var key in object){
		if (object.hasOwnProperty(key)){
			if (Array.isArray(object[key])){
				if(object[key]==[]){
					firstElement ='undefined';
				}
				else{
					firstElement =object[key][0];
				}
			}
			else{
				firstElement ='undefined';
			}
		}
		else{
			firstElement ='undefined';
		}
	}
	return firstElement;
}

//8

 function displayBook(book) { 
       
 }


