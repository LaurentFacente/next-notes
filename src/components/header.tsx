import Link from "next/link";
import { Card } from "./ui/card";

export function Header() {
	return (
		<Card className=' bg-blue-700 w-full text-white py-6 text-center mt-auto'>
			<Link href='/admin'>Next Notes</Link>
		</Card>
	);
}
