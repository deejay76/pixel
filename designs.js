//select color input
//select size input

var height, width, color;
//when size is submitted by the user, call makeGrid()



$('#sizePicker').submit(function (event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	//console.log('Height: ' + height +  'and width: ' + width);
});

function makeGrid(x, y) {
	$('#pixelCanvas').children().remove();

	//your code goes here!
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr></tr> ');
		
	}	
	for (var j = 1; j <=y; j++) {
		$('tr').append('<td></td>');
	}	
	//add color to cell
	$('td').click(function addColor() {
		var color = $('#colorPicker').val();
		
		($(this).attr('bgcolor',color))

		// if ($(this).attr('style')) {
		// 	$(this).removeAttr('style')
		// } else {
		// 	$(this).attr('style', 'backgroud-color:' + color);
		// }	
	
	});	
}	


