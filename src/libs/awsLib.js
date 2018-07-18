import { Storage } from "aws-amplify";

export async function s3Upload(file) {
	const filename = `${Date.now()}-${file.name}`;

	const stored = await Storage.vault.put(filename, file, {
		conentType: file.type
	});

	return stored.key;
}

export async function s3Delete(filename) {
	const deleted = await Storage.vault.remove(filename);
	
	return deleted.key;
}