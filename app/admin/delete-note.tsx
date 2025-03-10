"use client";

import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteNotesAction } from "./notes/notes-actions";

export default function DeleteNoteButton(props: { id: number }) {
	const [isConfirmed, setIsConfirmed] = useState(false);
	const router = useRouter();

	const onDelete = async () => {
		const result = await deleteNotesAction(props.id);
		if (result.message) {
			alert("Note deleted successfully");
			router.refresh();
		}
	};
	return (
		<Button
			size={"sm"}
			variant={isConfirmed ? "destructive" : "outline"}
			onClick={() => {
				if (isConfirmed) {
					onDelete();
				} else setIsConfirmed(true);
			}}
		>
			❌
		</Button>
	);
}
