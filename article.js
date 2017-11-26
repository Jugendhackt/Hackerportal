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

const ajaxId = (action, data, id, callback) => {
	ajax(action, data, (result) => {
		return callback(result, id);
	});
};

const id = $("#article").data('id');

ajax("getContent", {id}, (content) => {
	$("#article").append(bbcParse(content));
});