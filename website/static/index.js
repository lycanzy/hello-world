function deleteNote(noteId) {
    fetch(`/delete_note/${noteId}`, {
        method: 'Post',
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
        window.location.href = '/';
    });
}