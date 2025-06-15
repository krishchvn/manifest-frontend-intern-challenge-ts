import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	theme: {
		extend: {
			colors: {
				orange6: '#FFE8C899',
				mint9: '#3B968BE5',
				mint: '#3b968b',
				disabled: '#2E2D291A',
				coco5: '#2E2D2980',
				coco1: '#2E2D291A',
				coco3: '#2E2D294D',
				purple: '#7B61FF',
				sugar: '#FFFFFF',
				coco: '#2E2D29',
			},
			fontFamily: {
				sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
				work: ['Work Sans'],
			},
			boxShadow: {
				'coco': '2px 4px 8px 0 rgba(46,45,41,0.25)',
			},
		},
	},
} satisfies Config;
