const ajaxMain = (action, data, callback) => {
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

$("#logoutBtn").click((event) => {
	ajaxMain("logout", {}, (result) => {
		location.reload(true);
	});
	event.preventDefault();
});

