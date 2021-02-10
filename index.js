'use strict';

const fs = require('fs');
const path = require('path');
const convert = require('chinese_convert');
const recursive = require('recursive-readdir');

recursive(process.argv[2]).then((files) => files.forEach(rename));

function rename(filePath) {
	const { dir, name, ext } = path.parse(filePath);
	const converted = convert.tw2cn(name);
	if (converted !== name) {
		const newPath = path.join(dir, converted + ext);
		fs.renameSync(filePath, newPath);
		console.log(`converted ${ext} file in directory ${dir}:\n${name}  -->\n${converted}\n`);
	}
}
