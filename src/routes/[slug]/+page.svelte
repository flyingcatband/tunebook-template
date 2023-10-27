<script>
	import { ViewSet } from '@flyingcatband/tunebook';
	export let data;
</script>

<svelte:head>
	<title>{data.set.title} | MyTunebook</title>
</svelte:head>

<button class="z-10 fixed left-2" on:click={() => history.back()}>Back</button>
<ViewSet set={data.set} fontFamily="My Custom Font" />
