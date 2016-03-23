var fs = require("fs");


function appendFile (file, dest) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (error, buffer) => {
			if (error) return reject(error);

			fs.appendFile(dest, buffer, (error) => {
				if (error) return reject(err);
				return resolve(dest);
			});
		});
	});
}

function pconcat (file_array, dest) {
	return new Promise((resolve, reject) => {
		fs.writeFile(dest, '',  (error) => {
			console.log("qui non ci entro mai", error);
			if (error) return reject(error);
			return resolve(dest);
		})
	})
	.then((dest) => {
		return Promise.all([].concat(file_array).map((file) => appendFile(file, dest) ));
	}).then(() => {
				return dest;
		}
	)
};


module.exports = pconcat;