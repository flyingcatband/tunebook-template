<script lang="ts">
	import { ViewSet } from '@flyingcatband/tunebook';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.set.name} | MyTunebook</title>
</svelte:head>
<button class="z-10 fixed left-2" onclick={() => history.back()}>Back</button>
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
