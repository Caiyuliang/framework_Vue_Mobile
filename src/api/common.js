//正则
var regExp = {
	phone:/^1[34578]\d{9}$/,
	password:/^(\w){6,20}$/
}
//倒计时
var countDown = function(second, start, end) {
	setTimeout(function() {
		if(second != 0) {
			start(second);
			second--;
			countDown(second, start, end);
		} else {
			end();
		}
	}, 1000);
};

var Alerts = function(){
	alert('this is alert')
}
export {
	countDown,
	regExp,
	Alerts
}
