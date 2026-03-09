// Neo Brutalist SVG Components
export const StarShape = ({ color, size = 100, style }: { color: string, size?: number, style?: any }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="shape" style={style}>
    <path 
      d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="4"
    />
  </svg>
);

export const LEDShape = ({ color, style }: { color: string, style?: any }) => (
  <svg width="40" height="70" viewBox="0 0 40 70" className="shape" style={style}>
    <path d="M12 50 L12 70 M28 50 L28 70" stroke="#000" strokeWidth="4" />
    <rect x="5" y="5" width="30" height="40" rx="15" fill={color} stroke="#000" strokeWidth="4" />
    <rect x="5" y="40" width="30" height="8" fill="#000" />
    <rect x="10" y="10" width="8" height="15" rx="4" fill="white" opacity="0.3" />
  </svg>
);

export const SwitchShape = ({ style }: { style?: any }) => (
  <svg width="60" height="80" viewBox="0 0 60 80" className="shape" style={style}>
    <rect x="5" y="5" width="50" height="70" rx="10" fill="white" stroke="#000" strokeWidth="4" />
    <circle cx="30" cy="25" r="12" fill="var(--neo-orange)" stroke="#000" strokeWidth="4" />
    <rect x="25" y="45" width="10" height="20" rx="5" fill="#000" />
  </svg>
);

export const ChipShape = ({ style }: { style?: any }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="shape" style={style}>
    {[0, 1, 2].map(i => (
      <g key={i}>
        <rect x="0" y={20 + i * 25} width="15" height="6" fill="#000" />
        <rect x="85" y={20 + i * 25} width="15" height="6" fill="#000" />
      </g>
    ))}
    <rect x="15" y="10" width="70" height="80" rx="4" fill="#222" stroke="#000" strokeWidth="4" />
    <circle cx="25" cy="20" r="3" fill="#000" />
    <text x="50" y="55" font-family="var(--font-mono)" font-size="10" fill="white" text-anchor="middle" font-weight="bold">FWBR
      </text>
  </svg>
);

export const BlobShape = ({ color, size = 150, style }: { color: string, size?: number, style?: any }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className="shape" style={style}>
    <path 
      d="M50,20 C80,10 120,10 150,20 C180,30 190,70 180,100 C170,130 150,170 120,180 C90,190 50,180 30,150 C10,120 10,80 20,50 C30,20 40,30 50,20 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="6"
    />
  </svg>
);

export const ZigZag = ({ color, style }: { color: string, style?: any }) => (
  <svg width="200" height="40" viewBox="0 0 200 40" className="shape" style={style}>
    <path 
      d="M0 20 L25 5 L50 35 L75 5 L100 35 L125 5 L150 35 L175 5 L200 35" 
      fill="none" 
      stroke={color} 
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
