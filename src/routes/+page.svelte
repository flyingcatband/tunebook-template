<script lang="ts">
	import { FilterableSetsGrid, keyedLocalStorage } from '@flyingcatband/tunebook';

	let { data } = $props();
	const visualTranspose = keyedLocalStorage('globalTransposition', 0);
</script>

<svelte:head>
	<title>MyTunebook</title>
</svelte:head>

<h1 class="mt-3">Welcome to MyTunebook</h1>
<p class="mx-auto w-fit flex flex-wrap gap-2">
	<button onclick={() => ($visualTranspose = 0)}>Make the folder C</button>
	<button onclick={() => ($visualTranspose = 2)}>Make the folder B♭</button>
	<button onclick={() => ($visualTranspose = -3)}>Make the folder E♭</button>
</p>
<FilterableSetsGrid folder={data.folder} tuneFont="My Custom Font" />
