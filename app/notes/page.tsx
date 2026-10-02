import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

const PER_PAGE = 12;

export default async function NotesPage() {
  const res = await fetchNotes({ perPage: PER_PAGE });
  console.log("res", res);

  return <>{res.notes?.length > 0 && <NoteList notes={res.notes} />}</>;
}
