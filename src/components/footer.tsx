import Link from "next/link";
import { Card } from "./ui/card";

export function Footer() {
	return (
		<Card className='w-full bg-blue-700 text-white py-6 text-center mt-auto'>
			<p className='mt-2'>
				© {new Date().getFullYear()}{" "}
				<Link href='/admin' className='hover:text-gray-300'>
					Next Notes
				</Link>
			</p>
		</Card>
	);
}
