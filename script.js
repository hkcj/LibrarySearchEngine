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
			$('#card_holder').append(card);
		}
	}
});
