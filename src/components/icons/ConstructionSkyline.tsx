"use client";

import React from "react";

import { useConstructionSkyline } from "./useConstructionSkyline";

/**
 * Construction skyline SVG — line-art illustration of cranes,
 * steel-frame building, and construction equipment.
 *
 * Animates continuously with a staggered stroke-drawing effect:
 * each path slowly draws on, then erases, in an infinite loop.
 */
function ConstructionSkyline(): React.ReactElement {
  const ref = useConstructionSkyline();

  return (
    <svg
      ref={ref}
      className="pointer-events-none ml-3 h-30 w-full sm:h-45 md:ml-5 md:h-55 lg:h-65 xl:ml-15 2xl:ml-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 280"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <style>{`
        @keyframes draw {
          0%, 100% {
            stroke-dashoffset: var(--length);
          }
          30.77% {
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: 0;
          }
          80.77% {
            stroke-dashoffset: var(--length);
          }
        }
      `}</style>
      <g
        opacity="0.45"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0,270 L1440,270" strokeWidth="2" />

        {/* ===== LEFT CRANE ===== */}
        <path d="M60,270 V80" strokeWidth="2.5" />
        <path
          d="M52,100 L68,120 M68,100 L52,120 M52,140 L68,160 M68,140 L52,160 M52,180 L68,200 M68,180 L52,200 M52,220 L68,240 M68,220 L52,240"
          strokeWidth="1.2"
        />
        <path d="M60,80 H300" strokeWidth="2.5" />
        <path
          d="M80,80 L90,95 M110,80 L120,95 M140,80 L150,95 M160,80 L170,95 M180,80 L190,95 M200,80 L210,95 M220,80 L230,95 M240,80 L250,95 M260,80 L270,95"
          strokeWidth="1.2"
        />
        <path d="M60,80 H10" strokeWidth="2.5" />
        <path d="M40,80 L30,95 M20,80 L10,95" strokeWidth="1.2" />
        <path d="M12,80 V100 H30 V80" strokeWidth="1.5" />
        <path d="M200,80 V140" strokeWidth="1.5" />
        <path d="M196,140 H204 L200,152 Z" strokeWidth="1.5" />
        <path d="M62,80 V65 H80 V80" strokeWidth="1.5" />
        <path d="M68,65 V62 M72,65 V62 M76,65 V62" strokeWidth="0.8" />
        <path d="M56,270 V80 M64,270 V80" strokeWidth="1" />
        <path
          d="M56,260 H64 M56,250 H64 M56,240 H64 M56,230 H64 M56,220 H64 M56,210 H64 M56,200 H64 M56,190 H64 M56,180 H64 M56,170 H64 M56,160 H64 M56,150 H64 M56,140 H64 M56,130 H64 M56,120 H64 M56,110 H64 M56,100 H64 M56,90 H64"
          strokeWidth="0.8"
        />
        <path d="M60,80 L120,50 M60,80 L180,45 M60,80 L240,50" strokeWidth="1" />
        <path d="M40,270 H80 M35,265 H85" strokeWidth="1.5" />
        <path d="M198,132 H202 M199,128 H201" strokeWidth="1" />

        {/* ===== LOW BUILDING LEFT ===== */}
        <path d="M100,270 V180 H200 V270" strokeWidth="2" />
        <path
          d="M120,200 H140 V220 H120 Z M160,200 H180 V220 H160 Z M120,235 H140 V255 H120 Z M160,235 H180 V255 H160 Z"
          strokeWidth="1.2"
        />
        <path d="M130,180 V165 H150 V180 M160,180 V160 H180 V180" strokeWidth="1.5" />
        <path
          d="M100,175 H115 M125,175 H140 M150,175 H160 M170,175 H185 M195,175 H200"
          strokeWidth="0.8"
        />
        <path d="M142,270 V245 H158 V270" strokeWidth="1.5" />
        <path d="M142,245 L150,240 L158,245" strokeWidth="1" />

        {/* ===== STEEL-FRAME BUILDING ===== */}
        <path
          d="M320,270 V130 M340,270 V110 M360,270 V120 M380,270 V90 M400,270 V100 M420,270 V80 M440,270 V115 M460,270 V125 M480,270 V95 M500,270 V105"
          strokeWidth="2"
        />
        <path
          d="M320,130 H500 M320,160 H500 M320,190 H500 M320,220 H500 M320,250 H500"
          strokeWidth="1.5"
        />
        <path
          d="M320,130 L340,160 M340,130 L320,160 M360,130 L380,160 M380,130 L360,160 M400,130 L420,160 M420,130 L400,160 M440,130 L460,160 M460,130 L440,160 M480,130 L500,160"
          strokeWidth="1"
        />
        <path
          d="M320,160 L340,190 M340,160 L320,190 M360,160 L380,190 M380,160 L360,190 M400,160 L420,190 M420,160 L400,190 M440,160 L460,190 M460,160 L440,190 M480,160 L500,190"
          strokeWidth="1"
        />
        <path
          d="M320,190 L340,220 M340,190 L320,220 M360,190 L380,220 M380,190 L360,220 M400,190 L420,220 M420,190 L400,220 M440,190 L460,220 M460,190 L440,220 M480,190 L500,220"
          strokeWidth="1"
        />
        <path
          d="M320,145 H500 M320,175 H500 M320,205 H500 M320,235 H500"
          strokeWidth="0.8"
          strokeDasharray="4,4"
        />
        <path
          d="M380,90 L380,70 M400,80 L400,60 M420,90 L420,65 M440,80 L440,70"
          strokeWidth="1.5"
        />
        <path d="M500,270 V130 L520,130 L520,270" strokeWidth="1.5" />
        <path
          d="M500,150 L520,145 M500,170 L520,165 M500,190 L520,185 M500,210 L520,205 M500,230 L520,225 M500,250 L520,245"
          strokeWidth="1"
        />
        <path d="M390,270 V245 H430 V270" strokeWidth="1.5" />
        <path
          d="M395,245 L395,235 H405 V245 M415,245 L415,235 H425 V245"
          strokeWidth="1"
        />

        {/* ===== RIGHT CRANE ===== */}
        <path d="M580,270 V40" strokeWidth="2.5" />
        <path
          d="M572,60 L588,80 M588,60 L572,80 M572,100 L588,120 M588,100 L572,120 M572,140 L588,160 M588,140 L572,160 M572,180 L588,200 M588,180 L572,200 M572,220 L588,240 M588,220 L572,240"
          strokeWidth="1.2"
        />
        <path d="M580,40 H860" strokeWidth="2.5" />
        <path
          d="M600,40 L610,55 M630,40 L640,55 M660,40 L670,55 M690,40 L700,55 M720,40 L730,55 M750,40 L760,55 M780,40 L790,55 M810,40 L820,55"
          strokeWidth="1.2"
        />
        <path d="M580,40 H480" strokeWidth="2.5" />
        <path d="M560,40 L550,55 M540,40 L530,55 M520,40 L510,55" strokeWidth="1.2" />
        <path d="M482,40 V60 H505 V40" strokeWidth="1.5" />
        <path d="M720,40 V95" strokeWidth="1.5" />
        <path d="M716,95 H724 L720,108 Z" strokeWidth="1.5" />
        <path d="M582,40 V25 H602 V40" strokeWidth="1.5" />
        <path d="M588,25 V22 M592,25 V22 M596,25 V22" strokeWidth="0.8" />
        <path d="M576,270 V40 M584,270 V40" strokeWidth="1" />
        <path
          d="M576,260 H584 M576,250 H584 M576,240 H584 M576,230 H584 M576,220 H584 M576,210 H584 M576,200 H584 M576,190 H584 M576,180 H584 M576,170 H584 M576,160 H584 M576,150 H584 M576,140 H584 M576,130 H584 M576,120 H584 M576,110 H584 M576,100 H584 M576,90 H584 M576,80 H584 M576,70 H584 M576,60 H584 M576,50 H584"
          strokeWidth="0.8"
        />
        <path d="M560,270 H600 M555,265 H605" strokeWidth="1.5" />
        <path
          d="M580,40 L640,25 M580,40 L700,25 M580,40 L760,25 M580,40 L820,25"
          strokeWidth="1"
        />
        <path d="M718,87 H722 M719,84 H721" strokeWidth="1" />

        {/* ===== BUILDING BEHIND RIGHT CRANE ===== */}
        <path d="M620,270 V150 H720 V270" strokeWidth="2" />
        <path
          d="M635,170 H655 V190 H635 Z M685,170 H705 V190 H685 Z M635,205 H655 V225 H635 Z M685,205 H705 V225 H685 Z M635,240 H655 V260 H635 Z M685,240 H705 V260 H685 Z"
          strokeWidth="1.2"
        />
        <path d="M650,150 V135 H670 V150 M680,150 V130 H700 V150" strokeWidth="1.5" />
        <path d="M640,150 V140 M645,150 V138 M650,150 V142" strokeWidth="0.8" />
        <path d="M655,270 V250 H670 V270" strokeWidth="1.5" />
        <path d="M662,250 L662,240" strokeWidth="1" />

        {/* ===== TALL BUILDING RIGHT ===== */}
        <path d="M980,270 V60 H1080 V270" strokeWidth="2" />
        <path
          d="M995,80 H1015 V100 H995 Z M1025,80 H1045 V100 H1025 Z M1055,80 H1075 V100 H1055 Z"
          strokeWidth="1.2"
        />
        <path
          d="M995,115 H1015 V135 H995 Z M1025,115 H1045 V135 H1025 Z M1055,115 H1075 V135 H1055 Z"
          strokeWidth="1.2"
        />
        <path
          d="M995,150 H1015 V170 H995 Z M1025,150 H1045 V170 H1025 Z M1055,150 H1075 V170 H1055 Z"
          strokeWidth="1.2"
        />
        <path
          d="M995,185 H1015 V205 H995 Z M1025,185 H1045 V205 H1025 Z M1055,185 H1075 V205 H1055 Z"
          strokeWidth="1.2"
        />
        <path
          d="M995,220 H1015 V240 H995 Z M1025,220 H1045 V240 H1025 Z M1055,220 H1075 V240 H1055 Z"
          strokeWidth="1.2"
        />
        <path d="M1030,60 V270 M1031,60 V270" strokeWidth="1" />
        <path d="M1030,60 V35" strokeWidth="2" />
        <path d="M1030,35 L1020,25 H1040 Z" strokeWidth="1.5" />
        <path d="M1030,45 L1015,40 M1030,50 L1015,45" strokeWidth="1" />
        <path
          d="M995,60 V50 H1015 V60 M1025,60 V48 H1045 V60 M1055,60 V52 H1075 V60"
          strokeWidth="1"
        />
        <path d="M1010,270 V250 H1025 V270 M1030,270 V250 H1045 V270" strokeWidth="1.5" />
        <path d="M1017,250 L1017,240 M1037,250 L1037,240" strokeWidth="1" />

        {/* ===== SMALL BUILDING FAR RIGHT ===== */}
        <path d="M1120,270 V160 H1220 V270" strokeWidth="2" />
        <path
          d="M1135,180 H1155 V200 H1135 Z M1170,180 H1190 V200 H1170 Z M1135,215 H1155 V235 H1135 Z M1170,215 H1190 V235 H1170 Z"
          strokeWidth="1.2"
        />
        <path d="M1170,160 V145" strokeWidth="1.5" />
        <path d="M1168,155 H1172 M1167,150 H1173" strokeWidth="0.8" />
        <path d="M1155,270 V245 H1170 V270" strokeWidth="1.5" />
        <path d="M1155,245 L1162,240 L1170,245" strokeWidth="1" />

        {/* ===== EXCAVATOR ===== */}
        <path d="M1280,270 V220 H1300" strokeWidth="2" />
        <path d="M1280,220 L1260,230 L1260,250" strokeWidth="2" />
        <path d="M1300,220 L1320,230 L1340,230" strokeWidth="2" />
        <path d="M1310,230 L1330,250" strokeWidth="2" />
        <path d="M1330,250 L1345,250" strokeWidth="2" />
        <path d="M1250,250 H1350 V265 H1250 Z" strokeWidth="2" />
        <path
          d="M1260,250 L1260,265 M1275,250 L1275,265 M1290,250 L1290,265 M1305,250 L1305,265 M1320,250 L1320,265 M1335,250 L1335,265"
          strokeWidth="1"
        />
        <path d="M1295,220 L1305,180 L1325,175" strokeWidth="2" />
        <path d="M1325,175 L1340,185" strokeWidth="2" />
        <path d="M1340,185 L1345,195" strokeWidth="2" />
        <path d="M1345,195 L1355,205 L1350,215 L1340,210 Z" strokeWidth="1.5" />
        <path d="M1290,220 L1295,200 M1300,210 L1305,185" strokeWidth="1" />

        {/* ===== GROUND DETAILS ===== */}
        <path d="M210,270 Q225,255 240,270" strokeWidth="1.5" />
        <path d="M245,270 Q255,260 265,270" strokeWidth="1.2" />
        <path d="M275,270 V255 H285 V270" strokeWidth="1.5" />
        <path
          d="M277,255 V250 M278,255 V249 M279,255 V248 M280,255 V249 M281,255 V250"
          strokeWidth="0.8"
        />
        <path d="M290,270 V258 H300 V270" strokeWidth="1.5" />
        <path d="M305,270 V260 H335 V270" strokeWidth="1" />
        <path d="M315,270 V255 M325,270 V255" strokeWidth="0.8" />
        <path d="M305,262 H335" strokeWidth="0.8" />
        <path d="M530,270 V255 H560 V270" strokeWidth="1.2" />
        <path d="M540,270 V255 M550,270 V255" strokeWidth="0.8" />
        <path d="M530,260 H560 M530,265 H560" strokeWidth="0.8" />
        <path d="M865,270 V240" strokeWidth="1.5" />
        <path d="M860,240 H870" strokeWidth="1" />
        <circle cx="865" cy="238" r="3" strokeWidth="1" />
        <path d="M1230,270 Q1240,260 1250,270" strokeWidth="1.2" />
        <path d="M1355,270 Q1365,258 1375,270" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

export default ConstructionSkyline;
