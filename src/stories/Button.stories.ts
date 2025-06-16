import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button';
import { type ButtonProps } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		primary: { control: 'boolean' },
		size: { control: 'radio', options: ['small', 'medium', 'large'] },
		backgroundColor: { control: 'color' },
	},
	args: {
		variant: '',
	},
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Text: Story = {
	args: {
		variant: 'text',
	},
};

export const Hover: Story = {
	args: {
		variant: 'hover',
	},
};
