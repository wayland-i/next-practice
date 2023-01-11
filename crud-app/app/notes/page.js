

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/ian_ian/records')
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

        </div>
    );
}


function Note({ note }: any) {
    const { id, title, content, created } = note || {};
}
