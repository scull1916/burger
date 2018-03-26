$(function()
	{
		$(".change-devour").on("click", function(event)
			{
				var id = $(this).data("newDevour");

				var newDevour = 
				{
					devour: newDevour
				};

				//Send the PUT request
				$.ajax("/api/burgers/" + id,
					{
						type: "PUT",
						data: newDevour
					}).then(function()
					{
						console.log("changed devour to", newDevour);
						//Reload the page to get updated list
						location.reload();
					});
			});

		$(".create-form").on("submit", function(event)
		{
			//make sure to preventDefault on a submit event
			event.preventDefault();

			var newBurger = {
				name: $("#ba").val().trim(),
				devour: $("[name=devour]:unchecked").val().trim()
			};

			//Send the POST request
			$.ajax("/api/burgers",
			{
				type: "POST",
				name: newBurger
			}).then(function()
			{
				console.log("created new burger");
				//reload the page to get the updated list
				location.reload();
			});
		});
	});