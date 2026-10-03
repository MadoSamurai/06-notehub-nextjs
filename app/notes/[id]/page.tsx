import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}
export default async function NoteDetail({ params }: NoteDetailsProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <>
      <NoteDetailsClient note={note} />
    </>
  );
}
