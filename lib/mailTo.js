

/********************
| 	lib/mailTo
|*********************/
export function mailTo() {
	
	var countClass = document.querySelectorAll(".emailTo"),
		i;

	for (i = 0; i < countClass.length; i++) {
	    var email = document.getElementsByClassName('emailTo')[i];
	    var array = [email];

	    array.forEach(function(element) {
	    	
	    	var user = element.innerHTML || false;
	    	var	domain = element.getAttribute('data-url')
	    				.replace('http://www.', '')
						.replace('www.', '')
						.replace('http://', '')
						.replace('/', '') || false;
	    	
	    	var newEmail = user+'@'+domain;

	    	element.innerHTML = '<a href="mailTo:'+newEmail+'">'+newEmail+'</a>';
		});
	}

	document.getElementsByClassName('btn')[0].style.display = 'none';
	
}