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

const genCard = (id) => {
	ajax("getTitle", {id}, (title) => {
		ajax("getContent", {id}, (content) => {
			$("#dash-blog").append("<div class='card' style='width: 20rem;'> \
										<div class='card-body'> \
											<h4 class='card-title'>" + title + "</h4> \
											<p class='card-text'>" + content.substr(0, 100) + "...</p> \
											<a href='#' class='btn btn-primary'>Go somewhere</a> \
										</div> \
									</div>");
		});
	});
};

genCard(4);