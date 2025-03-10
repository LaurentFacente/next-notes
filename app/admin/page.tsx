import { buttonVariants } from "@/src/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import DeleteNoteButton from "./delete-note";

export default async function Page() {
	const notes = await prisma.note.findMany();
	return (
		<>
			<Card className='flex space-between'>
				<CardHeader>
					<CardTitle>Welcome to Next Notes!</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col space-y-6'>
					<Link
						href='/admin/notes/new'
						className={buttonVariants({ size: "lg", variant: "outline" })}
					>
						Create Note 📝
					</Link>
				</CardContent>
			</Card>
			<Card className='flex space-between'>
				<CardHeader>
					<CardTitle>Notes</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col space-y-6 '>
					{notes.map((note) => (
						<Card className='p-3' key={note.id}>
							<div className='flex justify-between'>
								<p className='italic'>{note.text}</p>
								<DeleteNoteButton id={note.id} />
							</div>
							<div className='flex justify-between'>
								<p>{note.author}</p>
								<Link
									href={`/admin/notes/${note.id}`}
									className={buttonVariants({ size: "sm", variant: "outline" })}
								>
									✏️
								</Link>
							</div>
						</Card>
					))}
				</CardContent>
			</Card>
		</>
	);
}
