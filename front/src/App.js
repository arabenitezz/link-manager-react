import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

const API_URL = 'http://localhost:5000/api';

const App = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({ title: '', url: '', tags: '' });
  const [newComment, setNewComment] = useState({ text: '', linkId: '' });
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch(`${API_URL}/links`);
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };

  const handleSubmitLink = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/links`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newLink,
          tags: newLink.tags.split(',').map(tag => tag.trim())
        })
      });
      const data = await response.json();
      setLinks([...links, data]);
      setNewLink({ title: '', url: '', tags: '' });
    } catch (error) {
      console.error('Error creating link:', error);
    }
  };

  const handleVote = async (id, voteType) => {
    try {
      const response = await fetch(`${API_URL}/links/${id}/vote`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ voteType })
      });
      const updatedLink = await response.json();
      setLinks(links.map(link => 
        link._id === updatedLink._id ? updatedLink : link
      ));
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      await response.json();
      if (selectedLink) {
        const linkResponse = await fetch(`${API_URL}/links/${selectedLink._id}`);
        const updatedLink = await linkResponse.json();
        setSelectedLink(updatedLink);
      }
      setNewComment({ text: '', linkId: '' });
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <body>
    <Header />
    <div className="container">
    <Banner />
      <div className="card">
        <h2>Añadir nuevo enlace</h2>
        <form onSubmit={handleSubmitLink} className="form">
          <input
            type="text"
            placeholder="Título"
            value={newLink.title}
            onChange={(e) => setNewLink({...newLink, title: e.target.value})}
          />
          <input
            type="url"
            placeholder="URL"
            value={newLink.url}
            onChange={(e) => setNewLink({...newLink, url: e.target.value})}
          />
          <input
            type="text"
            placeholder="Tags (separados por comas)"
            value={newLink.tags}
            onChange={(e) => setNewLink({...newLink, tags: e.target.value})}
          />
          <button type="submit">Añadir enlace</button>
        </form>
      </div>

      <h1>Lista de enlaces</h1>

      <div className="links-container">
        {links.map(link => (
          <div key={link._id} className="link-card">
            <div className="link-content">
              <div className="link-info">
                <h2>{link.title}</h2>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
                <div className="tags">
                  {link.tags?.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="vote-section">
                <button onClick={() => handleVote(link._id, 'up')}>👍</button>
                <span className="vote-count">{link.votes || 0}</span>
                <button onClick={() => handleVote(link._id, 'down')}>👎</button>
                <button onClick={() => setSelectedLink(link)}>💬</button>
              </div>
            </div>

            {selectedLink?._id === link._id && (
              <div className="comments-section">
                <h3>Comentarios</h3>
                <form onSubmit={handleSubmitComment} className="comment-form">
                  <input
                    type="text"
                    placeholder="Añadir comentario"
                    value={newComment.text}
                    onChange={(e) => setNewComment({
                      text: e.target.value,
                      linkId: link._id
                    })}
                  />
                  <button type="submit">Comentar</button>
                </form>
                <div className="comments-list">
                  {selectedLink.comments?.map(comment => (
                    <div key={comment._id} className="comment">
                      {comment.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  <Footer />  
    </body>
  );
};

export default App;