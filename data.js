const fs = require('fs');

function dataRe(file, lines) {
	fs.readFile(file, 'utf8', function(err, data) {
		if (err) {
			console.lof(err);
		} else {
		for (let i = 1; i <= lines; i++) {
		fs.writeFile(file, data.replace(/\[\]/g, function() {
			return "[" + i++ + "]";
		}
		), function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log('File ' + file + ' is now modifid !');
			}
		});
	}
	}
	});
}

dataRe('list.txt', 234);
