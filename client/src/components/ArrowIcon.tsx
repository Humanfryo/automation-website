type ArrowIconProps = { size?: number };

export default function ArrowIcon({ size = 14 }: ArrowIconProps) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
