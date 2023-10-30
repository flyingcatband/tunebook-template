import { generateFolderFromLatex } from '@flyingcatband/tunebook/server';
import { json } from '@sveltejs/kit';

export const prerender = true;

// This is where the site turns your abc and optionally tex files into a format it can work with
export function GET(): Promise<Response> {
	return generateFolderFromLatex('MyTunebook', './data/folder.tex').then(json);
}
