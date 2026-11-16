export function StarDoodle({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <path
        d="M50 5c4 28 17 41 45 45-28 4-41 17-45 45-4-28-17-41-45-45 28-4 41-17 45-45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartDoodle({ className = "", filled = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 96"
      fill="none"
      className={className}
    >
      <path
        d="M50 84C24 67 10 48 19 31 27 16 44 17 50 33c6-17 24-18 33-2 9 17-5 36-33 53Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Paperclip({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.07-8.08"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
