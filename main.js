
const ajax = (action, data, callback) => {
	$.ajax({
			url: 'main.php',
			type: 'POST',
			data: {action, data},
			dataType: 'text',
			success: function(result){
				return callback(result);
			}
		});
};

$("#keyForm").submit((event) => {
	var key = $("#keyInput").val();
	if(key != ""){
		ajax("login", {key}, (result) => {});
	}
	event.preventDefault();
});