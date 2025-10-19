import type { Scale, GuitarConfig } from '@/types'
import { FRET_MARKERS } from '@/constants'

export interface FretboardProps {
  scale: Scale
  config: GuitarConfig
}

/**
 * Fretboard component - displays a left-handed guitar fretboard with scale positions
 *
 * Layout for left-handed:
 * - Strings run horizontally
 * - High E (string 1) on TOP
 * - Low E (string 6) on BOTTOM
 * - Nut/headstock on LEFT
 * - Body on RIGHT
 */
export function Fretboard({ scale, config }: FretboardProps) {
  const { strings, frets } = config

  // SVG dimensions
  const width = 1000
  const height = 400
  const padding = { top: 40, right: 40, bottom: 40, left: 60 }
  const fretboardWidth = width - padding.left - padding.right
  const fretboardHeight = height - padding.top - padding.bottom

  // Calculate spacing
  const stringSpacing = fretboardHeight / (strings - 1)
  const fretWidth = fretboardWidth / frets

  // Helper to get Y position for a string (left-handed: string 1 at top)
  const getStringY = (stringNum: number) => {
    return padding.top + (stringNum - 1) * stringSpacing
  }

  // Helper to get X position for a fret
  const getFretX = (fretNum: number) => {
    return padding.left + fretNum * fretWidth
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto max-w-5xl mx-auto"
      role="img"
      aria-label={`${scale.name} scale on left-handed guitar fretboard`}
    >
      {/* Fretboard background */}
      <rect
        x={padding.left}
        y={padding.top}
        width={fretboardWidth}
        height={fretboardHeight}
        fill="#8B4513"
        stroke="#4A2511"
        strokeWidth="2"
      />

      {/* Frets */}
      {Array.from({ length: frets + 1 }, (_, i) => (
        <line
          key={`fret-${i}`}
          x1={getFretX(i)}
          y1={padding.top}
          x2={getFretX(i)}
          y2={padding.top + fretboardHeight}
          stroke="#666"
          strokeWidth={i === 0 ? 4 : 2}
        />
      ))}

      {/* Strings */}
      {Array.from({ length: strings }, (_, i) => {
        const stringNum = i + 1
        const strokeWidth = stringNum === 1 ? 1 : stringNum === 6 ? 3 : 2
        return (
          <line
            key={`string-${stringNum}`}
            x1={padding.left}
            y1={getStringY(stringNum)}
            x2={padding.left + fretboardWidth}
            y2={getStringY(stringNum)}
            stroke="#D3D3D3"
            strokeWidth={strokeWidth}
          />
        )
      })}

      {/* Fret markers */}
      {FRET_MARKERS.map(fretNum => {
        const x = getFretX(fretNum - 0.5)
        const isDoubleDot = fretNum === 12

        if (isDoubleDot) {
          return (
            <g key={`marker-${fretNum}`}>
              <circle
                cx={x}
                cy={padding.top + fretboardHeight * 0.33}
                r="6"
                fill="#CCC"
                opacity="0.5"
              />
              <circle
                cx={x}
                cy={padding.top + fretboardHeight * 0.67}
                r="6"
                fill="#CCC"
                opacity="0.5"
              />
            </g>
          )
        }

        return (
          <circle
            key={`marker-${fretNum}`}
            cx={x}
            cy={padding.top + fretboardHeight / 2}
            r="6"
            fill="#CCC"
            opacity="0.5"
          />
        )
      })}

      {/* Fret numbers */}
      {Array.from({ length: frets }, (_, i) => {
        const fretNum = i + 1
        return (
          <text
            key={`fret-label-${fretNum}`}
            x={getFretX(fretNum - 0.5)}
            y={height - 10}
            textAnchor="middle"
            fontSize="12"
            fill="#666"
          >
            {fretNum}
          </text>
        )
      })}

      {/* String labels (tuning) */}
      {Array.from({ length: strings }, (_, i) => {
        const stringNum = i + 1
        const note = config.tuning[strings - stringNum]
        return (
          <text
            key={`string-label-${stringNum}`}
            x={20}
            y={getStringY(stringNum)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#333"
          >
            {note}
          </text>
        )
      })}

      {/* Scale notes */}
      {scale.positions.map((position, idx) => {
        const x =
          position.fret === 0
            ? getFretX(0) - fretWidth / 4
            : getFretX(position.fret - 0.5)
        const y = getStringY(position.string)

        return (
          <g key={`note-${idx}`}>
            <circle
              cx={x}
              cy={y}
              r={position.isRoot ? 14 : 10}
              fill={position.isRoot ? '#3B82F6' : '#93C5FD'}
              stroke={position.isRoot ? '#1E40AF' : '#3B82F6'}
              strokeWidth="2"
            />
            {/* Optional: show note names
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight="bold"
              fill="white"
            >
              {position.note}
            </text>
            */}
          </g>
        )
      })}

      {/* Title */}
      <text
        x={width / 2}
        y={20}
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#333"
      >
        {scale.name}
      </text>
    </svg>
  )
}
