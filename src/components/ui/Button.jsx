export default function Button({
  children,
  onClick,
  primary = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${primary ? "btn-primary" : ""}`}
    >
      {children}
    </button>
  );
}