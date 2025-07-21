<script lang="ts">
	import HomeHeadshot from '@/component/HomeHeadshot.svelte';
	import HomeHeart from '@/component/HomeHeart.svelte';
	import HomeButton from '@/component/HomeButton.svelte';
	import CardText from '@/component/CardText.svelte';

	import rory from '@/assets/pfp/rory.webp';
	import jimmy from '@/assets/pfp/jimmy.webp';

	import LinkList from '@/model/LinkList';
	import Label from '@/model/Label';
</script>

<svelte:head>
	<title>Foxy & Wolf</title>
</svelte:head>

<div class="Home">
	<div class="Home-body flex flex-col items-center justify-start" style="min-height: 100dvh">
		<div
			class="w-full flex flex-col items-center justify-start"
			style="height: max-content; min-height: 70dvh;"
		>
			<div
				class="w-full p-6 pb-16 gap-12 flex flex-col items-center justify-center"
				style="max-width: 35rem; height: max-content; min-height: 70dvh;"
			>
				<div class="flex flex-row items-center justify-center gap-5">
					<HomeHeadshot
						alt="Rory Badge"
						src={rory}
						labels={[new Label('Programmer')]}
						href="https://rorywolf.net/"
						target="_blank"
					/>
					<HomeHeart />
					<HomeHeadshot
						alt="Jimmy Badge"
						src={jimmy}
						labels={[new Label('Artist'), new Label('Programmer')]}
						href="http://jimmychane.com"
						target="_blank"
					/>
				</div>

				<CardText>
					<div class="gap-4 p-4 flex items-center text-center flex-col">
						<p>Rory and Jimmy's Furry Memory Lane</p>
						<p>
							A journey celebrating our memories and milestones as a blue wolf and yellow fox furry
							couple.
						</p>
						<p>Join us and create new memories!</p>
					</div>
				</CardText>

				<div class="Buttons flex flex-row flex-wrap-reverse w-full gap-2 justify-center">
					{#each LinkList.map((link) => link).reverse() as link}
						<HomeButton title={link.title} href={link.href} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
