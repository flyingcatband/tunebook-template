<script lang="ts">
	import { ViewSet } from '@flyingcatband/tunebook';
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.set.name} | MyTunebook</title>
</svelte:head>

<nav>
	<a class="button" href={base}>All sets</a>
	<a class="button" href="{base}/{data.set.previousSlug}">Previous set</a>
	<a class="button" href="{base}/{data.set.nextSlug}">Next set</a>
</nav>
<ViewSet
	set={data.set}
	displayAbcFields="TNC"
	folderName={data.folder.name}
	fontFamily="My Custom Font"
	showClefSwitcher
>
	{#each data.set.notes as note (note)}
		<p class="italic">{note}</p>
	{/each}
</ViewSet>
