$(document).ready(function () {
	$('.tweet-compose').on('click', function () {
		$('.tweet-compose').css({'width': '100%', 'height': '5em'});
		$('#char-count').css({'visibility': 'visible'});
		$('#tweet-submit').css({'visibility': 'visible'});
	});
	
	
	$('.tweet-compose').on('keyup', function () {
		var numTextLength = 140 - $('.tweet-compose').val().length;

		console.log(numTextLength);
		$('#char-count').text(numTextLength);

		if (numTextLength <= 10) {
			$('#char-count').css({'color': 'red'});
		} else {
			$('#char-count').css({'color': 'grey'});
		}

		if (numTextLength <= 0) {
			$('#char-count').css({'visibility': 'hidden'});
			$('#tweet-submit').css({'visibility': 'hidden'});
		} else {
			$('#char-count').css({'visibility': 'visible'});
			$('#tweet-submit').css({'visibility': 'visible'});
		}
	});

	$('#tweet-submit').on('click', function () {
		var tweetText = $('.tweet-compose').val();
		var fullName = $('.account-name').text();
		var image = $('avatar:first').text();
		$('.tweet:first').clone().prependTo('#stream');
		$('.tweet-text:first').text(tweetText);
		$('.fullname:first').text(fullName);
		console.log(image);
		$('.avatar').attr('src', image);
	})
})