$(document).ready(function(){
	var send = function () {
		var url = $("#url").val();
		var method = $("#method").val();
		var contentType = "application/json"; $("#content_type").val();
		var data = $("#data").val();
		$("#result").val("Sending: " + JSON.stringify({
			url, method, contentType, data
		}));
		if(method === "POST") {
			sendPostRequest({
				url, contentType, data
			});
		} else {
			sendGetRequest({
				url, contentType, data
			});
		}
	};

	var sendPostRequest = function (info) {
		console.log("sending POST req: ", info);
		$.ajax({
			'url': info.url,
			'data': JSON.stringify(info.data),
			'type': 'POST',
			'dataType': 'json',
			'crossDomain': true,
			'success': (data) => {
				updateResult(data, true);
			},
			'error': (err) => {
				updateResult(err, false);
			}
		});
	}

	var sendGetRequest = function (info) {
		console.log("sending Get req: ", info);
		$.ajax({
			'url': info.url,
			'data': info.data,
			'type': 'GET',
			'crossDomain': true,
			'success': (data) => {
				updateResult(data, true);
			},
			'error': (err) => {
				updateResult(err, false);
			}
		});
	}

	var updateResult = function(message, success) {
		if(typeof message === 'object') {
			message = JSON.stringify(message);
		}
		if(success) {
			message = "Success: " + message;
		} else {
			message = "Error: " + message;
		}
		$("#result").val(message);
	}

	//sendBtn
	$("#send_btn").click(function(e) {
		send();
		//console.log("say hello");
	});
	
	$("#use_url_ex_btn").click(function(e) {
		$("#url").val("https://adxsync-dev.andrexen.com:4443/import");
		alert("hit me");
	});
});