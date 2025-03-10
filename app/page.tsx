import { buttonVariants } from "@/src/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";

export default function Home() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='m-auto'>Welcome to Codex Memoriae !</CardTitle>
			</CardHeader>
			<CardContent className='m-auto '>
				<Link
					href='/admin'
					className={buttonVariants({
						size: "lg",
						variant: "outline",
					})}
				>
					Get Started ! Write your first note !
				</Link>
			</CardContent>
		</Card>
	);
}
