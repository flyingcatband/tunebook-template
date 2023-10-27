<script lang="ts">
	import { FilterableSetsGrid } from '@flyingcatband/tunebook';

	export let data;
	// This page is the homepage of your tunebook. It shows a grid of all the sets you have
</script>

<svelte:head>
	<title>MyTunebook</title>
</svelte:head>

<h1>Welcome to MyTunebook</h1>
<FilterableSetsGrid folder={data.folder} tuneFont="My Custom Font" />
