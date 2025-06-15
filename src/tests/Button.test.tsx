// Button.test.tsx
// -----------------------------------------------------------------------------
// Unit-tests for <Button> using Jest + React Testing Library.
//
// Run with:  pnpm jest   (or yarn / npm test depending on your toolchain)
// -----------------------------------------------------------------------------

// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';

/* -------------------------------------------------------------------------- */
/* helper                                                                     */
/* -------------------------------------------------------------------------- */
const renderBtn = (ui = <Button>Click me</Button>) => render(ui);

describe('<Button>', () => {
	/* ─────────────────────────────────────────────────────────────── Rendering */

	it('renders its children', () => {
		renderBtn(<Button>Howdy</Button>);
		expect(screen.getByRole('button')).toHaveTextContent('Howdy');
	});

	/* ─────────────────────────────────────────────────────────────── Variants */

	const paletteCases: [Parameters<typeof Button>[0]['variant'], RegExp][] = [
		['primary', /bg-mint/], // active class for primary
		['secondary', /border-mint/], // distinctive class for secondary
		['text', /bg-transparent/], // text variant is transparent
		['hover', /shadow-coco|/], // hover variant relies on external classes
	];

	it.each(paletteCases)(
		'applies correct palette for variant "%s"',
		(variant, expected) => {
			renderBtn(<Button variant={variant}>X</Button>);
			expect(screen.getByRole('button').className).toMatch(expected);
		}
	);

	/* ─────────────────────────────────────────────────────────────── Disabled */

	it('adds disabled attribute and style', () => {
		renderBtn(<Button disabled>Disabled</Button>);
		const btn = screen.getByRole('button');
		expect(btn).toBeDisabled();
		expect(btn.className).toMatch(/cursor-not-allowed/);
	});

	/* ─────────────────────────────────────────────────────────────── Clicks */

	it('fires onClick when enabled', async () => {
		const user = userEvent.setup();
		const spy = jest.fn();
		renderBtn(<Button onClick={spy}>Fire</Button>);
		await user.click(screen.getByRole('button'));
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('does NOT fire onClick when disabled', async () => {
		const user = userEvent.setup();
		const spy = jest.fn();
		renderBtn(
			<Button disabled onClick={spy}>
				NoFire
			</Button>
		);
		await user.click(screen.getByRole('button'));
		expect(spy).not.toHaveBeenCalled();
	});

	/* ─────────────────────────────────────────────────────────────── Prop pass-through */

	it('forwards extra HTML props', () => {
		renderBtn(
			<Button type='submit' data-testid='sentinel'>
				Submit
			</Button>
		);
		const btn = screen.getByTestId('sentinel');
		expect(btn).toHaveAttribute('type', 'submit');
	});

	/* ─────────────────────────────────────────────────────────────── Snapshot (optional) */

	it('matches snapshot (primary variant)', () => {
		const { container } = renderBtn(<Button>Snap</Button>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
