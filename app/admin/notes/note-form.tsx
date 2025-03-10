"use client";

import { Button } from "@/src/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Note } from "@prisma/client";
import { createNotesAction, updateNotesAction } from "./notes-actions";

export default function noteForm(props: { note?: Note }) {
	const onSubmit = async (FormData: FormData) => {
		let error: null | string = null;
		if (props.note) {
			const json = await updateNotesAction(props.note.id, {
				author: String(FormData.get("author")),
				text: String(FormData.get("text")),
			});
			error = json.error;
		} else {
			const json = await createNotesAction({
				author: String(FormData.get("author")),
				text: String(FormData.get("text")),
			});
			error = json.error;
		}
		if (error) {
			alert(error);
		}
	};

	return (
		<Card className='p-6'>
			<CardHeader>
				<CardTitle>{props.note ? "Update" : "Create"} Note</CardTitle>
			</CardHeader>
			<CardContent>
				<form
					className='flex flex-col space-y-4'
					action={async (formData) => {
						await onSubmit(formData);
					}}
				>
					<Label className='flex flex-col'>
						Note
						<Input defaultValue={props.note?.text} name='text' />
					</Label>
					<Label className='flex flex-col'>
						Author
						<Input defaultValue={props.note?.author} name='author' />
					</Label>
					<Button className='bg-blue-700 mt-6' type='submit'>
						Submit
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
