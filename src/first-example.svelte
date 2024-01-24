<script>
	let firstname = "Gaz";
	let lastname = "Max";
	let color = "purple";
	let showText = false;
	$: name = `${firstname} ${lastname}`;

	let users = [
		{
			id: 1,
			name: "Tom"
		},
		{
			id: 2,
			name: "Anna"
		},
		{
			id: 3,
			name: "Cilian"
		}
	];

	const toggle = () => {
		color = color === 'purple' ? 'red' : 'purple';
		showText = !showText;
		users = [...users, {id: 4, name: "Jen"}];
	}
</script>

<main>
	<h1 style="color: {color}">Hello {name}!</h1>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		{:else}
			<p>No Text</p>
	{/if}
	<button on:click={toggle}>Change Color</button>
	{#each  users as user (user.id) }
		<h3>{user.id}: {user.name}</h3>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>