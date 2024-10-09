import React from 'react';

const OptimizedImg = ({ src, alt, className = '' }) => <img src={src} alt={alt} loading="lazy" className={className} />;

export default OptimizedImg;
