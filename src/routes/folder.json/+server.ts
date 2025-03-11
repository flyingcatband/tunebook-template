import { generateFolderFromLatex, addNextPreviousSlugs } from '@flyingcatband/tunebook/server';
import { json } from '@sveltejs/kit';

export const prerender = true;

// This is where the site turns your abc and optionally tex files into a format it can work with
export function GET(): Promise<Response> {
	return generateFolder().then(json);
}

export type MungedFolder = Awaited<ReturnType<typeof generateFolder>>;

// Generates the data for folder.json.
// Do everything in here apart from calling `json` to convert the result to a Response.
// That way, `MungedFolder` can be used in `src/routes/+layout.ts` to type the data.
function generateFolder() {
	return generateFolderFromLatex('MyTunebook', './data/folder.tex').then(addNextPreviousSlugs);
}
