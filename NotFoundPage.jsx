import React, { useState } from 'react';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  function onSaveHandler() {
    addNote({ title, body });
    navigate('/');
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input 
          className="add-new-page__input__title"
          placeholder="Catatan rahasia..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div 
          className="add-new-page__input__body"
          data-placeholder="Tuliskan isi catatan di sini..."
          contentEditable
          onInput={(e) => setBody(e.target.innerHTML)}
        />
      </div>
      <div className="add-new-page__action">
        <button className="action" title="Simpan" onClick={onSaveHandler}>✅</button>
      </div>
    </section>
  );
}

export default AddPage;