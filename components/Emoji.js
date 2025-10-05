// Emoji component to ensure proper rendering across all browsers
const Emoji = ({ children, label = '', className = '' }) => {
  const classes = ['emoji', className].filter(Boolean).join(' ');

  return (
    <span
      className={classes}
      role="img"
      aria-label={label || 'emoji'}
      aria-hidden={!label}
      style={{
        fontFamily: "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji', 'EmojiSymbols', 'EmojiOne Color', 'Twemoji Mozilla', sans-serif",
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'baseline',
        fontSize: 'inherit'
      }}
    >
      {children}
    </span>
  );
};

export default Emoji;
