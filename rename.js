const fs = require('fs');
const path = require('path');
const convert = require('chinese_convert');

const targetPath = process.argv[2];

processEntry(targetPath);

function processEntry(entryPath) {
	const stat = fs.statSync(entryPath);
	if (stat.isFile()) processFile(entryPath);
	if (stat.isDirectory()) processDir(entryPath);
}

function processDir(dirPath) {
	fs.readdirSync(dirPath)
		.map((filename) => path.join(dirPath, filename))
		.forEach(processEntry);
}

function processFile(filePath) {
	const { dir, name, ext } = path.parse(filePath);
	const converted = convert.tw2cn(name);
	if (converted !== name) {
		const newPath = path.join(dir, converted + ext);
		fs.renameSync(filePath, newPath);
		console.log(`converted ${ext} file in directory ${dir}:\n${name}  -->\n${converted}\n`);
	}
}
