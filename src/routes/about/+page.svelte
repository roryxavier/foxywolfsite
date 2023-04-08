<script lang="ts">
	import ImageHeader from '../../assets/kanotsu_moon-HalfBody+SPStyle+1Char+Backdrop(30-06-2022).png';
	import Section from './Section.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import Row from './Row.svelte';
</script>

<div class="p-6 flex flex-col items-center gap-6">
	<img class="w-full max-w-xs rounded-xl" src={ImageHeader} alt="Header Image" />

	<p class="max-w-xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut mi ut augue tempor fringilla.
		Nullam faucibus mi quis eros dictum suscipit. Quisque in ex placerat, ultrices purus vel,
		fermentum justo. Curabitur venenatis lectus nec sem tristique pellentesque. Mauris iaculis,
		nulla tincidunt lacinia rutrum, nulla lectus posuere mi, in condimentum lectus nisl at ante. Sed
		malesuada, quam eu accumsan placerat, turpis sem sodales diam, id laoreet magna odio in metus.
		Maecenas id cursus massa, sit amet elementum urna. Proin tristique est at libero tristique
		ultrices. Quisque vel felis sit amet ante pretium ornare. Nunc vel leo sed velit ornare
		ultricies. Nam sagittis massa ut iaculis congue. Praesent sed elit ut sapien faucibus mattis ut
		et diam. Morbi ut lacus finibus, tempor lectus pellentesque, consequat velit. Aenean lacus
		magna, iaculis nec sapien et, sodales vulputate lacus. Aliquam a nunc in urna ultrices cursus.
	</p>

	<Section>
		<SectionTitle>Reference Link</SectionTitle>
		<Row title="Rory Xavier" clickables={[{ title: 'Link' }]} />
		<Row title="Jimmy Fox" clickables={[{ title: 'Link' }]} />
	</Section>

	<Section>
		<SectionTitle>Social Link</SectionTitle>
		<Row
			title="Rory Xavier"
			clickables={[{ title: 'Logo Social Link' }, { title: 'Logo Social Link' }]}
		/>
		<Row
			title="Jimmy Fox"
			clickables={[{ title: 'Logo Social Link' }, { title: 'Logo Social Link' }]}
		/>
	</Section>
</div>
