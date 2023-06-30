<script lang="ts">
	import Actionbar from '../../component/Actionbar.svelte';

	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import Row from './Row.svelte';

	import ImageHeader from '../../assets/kanotsu_moon-HalfBody+SPStyle+1Char+Backdrop(30-06-2022) w520h416.png';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<div>
	<Actionbar />
	<div class="PageAbout-body flex flex-col items-center justify-start" style="min-height: 100dvh">
		<div class="flex flex-col items-center justify-start p-6 gap-8" style="max-width: 35rem; padding-bottom: 20rem;">
			<img class="w-full max-w-xs rounded-xl" src={ImageHeader} alt="Header Image" />

			<p class="max-w-xl">
				Hello, I'm Rory, a blue wolf, and right next to me is Jimmy, a yellow fox. We have been
				dating since April 2, 2021. We are both coders and have collaborated to build this website
				together. The purpose of this website is to serve as a dedicated memory lane for us,
				capturing our travels and experiences at furry conventions.
			</p>

			<p class="max-w-xl">
				Please feel free to explore the various pages we have created. You will find a timeline
				highlighting the significant milestones of our relationship, a gallery showcasing our
				artwork, and even a travel map documenting the places we have visited.
			</p>

			<p class="max-w-xl">
				Thank you for taking the time to visit our website. We hope you enjoy browsing through our
				memories. Have a fantastic day!
			</p>

			<Section>
				<SectionTitle>Reference Link</SectionTitle>
				<Row title="Rory Xavier" menus={[{ title: 'Visit', href: 'https://ref.rorywolf.net/' }]} />
			</Section>

			<Section>
				<SectionTitle>Social Link</SectionTitle>
				<Row
					title="Rory Xavier"
					menus={[
						{ title: 'Twitter', href: 'https://twitter.com/rory_xavi' },
						{ title: 'Telegram', href: 'https://t.me/RoryXavier' }
					]}
				/>
				<Row
					title="Jimmy Fox"
					menus={[
						{ title: 'Twitter', href: 'https://twitter.com/jimmykajun' },
						{ title: 'Telegram', href: 'https://t.me/Jimmy612' }
					]}
				/>
			</Section>

			<Section>
				<SectionTitle>Websites</SectionTitle>
				<Row title="Rory Xavier" menus={[{ title: 'Visit', href: 'https://rorywolf.net/' }]} />
				<Row title="Jimmy Fox" menus={[{ title: 'Visit', href: 'http://jimmychane.com/' }]} />
			</Section>
		</div>
	</div>
</div>

<style lang="scss">
	.PageAbout-body {
		background: #eaf3f8;
	}
</style>
