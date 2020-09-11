import { promises as fs } from 'fs';
import path from 'path';

const targetPath = process.argv[2];
processDir(targetPath);

async function processDir(dirPath: string) {
	const dir = await fs.opendir(dirPath);
	for await (const dirent of dir) {
		const direntPath = path.join(dirPath, dirent.name);
		if (dirent.isFile()) {
			console.log(direntPath);
		}
		if (dirent.isDirectory()) {
			processDir(direntPath);
		}
	}
}
