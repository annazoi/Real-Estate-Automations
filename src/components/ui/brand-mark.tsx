export default function BrandMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 3.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-1.9 4.1A2.6 2.6 0 0 0 4 12.5a2.6 2.6 0 0 0 1.4 4.6A2.5 2.5 0 0 0 7.8 20a2.3 2.3 0 0 0 1.7-.7" />
      <path d="M14.5 3.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 1.9 4.1A2.6 2.6 0 0 1 20 12.5a2.6 2.6 0 0 1-1.4 4.6A2.5 2.5 0 0 1 16.2 20a2.3 2.3 0 0 1-1.7-.7" />
      <path d="M9.5 3.5v13.8a2.3 2.3 0 0 1-1.7.7M14.5 3.5v13.8a2.3 2.3 0 0 0 1.7.7" />
      <path d="M7 8.5h1.5M15.5 8.5H17M6.3 13h2M15.7 13h2" />
    </svg>
  );
}
