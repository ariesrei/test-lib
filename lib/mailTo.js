

/********************
| 	lib/mailTo
|*********************/
// export function mailTo() {
	
// 	var countClass = document.querySelectorAll(".emailTo"),
// 		i;

// 	for (i = 0; i < countClass.length; i++) {
// 	    var email = document.getElementsByClassName('emailTo')[i];
// 	    var array = [email];

// 	    array.forEach(function(element) {
	    	
// 	    	var user = element.innerHTML || false;
// 	    	var	domain = element.getAttribute('data-url')
// 	    				.replace('http://www.', '')
// 						.replace('www.', '')
// 						.replace('http://', '')
// 						.replace('/', '') || false;
	    	
// 	    	var newEmail = user+'@'+domain;

// 	    	element.outerHTML = '<a style="display: block;" href="mailTo:'+newEmail+'">'+newEmail+'</a>';
// 		});
// 	}

// 	document.getElementsByClassName('btn')[0].style.display = 'none';	
// }


class Email {
	
	constructor(activator) {
		// this.el = document.createElement("div");
		// this.el.className = "btn";
  //       //this.el.style.display = "none";
  //    	activator.addEventListener("click", (e) => { this.onClick(e); });
     	this.domElement.addEventListener('click', this.handler.bind(this));
 	}

 	// onClick(evt) {
  //       alert("Aries!");
  //       this.el.style.display = "";
  //   }

 	handler() {
     	this.sayHello();
 	}

 	sayHello() {
 		alert("HELLOOOOO!!");
 	}
  // 	convert() {
	 //    var countClass = document.querySelectorAll(".emailTo"),
		// i;

		// for (i = 0; i < countClass.length; i++) {
		//     var email = document.getElementsByClassName('emailTo')[i];
		//     var array = [email];

		//     array.forEach(function(element) {
		    	
		//     	var user = element.innerHTML || false;
		//     	var	domain = element.getAttribute('data-url')
		//     				.replace('http://www.', '')
		// 					.replace('www.', '')
		// 					.replace('http://', '')
		// 					.replace('/', '') || false;
		    	
		//     	var newEmail = user+'@'+domain;

		//     	element.outerHTML = '<a style="display: block;" href="mailTo:'+newEmail+'">'+newEmail+'</a>';
		// 	});
		// }

		// document.getElementsByClassName('btn')[0].style.display = 'none';	
  // 	}

}


let test = new Email();

export default Email;