// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';

// Integrations
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';
// Vite Plugins
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// https://docs.astro.build/en/guides/integrations-guide/tailwind/
		tailwind(),
		// https://docs.astro.build/en/guides/integrations-guide/svelte/
		svelte(),
		// https://docs.astro.build/en/guides/integrations-guide/react/
		react({
			experimentalReactChildren: true,
		}),
		// https://expressive-code.com/
		expressiveCode({
			defaultProps: { wrap: true },
			themes: ['dark-plus'],
		}),
		// https://www.astroicon.dev/
		icon({
			include: {
				iconDir: ['src/icons'],
			},
		}),
		// https://github.com/delucis/astro-auto-import/tree/main/packages/astro-auto-import
		AutoImport({
			imports: [
				// import ApiBlock from '@components/docs/ApiBlock.astro'
				'@components/docs/ApiBlock.astro',
				// import Table from '@components/docs/Table.astro';
				// '@components/docs/Table.astro',
				{
					// import componentSet from "@components/mdx/index";
					'@components/mdx/index': [['default', 'componentSet']],
					// import { Icon } from 'astro-icon/components';
					'astro-icon/components': ['Icon'],
					// import { Code } from 'astro-expressive-code/components';
					'astro-expressive-code/components': ['Code'],
					// import { Preview } from '@components/docs/Preview.tsx';
					'@components/docs/Preview.tsx': ['Preview'],
					// import { FrameworkTabs } from '@components/docs/FrameworkTabs';
					'@components/docs/FrameworkTabs.tsx': ['FrameworkTabs'],
				},
			],
		}),
		// IMPORTANT: MUST BE LAST INTEGRATION
		// https://docs.astro.build/en/guides/integrations-guide/mdx/
		mdx(),
	],
	vite: {
		plugins: [skeletonPluginWatcher(path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))],
	},
});
