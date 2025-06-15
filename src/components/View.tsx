import Button from './Button';

function DesktopView() {
	return (
		<div className=''>
			<div className='flex items-center w-full h-16 md:h-24 rounded-xl bg-orange6 border border-coco3 '>
				<div className='flex items-center  w-full h-24 rounded-full '>
					<p
						className='block md:hidden px-12
              text-coco font-work text-[28px] font-semibold leading-none whitespace-nowrap'
					>
						Mobile Button
					</p>

					<p
						className='hidden md:block px-16
              text-coco font-work text-4xl font-semibold leading-none whitespace-nowrap'
					>
						Desktop Button
					</p>
				</div>
			</div>
			<div className=''>
				<Button />
			</div>
		</div>
	);
}

export default DesktopView;
