"use server";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteNotesAction(id: number) {
	await prisma.note.delete({
		where: {
			id: id,
		},
	});

	return {
		message: "Note deleted successfully",
	};
}

export async function createNotesAction(citation: {
	text: string;
	author: string;
}) {
	const newNote = await prisma.note.create({
		data: {
			text: citation.text,
			author: citation.author,
		},
	});

	if (newNote) {
		redirect("/admin");
	}

	return {
		error: "Note not created",
	};
}

export async function updateNotesAction(
	id: number,
	note: {
		text: string;
		author: string;
	}
) {
	const newNote = await prisma.note.update({
		where: {
			id,
		},
		data: {
			text: note.text,
			author: note.author,
		},
	});

	if (newNote) {
		redirect("/admin");
	}

	return {
		error: "Note not created",
	};
}
