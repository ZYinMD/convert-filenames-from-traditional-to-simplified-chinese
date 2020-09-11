import { promises as fs } from 'fs';

main();

async function main() {
	const targetPath = process.argv[2];
	if (targetPath) {
		return processDir(targetPath);
	} else console.error('Please check README.md about syntax');
}

async function processDir(path: string) {
	const dir = await fs.opendir(path);
	for await (const dirent of dir) {
		console.log('name', dirent.name, 'isFile', dirent.isFile());
	}
}
