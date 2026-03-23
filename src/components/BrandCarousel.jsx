import React, { useRef } from 'react';

const headerBarStyle = {
  backgroundColor: '#6b2d7a',
  color: 'white',
  textAlign: 'center',
  padding: '10px 20px',
  fontSize: '1.1rem',
  fontWeight: 500,
  fontFamily: 'sans-serif',
  marginBottom: 0,
  borderRadius: '12px 12px 0 0',
};

const carouselOuterStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#b8e600',
  border: '4px solid #b8e600',
  borderRadius: '50px',
  padding: '12px 8px',
  gap: '8px',
  maxWidth: '100%',
  overflow: 'hidden',
};

const arrowButtonStyle = {
  flexShrink: 0,
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: '#b8e600',
  border: '3px solid #7ba000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
  minWidth: '44px',
};

const carouselInnerStyle = {
  display: 'flex',
  gap: '6px',
  overflowX: 'auto',
  padding: '4px 8px',
  scrollBehavior: 'smooth',
  flex: 1,
  minWidth: 0,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

export const brandButtonStyle = {
  flexShrink: 0,
  width: '70px',
  height: '70px',
  border: '3px solid #7ba000',
  borderRadius: '8px',
  backgroundColor: 'white',
  padding: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const brandImgStyle = { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' };

export function BrandCarousel({ children }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', maxWidth: '100%' }}>
      <div style={headerBarStyle}>Choose a Brand:</div>
      <div style={{ ...carouselOuterStyle, width: 'min(95%, 900px)' }}>
        <button type="button" onClick={() => scrollCarousel('left')} style={arrowButtonStyle} aria-label="Scroll left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div ref={carouselRef} style={carouselInnerStyle} className="brand-carousel-scroll">
          {children}
        </div>
        <button type="button" onClick={() => scrollCarousel('right')} style={arrowButtonStyle} aria-label="Scroll right">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
