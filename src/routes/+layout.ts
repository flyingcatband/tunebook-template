import type { LoadEvent } from '@sveltejs/kit';
import type { Folder } from '@flyingcatband/tunebook/types';

export const prerender = true;

// This is where the site gets the data for your tunes and sets
export function load({ fetch }: LoadEvent): Promise<{ folder: Folder }> {
	return fetch('/folder.json')
		.then((res) => res.json())
		.then((folder) => ({
			folder
		}));
}
