import type { Scale, GuitarConfig, VisualizationMode, GuitarType } from '@/types'
import { FRET_MARKERS, GUITAR_TYPES } from '@/constants'
import { getSolfege, getNoteName } from '@/utils/musicTheory/noteLabels'

export interface FretboardProps {
  scale: Scale
  config: GuitarConfig
  mode?: VisualizationMode
  guitarType?: GuitarType
}

/**
 * Fretboard component - displays a left-handed guitar fretboard with scale positions
 *
 * LEFT-HANDED LAYOUT:
 * - Strings run horizontally
 * - High E (string 1, thinnest) at the TOP
 * - Low E (string 6, thickest) at the BOTTOM
 * - Nut/headstock (fret 0) on the RIGHT
 * - Body of guitar on the LEFT
 * - Fret 1 toward the RIGHT, higher frets (12) toward the LEFT
 *
 * This mirrors how a left-handed player sees their guitar when looking down at it.
 */
export function Fretboard({ scale, config, mode = 'notes', guitarType = 'electric' }: FretboardProps) {
  const { strings, frets } = config

  // Get aspect ratio for selected guitar type
  const guitarConfig = GUITAR_TYPES.find(gt => gt.value === guitarType)
  const aspectRatio = guitarConfig?.aspectRatio || 2.5

  // SVG dimensions - adjust height based on aspect ratio
  const width = 1000
  const height = width / aspectRatio
  const padding = { top: 40, right: 60, bottom: 40, left: 40 }
  const fretboardWidth = width - padding.left - padding.right
  const fretboardHeight = height - padding.top - padding.bottom

  // Calculate spacing
  const stringSpacing = fretboardHeight / (strings - 1)
  const fretWidth = fretboardWidth / frets

  // Helper to get Y position for a string (string 1 at top, string 6 at bottom)
  const getStringY = (stringNum: number) => {
    return padding.top + (stringNum - 1) * stringSpacing
  }

  // Helper to get X position for a fret (LEFT-HANDED: fret 0 on RIGHT, fret 12 on LEFT)
  const getFretX = (fretNum: number) => {
    // Reverse the direction: higher fret numbers = further left
    return padding.left + fretboardWidth - fretNum * fretWidth
  }

  // Helper to get label text for a scale note based on visualization mode
  const getLabel = (position: typeof scale.positions[0]): string => {
    if (mode === 'color') return ''
    if (mode === 'notes') return getNoteName(position.note)
    if (mode === 'degrees') return position.degree?.toString() || ''
    if (mode === 'solfege') return getSolfege(position.degree || 1)
    return ''
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

      {/* String labels (tuning) - now on the RIGHT side */}
      {Array.from({ length: strings }, (_, i) => {
        const stringNum = i + 1
        const note = config.tuning[strings - stringNum]
        return (
          <text
            key={`string-label-${stringNum}`}
            x={width - 20}
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
            ? getFretX(0) + fretWidth / 4 // Open string: slightly left of nut
            : getFretX(position.fret - 0.5) // Between frets
        const y = getStringY(position.string)
        const label = getLabel(position)

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
            {label && (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={mode === 'solfege' ? '8' : '10'}
                fontWeight="bold"
                fill="white"
              >
                {label}
              </text>
            )}
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
