'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

/* ── Icons ─────────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ display: 'block' }}>
      <polygon points="6,3 25,14 6,25" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ display: 'block' }}>
      <rect x="4"  y="3" width="8" height="22" rx="2" fill="currentColor" />
      <rect x="16" y="3" width="8" height="22" rx="2" fill="currentColor" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: 'block' }}>
      <path d="M3 8h4l5-5v16l-5-5H3z" fill="currentColor" />
      <line x1="16" y1="8" x2="22" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="8" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: 'block' }}>
      {/* Speaker cone */}
      <path d="M3 8h4l5-5v16l-5-5H3z" fill="currentColor" />
      {/* Inner arc */}
      <path d="M15 8.5a4 4 0 0 1 0 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Outer arc */}
      <path d="M17.5 5.5a8 8 0 0 1 0 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'block' }}>
      <path d="M3 3h5M3 3v5M17 3h-5M17 3v5M3 17h5M3 17v-5M17 17h-5M17 17v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Helpers ────────────────────────────────────────────────── */
function fmt(s) {
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${ss}`;
}

/* ── Component ──────────────────────────────────────────────── */
export default function VideoPlayer({
  src,
  autoPlay = true,
  loop = false,
  className = '',
  style = {},
}) {
  const videoRef    = useRef(null);
  const wrapRef     = useRef(null);
  const progressRef = useRef(null);
  const hideTimer   = useRef(null);

  const [playing,      setPlaying]      = useState(false);
  const [muted,        setMuted]        = useState(false);
  const [current,      setCurrent]      = useState(0);
  const [duration,     setDuration]     = useState(0);
  const [buffered,     setBuffered]     = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [centerPulse,  setCenterPulse]  = useState(false); // flash the big centre icon

  /* ── Autoplay ───────────────────────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (autoPlay) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [src, autoPlay]);

  /* ── Video events ───────────────────────────────────────── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay    = () => setPlaying(true);
    const onPause   = () => setPlaying(false);
    const onEnded   = () => setPlaying(false);
    const onLoaded  = () => setDuration(v.duration || 0);
    const onTime    = () => {
      setCurrent(v.currentTime);
      // buffered
      if (v.buffered.length) {
        setBuffered((v.buffered.end(v.buffered.length - 1) / v.duration) * 100);
      }
    };

    v.addEventListener('play',             onPlay);
    v.addEventListener('pause',            onPause);
    v.addEventListener('ended',            onEnded);
    v.addEventListener('loadedmetadata',   onLoaded);
    v.addEventListener('timeupdate',       onTime);
    return () => {
      v.removeEventListener('play',           onPlay);
      v.removeEventListener('pause',          onPause);
      v.removeEventListener('ended',          onEnded);
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('timeupdate',     onTime);
    };
  }, []);

  /* ── Auto-hide controls ─────────────────────────────────── */
  const resetHide = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    resetHide();
    return () => clearTimeout(hideTimer.current);
  }, [resetHide]);

  /* ── Actions ────────────────────────────────────────────── */
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); } else { v.pause(); }
    // flash centre icon
    setCenterPulse(true);
    setTimeout(() => setCenterPulse(false), 600);
    resetHide();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    resetHide();
  };

  const seek = (e) => {
    e.stopPropagation();
    const bar = progressRef.current;
    const v   = videoRef.current;
    if (!bar || !v || !duration) return;
    const rect = bar.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * duration;
    resetHide();
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
    resetHide();
  };

  const pct = duration ? (current / duration) * 100 : 0;

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <div
      ref={wrapRef}
      className={className}
      onMouseMove={resetHide}
      onTouchStart={resetHide}
      style={{
        position: 'relative',
        width: '100%',
        background: '#000',
        overflow: 'hidden',
        cursor: showControls ? 'default' : 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        ...style,
      }}
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onClick={togglePlay}
        style={{ width: '100%', display: 'block', cursor: 'pointer' }}
      />

      {/* ── Centre play/pause pulse ── */}
      {centerPulse && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          <div style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: 'rgba(0,118,182,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            animation: 'vpPulse 0.55s ease forwards',
          }}>
            {playing ? <PauseIcon /> : <PlayIcon />}
          </div>
        </div>
      )}

      {/* ── Persistent centre play button (when paused + controls visible) ── */}
      {!playing && !centerPulse && (
        <div
          onClick={togglePlay}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 8,
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            background: 'rgba(0,118,182,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            transition: 'transform 0.15s ease, background 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#16BCEF';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,118,182,0.9)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <PlayIcon />
          </div>
        </div>
      )}

      {/* ── Controls bar ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '32px 20px 16px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        zIndex: 9,
        opacity: showControls ? 1 : 0,
        transition: 'opacity 0.35s ease',
        pointerEvents: showControls ? 'auto' : 'none',
      }}>

        {/* Progress bar */}
        <div
          ref={progressRef}
          onClick={seek}
          style={{
            width: '100%',
            height: 5,
            background: 'rgba(255,255,255,0.25)',
            borderRadius: 3,
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          {/* Buffered */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 3,
            background: 'rgba(255,255,255,0.20)',
            width: `${buffered}%`,
          }} />
          {/* Played — port-light-blue */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 3,
            background: '#16BCEF',
            width: `${pct}%`,
            transition: 'width 0.25s linear',
          }} />
          {/* Thumb */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: `${pct}%`,
            transform: 'translate(-50%, -50%)',
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 0 4px rgba(0,0,0,0.5)',
            transition: 'left 0.25s linear',
          }} />
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: '#0076B6',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#16BCEF'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#0076B6'; }}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          {/* Mute */}
          <button
            onClick={toggleMute}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              flexShrink: 0,
              opacity: 0.85,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.85; }}
          >
            {muted ? <MuteIcon /> : <VolumeIcon />}
          </button>

          {/* Time */}
          <span style={{
            fontFamily: 'BlenderPro, monospace',
            fontSize: 18,
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}>
            {fmt(current)} / {fmt(duration)}
          </span>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Fullscreen */}
          <button
            onClick={goFullscreen}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              flexShrink: 0,
              opacity: 0.85,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.85; }}
          >
            <FullscreenIcon />
          </button>
        </div>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes vpPulse {
          0%   { opacity: 1;   transform: scale(1); }
          60%  { opacity: 0.6; transform: scale(1.35); }
          100% { opacity: 0;   transform: scale(1.6); }
        }
      `}</style>
    </div>
  );
}