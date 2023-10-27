import type { PageLoadEvent } from './$types.js';
import type { Set } from '@flyingcatband/tunebook/types';
import { error } from '@sveltejs/kit';

// this is where the site loads the data for a specific set
export async function load({ parent, params: { slug } }: PageLoadEvent): Promise<{ set: Set }> {
	const data = await parent();
	const set = data.folder.content
		.flatMap((section) => section.content)
		.find((set) => set.slug === slug);
	if (set) {
		return { set };
	} else {
		throw error(404, 'Set not found');
	}
}
