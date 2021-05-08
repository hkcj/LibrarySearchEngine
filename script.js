$("document").ready(function(){

<<<<<<< HEAD
var spinner = $('#loadingDiv').hide();
$('.card img').hide();

=======
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
	$('#button').on('click', function(){
		search();
	});

	function search(){

<<<<<<< HEAD
		$(document)
			.ajaxStart(function () {
				spinner.show();
			})
			.ajaxStop(function () {
				spinner.hide();
			});

		var search = $('#myinput').val();
		if (  search.length > 0 && search != " " ) {
			$('#card_holder').html("");
=======
		var search = $('#myinput').val();
		if (  search.length > 0 && search != " " ) {
			$('#card_holder').html("");

>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
			$.ajax({
				type: "GET",
				url: "https://reststop.randomhouse.com/resources/works/",
				data: {
					start: 0,
					max: 20,
					expandLevel: 1,
					search: search
				},
				dataType: "json",
				success: function(result){

						console.log(result.work);

<<<<<<< HEAD
						if(result.work === undefined){
							alert("Please enter a valid search");}

					if ( result.work.length > 0 ) {
=======
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
						for( var i = 0; i < result.work.length; i++ ){
							var work = result.work[i];
							var isbn = work.titles.isbn.length > 1 ? work.titles.isbn[0].$ : work.titles.isbn.$;
							var info = getInformation( isbn );
						}
<<<<<<< HEAD
					}
					else if(result.work === undefined){
						alert("Please enter a valid search");
=======
					} else {
						alert("Something went wrong.");
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
					}
				},
				error: function(message){
					alert("Can't find any books");
				}
<<<<<<< HEAD
				});
		} else {
			alert("Can't find any books, please enter valid search");
		}

	}
=======
				}); 
		} else {
			alert("Can't find any books, please enter valid search");
		}
	}

>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
	function getInformation( isbn ){
		$.ajax({
				type: "GET",
				url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:" + isbn,
				dataType: "json",
				success: function(result){
					var query= "ISBN:" + isbn;
<<<<<<< HEAD

=======
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
					displayInformation( query, result );
				},
				error: function(message){
				}
		});
	}

	function displayInformation( isbn, response ){
		var info = response;
<<<<<<< HEAD
		if ( info[isbn] ) {
			data = info[isbn];
			var title = data.title;

=======
			if ( info[isbn] ) {

			data = info[isbn];
			var title = data.title;
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
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
<<<<<<< HEAD
													}

			var card = `<div class='card'>
			<a href="${data.url}">
			<img src='${covers}' alt='Avatar' /></a>
			<div class='container'>
			<h6>Authors: ${authors}</h6>
			<h6>Publishers: ${publishers}</h6>
			<h6>Subjects: ${subject_links}</h6>
			</div></div>`;
			$('#card_holder').append( card );
		}
	}

=======
							}

			var card = `<div class='card'><a href="${data.url}"><img src='${covers}' alt='Avatar' style='width:100%' /></a><div class='container'><h6>Authors: ${authors}</h6><h6>Publishers: ${publishers}</h6><h6>Subjects: ${subject_links}</h6></div></div>`;
			$('#card_holder').append(card);
		}
	}
>>>>>>> 260c707cbf7f735ce1208fe7f2f458dc6e6cbd6b
});
