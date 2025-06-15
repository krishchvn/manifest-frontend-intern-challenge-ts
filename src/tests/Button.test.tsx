import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';
import { vi } from 'vitest';

describe('<Button>', () => {
	const onClick = vi.fn();
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('applies correct palette for primary '),
		() => {
			render(<Button variant='primary'>Continue</Button>);
			const btn = screen.getByRole('button', { name: 'Continue' });
			// console.log(btn);
			expect(btn.className.includes('bg-mint')).toBe(true);
		};

	it('applies correct palette for secondary '),
		() => {
			render(<Button variant='secondary'>Continue</Button>);
			const btn = screen.getByRole('button', { name: 'Continue' });
			// console.log(btn);
			expect(btn.className.includes('border-mint')).toBe(true);
		};

	it('applies correct palette for text '),
		() => {
			render(<Button variant='text'>Continue</Button>);
			const btn = screen.getByRole('button', { name: 'Continue' });
			console.log(btn);
			expect(btn.className.includes('bg-transparent')).toBe(true);
		};

	it('applies correct palette for hover '),
		() => {
			render(<Button variant='hover'>Continue</Button>);
			const btn = screen.getByRole('button', { name: 'Continue' });
			console.log(btn);
			expect(btn.className.includes('shadow-coco')).toBe(true);
		};

	it('does not fire onClick when button is disabled', () => {
		render(
			<Button variant='primary' disabled onClick={onClick}>
				Continue
			</Button>
		);
		const btn = screen.getByRole('button', { name: 'Continue' });
		fireEvent.click(btn);
		expect(onClick).not.toHaveBeenCalled();
	});
});
