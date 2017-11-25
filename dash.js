const ajax = (action, data, callback) => {
	$.ajax({
			url: 'articleLib.php',
			type: 'POST',
			data: {action, data},
			dataType: 'text',
			success: function(result){
				return callback(result);
			}
		});
};

$("#logoutBtn").click((event) => {
	ajax("test", {}, (result) => {
		//location.reload(true);
	});
	event.preventDefault();
});

