$(function() {
	$('.paginator .previous').click(function() {
		console.log('previous click');
		return false;
	});
	$('.paginator .next').click(function() {
		console.log('next click');
		return false;
	});
	$('.paginator .goto').click(function() {
		$.get("/pages/2", function(res) {
			$('.page').html(res);
		});
		return false;
	});
});