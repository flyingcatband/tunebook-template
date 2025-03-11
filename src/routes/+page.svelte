<script lang="ts">
	import { FilterableSetsGrid, GlobalTranspositionButtons } from '@flyingcatband/tunebook';

	let { data } = $props();
</script>

<svelte:head>
	<title>MyTunebook</title>
</svelte:head>

<h1>Welcome to MyTunebook</h1>
<GlobalTranspositionButtons showClefSwitcher />
<FilterableSetsGrid folder={data.folder} tuneFont="My Custom Font" />
