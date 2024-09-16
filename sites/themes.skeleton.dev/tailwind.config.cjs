// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: do not delete the above comment. It's required for local HMR on plugin changes.

import forms from '@tailwindcss/forms';

import { join } from 'path';
import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		skeleton({
			themes: [themes.cerberus, themes.catppuccin, themes.rose]
		})
	]
};

module.exports = config;
