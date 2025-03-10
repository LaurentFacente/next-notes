import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import CitationForm from "../note-form";

export default async function Page(props: {
	params: Promise<{ citationsId: string }>;
	SearchParams: Promise<Record<string, string | string[]>>;
}) {
	const params = await props.params;
	const citationsId = params.citationsId;
	const citation = await prisma.citation.findFirst({
		where: {
			id: Number(params.citationsId),
		},
	});

	if (!citation) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Note {citationsId} not found</CardTitle>
				</CardHeader>
			</Card>
		);
	}
	return <CitationForm citation={citation} />;
}
