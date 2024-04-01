const Clock = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.00004 15.1666C11.6819 15.1666 14.6667 12.1819 14.6667 8.49998C14.6667 4.81808 11.6819 1.83331 8.00004 1.83331C4.31814 1.83331 1.33337 4.81808 1.33337 8.49998C1.33337 12.1819 4.31814 15.1666 8.00004 15.1666Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M8 4.5V8.5H11' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default Clock;
