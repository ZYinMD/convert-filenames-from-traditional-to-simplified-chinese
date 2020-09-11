const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2];

processDir(targetPath);

function processEntry(entryPath) {
	const stat = fs.statSync(entryPath);
	if (stat.isFile()) {
		processFile(entryPath);
	}
	if (stat.isDirectory()) {
		processDir(entryPath);
	}
}

function processDir(dirPath) {
	fs.readdirSync(dirPath)
		.map((filename) => path.join(dirPath, filename))
		.forEach(processEntry);
}

function processFile(filePath) {
	const relativePath = path.relative(targetPath, filePath);
	console.log(relativePath);
}
