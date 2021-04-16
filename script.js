$("document").ready(function(){

	
	$('#button').on('click', function(){
		search();
	});

	
	function search(){

		var search = $('#myinput').val();

		if (  search.length > 0 && search != " " ) {

			$('#card_holder').html("");


			$.ajax({
				type: "GET",
				url: "https://reststop.randomhouse.com/resources/works/",
				data: {
					start: 0,
					max: 100,
					expandLevel: 1,
					search: search
				},
				dataType: "json",
				success: function(result){

					if ( result.work.length > 0 ) {

						for( var i = 0; i < result.work.length; i++ ){

							
							var work = result.work[i];

						
							var isbn = work.titles.isbn.length > 1 ? work.titles.isbn[0].$ : work.titles.isbn.$;
							var info = getInformation( isbn );

						}

					} else {
						alert("Something went wrong.");
					}
				},
				error: function(message){
					alert("Can't find any books");
				}

				}); 

			
		} else {
			alert("Can't find any books, please enter valid search");
		}
	}


	function getInformation( isbn ){

		$.ajax({
				type: "GET",
				url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:" + isbn,
				dataType: "json",
				success: function(result){

					var query= "ISBN:" + isbn;

					//cllback post ajax
					displayInformation( query, result );
				},
				error: function(message){

				}
		}); 
	}

	function displayInformation( isbn, response ){

		
		var info = response;

		if ( info[isbn] ) {

			data = info[isbn];

			var title = data.title;
			//console.log( info[isbn] );

			
			var covers = 'bookCover.jpg';

			if ( data.cover ){
				covers = data.cover.large;
			}

			var authors = "";
			if ( data.authors ){
				for( var i = 0; i < data.authors.length; i++ ){
					authors += ` ${data.authors[i].name},`;
				}
			}

			var publishers = "";
			if ( data.publishers ){
				for( var i = 0; i < data.publishers.length; i++ ){
					publishers += ` ${data.publishers[i].name},`;
			}

			var subject_links = "";
			if ( data.subjects ){
				for( var i = 0; i < data.subjects.length; i++ ){
					subject_links += ` <a href="${data.subjects[i].url}">${data.subjects[i].name}</a> `;
				}
			}
							}

			var card = `<div class='card'><a href="${data.url}"><img src='${covers}' alt='Avatar' style='width:100%' /></a><div class='container'><h6>Authors: ${authors}</h6><h6>Publishers: ${publishers}</h6><h6>Subjects: ${subject_links}</h6></div></div>`;

			
			$('#card_holder').append( card );
		}
	}


// function getUsers(){
// 	fetch('users.json')
// 	.then((res)=>res.json())
// 	.then((data)=>{
// let output ='<h2 class="mb-3">Users</h2>';
// data.forEach(function(user){

// })
// }



			// $.ajax({
			// 	type: "GET",
			// 	url: "https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json",


			// 	// "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6",

			// 	// "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:9780739332122",

			// 	dataType: "json",
			// 	success: function(result){
			// 		//play with result here
			// 		// console.log(result);
			// 		for(i = 0; i < 1; i++){
			// 		 $("div").append("</br> <img src=" + result[i].image_url + "></br>");
			// 		 $("div").append(result[i].name + "</br>");
			// 		 $("div").append(result[i].description + "</br> </br>");

			// 		 var obj = JSON.parse(text);
			// 		 document.getElementsById()










});