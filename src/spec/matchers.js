expect.extend({
	toEqualJSON: function(actual, expected) {
		if (!(actual instanceof Array) || !(expected instanceof Array)){
			throw new Error('both arguments are expected to be arrays')
		}

		var str = JSON.stringify;
		var dump = function(collection){
			return str(collection.map(function(element){
				return str(element);
			}).sort());
		};
		var result = {
			pass: this.equals(dump(actual), dump(expected))
		};
		if (result.pass) {
			result.message = "Expected " + str(actual) + " not to be equal to " + str(expected);
		} else {
			result.message = "Expected " + str(actual) + " to be equal to " + str(expected);
		}
		return result;
	}
});
