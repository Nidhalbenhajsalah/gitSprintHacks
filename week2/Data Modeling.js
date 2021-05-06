//Basic Requirments
//2

var book1={
 Title: "Harry Potter and the Sorcerer's Stone",
 Author1: 'J.K. Rowling', 
 Author2:undefined,
 MSRP :123,
 Genre : "Fantaisie",
 NumberofPages :300,
 Description :"description 1"

}

var book2={
 Title: "Romeo and Juliet",
 Author1: "William Shakespeare",
 Author2: undefined,
 MSRP : 1234,
 Genre :"Romance",
 NumberofPages :500,
 Description :"description2"
}

var book3={
 Title: "Structure and Interpretation of Computer Programs",
 Author1: 'Gerald Jay Sussman', 
 Author2:'Hal Abelson',
 MSRP :12345,
 Genre :"Computer Science",
 NumberofPages :400,
 Description :"description3"

}

//3

function makeBook(title,author1,author2,MSRP,Genre,NumberOfPages,Description){
	return {
		title: title,
		author1: author1,
        author2: author2,
		MSRP: MSRP,
		Genre: Genre,
		NumberOfPages: NumberOfPages,
		Description : Description
	}
}

//4

function displayBook(book){
	return book.Title + ' by ' + book.Author1 +', ' + ' is a ' + book.Genre +  ' book and here is a synopsis: ' +book.Description;
}

//5

var books = [book1, book2, book3];

//6

function displayBooks(array){
	for (var i=0; i<array.length; i++){
		console.log("\n",i+1, displayBook(array[i]));
	}
}

//7

function isMatch(query,book){
		return ((book.Title).substr(0,query.length)===query)
	}

function searchBooks(query,array){
    for (var i=0; i<array.length;i++){
	    if( ((array[i].Title).substr(0,query.length)===query)){
            console.log(array[i]);
        }
	}
}







