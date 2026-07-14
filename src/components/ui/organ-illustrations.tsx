import React from "react";

interface OrganIllustrationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function LiverIllustration({ className, ...props }: OrganIllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Background soft shadow/glow */}
      <circle cx="60" cy="60" r="48" fill="#FDF4F5" />
      
      {/* Vena Cava (Blue Vessel in Back) */}
      <path
        d="M66 18 C66 18 64 35 64 45 C64 55 66 85 66 102"
        stroke="#2563EB"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Hepatic Artery (Red Vessel in Back) */}
      <path
        d="M74 24 C74 24 73 38 73 48 C73 58 75 75 75 98"
        stroke="#DC2626"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Portal Vein (Purple Branch) */}
      <path
        d="M71 78 C71 78 77 84 84 86 M71 78 C71 78 75 90 79 93"
        stroke="#7C3AED"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Gallbladder (Green organ peeking under liver) */}
      <path
        d="M45 74 C41 71 39 74 38 79 C37 84 41 89 47 87 C53 85 55 79 53 74 C52 70 48 70 45 74 Z"
        fill="url(#paint_green_gall)"
        stroke="#15803D"
        strokeWidth="1.5"
      />
      <path
        d="M48 76 C46 75 45 76 44 78"
        stroke="#E0F2FE"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Main Liver Lobe (Reddish Brown) */}
      <path
        d="M26 56 C22 36 50 25 80 30 C98 33 108 43 105 58 C102 73 88 82 72 81 C60 80 50 72 45 71 C38 70 28 68 26 56 Z"
        fill="url(#paint_liver_red)"
        stroke="#7F1D1D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Left Liver Lobe Overlay for Depth */}
      <path
        d="M71 31 C71 31 73 45 68 56 C63 67 52 72 45 71 C38 70 28 68 26 56 C22 36 50 25 71 31 Z"
        fill="url(#paint_liver_left)"
        stroke="#7F1D1D"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Highlights/Details */}
      <path
        d="M36 44 C42 36 62 33 76 35"
        stroke="#FCA5A5"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M84 41 C92 46 99 53 97 60"
        stroke="#FCA5A5"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="paint_liver_red" x1="26" y1="30" x2="105" y2="81" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="paint_liver_left" x1="26" y1="30" x2="71" y2="71" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="paint_green_gall" x1="38" y1="70" x2="53" y2="89" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StomachIllustration({ className, ...props }: OrganIllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Background soft shadow/glow */}
      <circle cx="60" cy="60" r="48" fill="#ECFDF5" />

      {/* Esophagus (Top Tube) */}
      <path
        d="M72 15 C72 15 76 34 74 46 C72 58 64 68 56 72"
        stroke="url(#paint_stomach_esoph)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Duodenum (Lower Left Curve) */}
      <path
        d="M48 84 C38 84 26 78 22 66 C18 54 22 42 30 38 C34 36 38 42 36 46 C34 50 28 54 28 62 C28 70 38 74 46 74"
        stroke="url(#paint_stomach_duod)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Stomach Body (J-Shape) */}
      <path
        d="M72 42 C85 45 106 54 104 74 C102 94 76 102 58 98 C40 94 36 84 48 84 C60 84 66 74 66 66 C66 58 64 48 72 42 Z"
        fill="url(#paint_stomach_body)"
        stroke="#991B1B"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Highlights & Textures */}
      <path
        d="M82 52 C94 56 97 66 96 74 C95 82 86 92 72 93"
        stroke="#FECACA"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M46 88 C54 94 62 94 68 93"
        stroke="#F87171"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="paint_stomach_body" x1="40" y1="42" x2="104" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        <linearGradient id="paint_stomach_esoph" x1="72" y1="15" x2="56" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="paint_stomach_duod" x1="22" y1="38" x2="46" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PancreasIllustration({ className, ...props }: OrganIllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Background soft shadow/glow */}
      <circle cx="60" cy="60" r="48" fill="#FFFBEB" />

      {/* Gallbladder (Green pear shape on top) */}
      <path
        d="M24 24 C18 24 16 35 20 42 C24 50 32 54 36 50 C40 46 38 38 34 32 C30 26 30 24 24 24 Z"
        fill="url(#paint_panc_gall)"
        stroke="#166534"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Bile Duct (Green Tube connecting to Duodenum) */}
      <path
        d="M32 46 C32 46 36 54 44 56 C52 58 54 68 54 74"
        stroke="#22C55E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Duodenum (Pink Loop C-shape wrapping head of pancreas) */}
      <path
        d="M58 35 C42 35 34 46 34 58 C34 70 42 82 58 82 C74 82 82 86 86 94"
        stroke="url(#paint_panc_duod)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pancreas (Yellow-Orange textured leaf shape) */}
      {/* Body/Tail extending to the right and upward */}
      <path
        d="M52 64 C64 64 78 58 90 52 C102 46 108 34 104 26 C100 18 88 24 78 32 C68 40 56 46 52 48 C44 50 42 58 52 64 Z"
        fill="url(#paint_pancreas)"
        stroke="#C2410C"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Pancreas Texture Details (Lobules) */}
      <circle cx="62" cy="52" r="2" fill="#EA580C" />
      <circle cx="70" cy="46" r="2.5" fill="#EA580C" />
      <circle cx="78" cy="40" r="2" fill="#EA580C" />
      <circle cx="86" cy="36" r="3" fill="#EA580C" />
      <circle cx="94" cy="32" r="2" fill="#EA580C" />
      <circle cx="100" cy="28" r="2.5" fill="#EA580C" />
      
      {/* Pancreatic Duct (White line inside pancreas) */}
      <path
        d="M54 55 C64 54 74 48 84 42 C94 36 100 30 102 28"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Labels / Lines matching style */}
      <path d="M22 34 L12 34" stroke="#6B7280" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M76 44 L76 56" stroke="#6B7280" strokeWidth="1" strokeDasharray="2 2" />

      <defs>
        <linearGradient id="paint_pancreas" x1="42" y1="26" x2="108" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="paint_panc_gall" x1="16" y1="24" x2="38" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
        <linearGradient id="paint_panc_duod" x1="34" y1="35" x2="86" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
    </svg>
  );
}
