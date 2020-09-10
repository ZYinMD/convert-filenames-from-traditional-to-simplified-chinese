// import { promises as fs } from 'fs';

main();

function main() {
	const targetPath = process.argv[2];
	if (targetPath) processPath(targetPath);
	else console.error('Please check README.md about syntax');
}

function processPath(path: string) {
	console.log('path:\n\t', path);
}
