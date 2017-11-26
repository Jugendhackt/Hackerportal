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
	$.ajax({
			url: 'articleLib.php',
			type: 'POST',
			data: {action, data},
			dataType: 'text',
			success: function(result){
				return callback(result, id);
			}
		});
};

const genCard = (id) => {
	ajax("getTitle", {id}, (title) => {
		ajax("getContent", {id}, (content) => {
			$("#dash-blog").append("<div class='card'> \
										<div class='card-header'> \
										Article \
										</div> \
										<div class='card-body'> \
											<h4 class='card-title'>" + title + "</h4> \
											<p class='card-text'>" + clearParse(content).substr(0, 60) + "...</p> \
											<button type='button' class='btn btn-primary' data-toggle='modal' data-backdrop='static' data-target='.article" + id + "'>Go to Article <i class='fa fa-arrow-right' aria-hidden='true'></i></button> \
										</div> \
									</div>");
			$("#dash-blog").append("<div class='modal fade article" + id + "' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'> \
										<div class='modal-dialog modal-lg'> \
											<div class='modal-content'> \
												<div class='modal-header'> \
													<h5 class='modal-title' id='exampleModalLabel'>" + title + "</h5> \
													<button type='button' class='close' data-dismiss='modal' aria-label='Close'> \
														<span aria-hidden='true'>&times;</span> \
													</button> \
												</div> \
												<div class='modal-body'> \
													" + bbcParse(content) +" \
												</div> \
											</div> \
										</div> \
									</div>");
		});
	});
};

const loadCards = (amount) => {
	ajax("getArticles", {amount}, (ids) => {
	const json = JSON.parse(ids);
	for(var i = 0; i < json.length; i++){
		genCard(json[i]);
	}
});
}

loadCards(20);

$("#searchForm").submit((event) => {
	$("#searchButton").click();
	event.preventDefault();
});

$("#searchButton").click(() => {
	var searchVal = $("#searchField").val();
	$("#dash-blog").empty();
	if(searchVal != ""){
		ajax("getAllArticles", {}, (ids) => {
			const json = JSON.parse(ids);
			for(var i = 0; i < json.length; i++){
				ajaxId("getTitle", {id: json[i]}, json[i], (title, id) => {
					if(title.includes(searchVal)){
						console.log("found mathing title in " + id);
						genCard(id);
					}else{
						ajaxId("getContent", {id}, id, (content, id) => {
							const parsed = clearParse(content);
							if(parsed.includes(searchVal)){
								console.log("found matching content in " + id);
								genCard(id);
							}
						});
					}
				});
			}
		});
	}else{
		loadCards(20);
	}
});