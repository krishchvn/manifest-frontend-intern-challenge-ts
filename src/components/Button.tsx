import clsx from 'clsx';
import React from 'react';
import type { FC, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'text' | 'hover';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	disabled,
	className,
	children,
	...rest
}) => {
	const base =
		'px-4 py-1.5 text-[8px] md:px-6 md:py-2 md:text-xs ' +
		'rounded-md font-semibold  whitespace-nowrap';

	const palette: Record<Variant, string> = {
		primary: clsx(''),
		secondary: clsx(
			!disabled && 'border-2 border-mint text-mint bg-transparent',
			disabled && 'border-2 border-coco1 text-coco3  cursor-not-allowed'
		),
		text: clsx(
			!disabled && 'bg-transparent text-mint',
			disabled && 'bg-transparent text-coco3 cursor-not-allowed'
		),
		hover: clsx(''),
	};

	return (
		<button
			{...rest}
			disabled={disabled}
			className={clsx(base, palette[variant], className)}
		>
			{children}
		</button>
	);
};

type HeadProps = { children: ReactNode };

const ColHead: FC<HeadProps> = ({ children }) => (
	<div className='text-center text-[10px] md:text-sm font-semibold tracking-wide text-mint9'>
		{children}
	</div>
);

const RowHead: FC<HeadProps> = ({ children }) => (
	<div className='text-left text-[10px] md:text-sm font-semibold uppercase text-mint9'>
		{children}
	</div>
);

const ButtonsShowcase: React.FC = () => (
	<div className='pl-8 md:pl-24 pr-4 md:pr-8 py-8 md:py-16'>
		<div className='flex'>
			{/* left column: row labels */}
			<div className='grid w-[69px] md:w-[120px] gap-y-1 md:gap-y-2 mr-4 md:mr-8 pt-11 md:pt-16'>
				<RowHead>PRIMARY</RowHead>
				<RowHead>SECONDARY</RowHead>
				<RowHead>TEXT</RowHead>
				<RowHead>HOVER</RowHead>
			</div>

			<div className='flex-1 '>
				<div className='px-4 pb-2 md:pb-3 grid grid-cols-4 gap-x-2  '>
					<ColHead>ACTIVE</ColHead>
					<ColHead>DISABLED</ColHead>
					<ColHead>ON&nbsp;CLICK</ColHead>
					<ColHead>INVERTED</ColHead>
				</div>

				<div
					className='
            grid grid-cols-4
            gap-x-2 gap-y-4 md:gap-x-8 md:gap-y-6
            border border-dashed border-purple
            p-4 md:p-6 rounded-lg
          '
				>
					<Button className='bg-mint text-sugar'>Continue</Button>
					<Button
						disabled
						className='bg-disabled text-coco5 cursor-not-allowed'
					>
						Continue
					</Button>
					<Button className='bg-mint9 text-sugar'>Continue</Button>
					<div />

					<Button variant='secondary'>Continue</Button>
					<Button variant='secondary' disabled>
						Continue
					</Button>
					<Button variant='secondary'>Continue</Button>
					<div />

					<Button variant='text'>Continue</Button>
					<Button variant='text' disabled>
						Continue
					</Button>
					<Button variant='text' className='text-mint9'>
						Continue
					</Button>
					<div />

					<Button className=' bg-mint text-sugar hover:shadow-coco'>
						Continue
					</Button>
					<Button
						disabled
						className=' bg-disabled text-coco5 cursor-not-allowed hover: shadow-coco'
					>
						Continue
					</Button>
					<Button className=' bg-mint9 text-sugar hover:shadow-coco'>
						Continue
					</Button>
					<Button
						variant='hover'
						className='border-2 border-mint text-mint bg-transparent hover:shadow-coco'
					>
						Continue
					</Button>
				</div>
			</div>
		</div>
	</div>
);

export { ButtonsShowcase as default };
export type { ButtonProps };
