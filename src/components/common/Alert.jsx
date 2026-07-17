const TYPE_CLASS = {
  info: 'alert--info',
  warning: 'alert--warning',
  error: 'alert--error',
  success: 'alert--success',
};

export default function Alert({ type = 'info', title, message, timestamp }) {
  return (
    <div className={`alert ${TYPE_CLASS[type]}`}>
      <span className="alert-dot" />
      <div className="alert-body">
        <div className="alert-title">{title}</div>
        {message && <div className="alert-message">{message}</div>}
      </div>
      {timestamp && <div className="alert-timestamp">{timestamp}</div>}
    </div>
  );
}
