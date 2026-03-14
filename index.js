import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <section className="notes-list-empty"><p>Catatan tidak ditemukan!</p></section>;
  }

  function onDeleteHandler() {
    deleteNote(id);
    navigate('/');
  }

  function onArchiveHandler() {
    archiveNote(id);
    navigate('/');
  }

  function onUnarchiveHandler() {
    unarchiveNote(id);
    navigate('/archives');
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{parser(note.body)}</div>
      
      <div className="detail-page__action">
        {note.archived ? (
          <button className="action" title="Aktifkan" onClick={onUnarchiveHandler}>📤</button>
        ) : (
          <button className="action" title="Arsipkan" onClick={onArchiveHandler}>📥</button>
        )}
        <button className="action" title="Hapus" onClick={onDeleteHandler}>🗑️</button>
      </div>
    </section>
  );
}

export default DetailPage;