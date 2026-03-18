'use client';

/**
 * TextBlock — scrollable container with visual boundary
 * @param {React.ReactNode} children
 * @param {number} [maxHeight] - max height in px (default 560)
 * @param {string} [className]
 */
export default function TextBlock({ children, maxHeight = 560, className = '' }) {
  return (
    <div
      className={`scrollable-text ${className}`}
      style={{ maxHeight, overflowY: 'auto', paddingRight: 16 }}
    >
      {children}
    </div>
  );
}
