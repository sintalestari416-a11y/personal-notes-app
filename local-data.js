import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';
import { Link } from 'react-router-dom';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState(getActiveNotes());

  const title = searchParams.get('title') || '';

  function onSearchHandler(keyword) {
    setSearchParams({ title: keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(title.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      
      <SearchBar keyword={title} keywordChange={onSearchHandler} />
      
      {}
      {filteredNotes.length > 0 
        ? <NoteList notes={filteredNotes} />
        : <section className="notes-list-empty">
            <p className="notes-list-empty">Tidak ada catatan.</p>
          </section>
      }

      <div className="homepage__action">
        <Link to="/notes/new" className="action" title="Tambah">➕</Link>
      </div>
    </section>
  );
}

export default HomePage;