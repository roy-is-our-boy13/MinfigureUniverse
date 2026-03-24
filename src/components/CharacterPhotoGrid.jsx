import React, { useCallback, useEffect, useId, useState } from 'react';

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  maxWidth: '800px',
  margin: '1rem auto',
  padding: '0 20px',
};

const cardButtonStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
};

const placeholderStyle = {
  height: '100px',
  background: '#ddd',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.85rem',
  color: '#555',
};

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '16px',
};

const dialogStyle = {
  position: 'relative',
  backgroundColor: '#fff',
  borderRadius: '12px',
  maxWidth: 'min(90vw, 420px)',
  maxHeight: '90vh',
  overflow: 'auto',
  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'rgba(0,0,0,0.55)',
  color: '#fff',
  fontSize: '1.25rem',
  lineHeight: 1,
  cursor: 'pointer',
  zIndex: 1,
};

export function photoUrlForName(name) {
  const seed = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `https://picsum.photos/seed/${seed}/400/520`;
}

/**
 * Grid of character cards; each opens a modal with a placeholder photo (picsum seed per name).
 * Pass your character name array as `names`.
 */
export default function CharacterPhotoGrid({ names }) {
  const [openName, setOpenName] = useState(null);
  const titleId = useId();
  const closeModal = useCallback(() => setOpenName(null), []);

  useEffect(() => {
    if (!openName) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openName, closeModal]);

  return (
    <>
      <div style={gridContainerStyle}>
        {names.map((name) => (
          <button
            key={name}
            type="button"
            style={cardButtonStyle}
            onClick={() => setOpenName(name)}
            aria-label={`Open photo for ${name}`}
          >
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{name}</h3>
            <div style={placeholderStyle}>Tap to view photo</div>
          </button>
        ))}
      </div>

      {openName && (
        <div style={overlayStyle} role="presentation" onClick={closeModal}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            style={dialogStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" style={closeBtnStyle} onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div style={{ padding: '20px 16px 16px' }}>
              <h3 id={titleId} style={{ margin: '0 0 12px', textAlign: 'center' }}>
                {openName}
              </h3>
              <img
                src={photoUrlForName(openName)}
                alt={openName}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
