(function () {
'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/********************
| 	Class Calculator
|*********************/

var Calculator = function () {
	function Calculator(a, b) {
		classCallCheck(this, Calculator);

		this.a = a;
		this.b = b;
	}

	createClass(Calculator, [{
		key: 'multiply',
		value: function multiply(a, b) {
			b = typeof b !== 'undefined' ? b : 1;
			return a * b;
		}
	}, {
		key: 'add',
		value: function add(a, b) {
			alert(a + b);

			return a + b;
		}
	}]);
	return Calculator;
}();

/********************
| Class Email
|*********************/

var Email = function () {
	function Email() {
		classCallCheck(this, Email);


		var self = this;

		//self.el = document.getElementById("demo");
		//self.el.innerHTML = "Convert email";
		//self.el.addEventListener("click", self.convert.bind(self));

		self.el = window;
		self.el.addEventListener("load", self.convert.bind(self));
	}

	createClass(Email, [{
		key: "convert",
		value: function convert() {

			var queryClass = document.querySelectorAll(".emailTo"),
			    countClass = queryClass.length,
			    i;

			//alert(countClass);

			if (countClass != 0) {

				for (i = countClass; i--;) {
					var email = document.getElementsByClassName('emailTo')[i],
					    array = [email];

					array.forEach(function (element) {

						var user = element.innerHTML || false;
						var domain = element.getAttribute('data-url').replace('http://www.', '').replace('www.', '').replace('http://', '').replace('/', '') || false;

						var newEmail = user + '@' + domain;

						element.outerHTML = '<a href="mailTo:' + newEmail + '">' + newEmail + '</a>';
					});
				}
				//document.getElementsByClassName('btn')[0].style.display = 'none';	
			}
		}
	}]);
	return Email;
}();

/* ----------------------
|  MAIN JS
|-----------------------*/

var convert = new Email(); // on window.load to convert the elements

module.exports = { Calculator: Calculator, Email: Email };

}());
