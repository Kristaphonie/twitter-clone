$('.tweet-compose').on('click', function () {
	$('.tweet-compose').css({'width': '100%', 'height': '5em'});
	$('#char-count').css({'visibility': 'visible'});
	$('#tweet-submit').css({'visibility': 'visible'});
});

var textNum = $('#char-count');
console.log(textNum);
textNum.on('keydown', function () {
	textNum.textContent() - 1;
});