'use client';

/**
 * Header Component
 * @param {string} title - Required, Blender Pro Bold
 * @param {string} [subtitle] - Optional, Cambon Regular
 * @param {string} [accentColor] - Optional overrride for the accent bar
 * @param {'light'|'dark'} [theme='light']
 */
export default function Header({
  title,
  subtitle,
  accentColor = 'var(--port-blue)',
  theme = 'light',
}) {
  const textColor = theme === 'dark' ? '#fff' : 'var(--port-dark)';
  const subColor  = theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'var(--port-gray)';

  return (
    <header
      style={{
        paddingTop: 'var(--sp-6)',
        paddingBottom: 'var(--sp-4)',
        borderBottom: `4px solid ${accentColor}`,
        marginBottom: 'var(--sp-6)',
      }}
    >
      <h1
        className="text-page-title animate-fade-in"
        style={{ color: textColor }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="font-cambon animate-fade-in stagger-1"
          style={{
            fontSize: 32,
            color: subColor,
            marginTop: 'var(--sp-2)',
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
