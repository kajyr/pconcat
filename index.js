var concat = require('concat');

function pconcat (file_array, dest) {
	return new Promise(function(resolve, reject) {
		concat(file_array, dest, function (error) {
			if (error) {
				return reject(error);
			}
			return resolve(error);
		});
	});
 };


 module.exports = pconcat;