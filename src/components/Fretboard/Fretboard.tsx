import type { Scale, GuitarConfig, VisualizationMode, GuitarType } from '@/types'
import {
  FRET_MARKERS,
  DOUBLE_DOT_FRETS,
  POSITION_MARKERS,
  STRING_THICKNESSES,
  GUITAR_TYPES,
} from '@/constants'
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
 * - Body of guitar on the LEFT (rendered at fret 13)
 * - Fret 1 toward the RIGHT, higher frets toward the LEFT
 *
 * This mirrors how a left-handed player sees their guitar when looking down at it.
 */
export function Fretboard({ scale, config, mode = 'notes', guitarType = 'electric' }: FretboardProps) {
  const { strings } = config

  // Get guitar-specific configuration
  const guitarConfig = GUITAR_TYPES.find(gt => gt.value === guitarType)!
  const frets = guitarConfig.frets
  const aspectRatio = guitarConfig.aspectRatio

  // SVG dimensions - adjusted for compact spacing (50% tighter)
  const width = 1400 // Increased width to accommodate more frets
  const height = width / aspectRatio
  const padding = { top: 50, right: 80, bottom: 50, left: 60 }
  const fretboardWidth = width - padding.left - padding.right
  const fretboardHeight = height - padding.top - padding.bottom

  // Calculate spacing (50% tighter than standard)
  const stringSpacing = fretboardHeight / (strings - 1)
  const fretWidth = fretboardWidth / frets

  // Helper to get Y position for a string (string 1 at top, string 6 at bottom)
  const getStringY = (stringNum: number) => {
    return padding.top + (stringNum - 1) * stringSpacing
  }

  // Helper to get X position for a fret (LEFT-HANDED: fret 0 on RIGHT, higher frets on LEFT)
  const getFretX = (fretNum: number) => {
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

  // Helper to render guitar body with cutaway at fret 13
  const renderGuitarBody = () => {
    const bodyX = getFretX(13)
    const bodyWidth = 200
    const bodyHeight = fretboardHeight + 80
    const bodyY = padding.top - 40

    // Left-handed cutaway path (upper horn over high strings)
    const cutawayHeight = bodyHeight * 0.4 // Cutaway covers upper 40% (strings 1-3)

    return (
      <g opacity="0.3">
        {/* Main body shape */}
        <path
          d={`
            M ${bodyX} ${bodyY + cutawayHeight}
            L ${bodyX - 40} ${bodyY + cutawayHeight - 20}
            L ${bodyX - 60} ${bodyY + cutawayHeight}
            L ${bodyX - bodyWidth} ${bodyY + 40}
            L ${bodyX - bodyWidth} ${bodyY + bodyHeight - 40}
            L ${bodyX - 60} ${bodyY + bodyHeight}
            L ${bodyX} ${bodyY + bodyHeight}
            Z
          `}
          fill="#D2691E"
          stroke="#8B4513"
          strokeWidth="2"
        />
      </g>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto max-w-7xl mx-auto"
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

      {/* Guitar body at fret 13 */}
      {renderGuitarBody()}

      {/* Position markers (vertical bars) */}
      {POSITION_MARKERS.filter(pm => pm.startFret <= frets).map(pm => {
        const x = getFretX(pm.startFret)
        return (
          <g key={`position-${pm.position}`}>
            <line
              x1={x}
              y1={padding.top}
              x2={x}
              y2={padding.top + fretboardHeight}
              stroke="#999"
              strokeWidth="1.5"
              strokeDasharray="4,3"
              opacity="0.5"
            />
            <text
              x={x}
              y={padding.top - 10}
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#666"
            >
              {pm.position}
            </text>
          </g>
        )
      })}

      {/* Frets */}
      {Array.from({ length: frets + 1 }, (_, i) => (
        <line
          key={`fret-${i}`}
          x1={getFretX(i)}
          y1={padding.top}
          x2={getFretX(i)}
          y2={padding.top + fretboardHeight}
          stroke="#666"
          strokeWidth={i === 0 ? 5 : 2} // Nut is thicker
        />
      ))}

      {/* Strings with varied thickness */}
      {Array.from({ length: strings }, (_, i) => {
        const stringNum = (i + 1) as keyof typeof STRING_THICKNESSES
        const strokeWidth = STRING_THICKNESSES[stringNum]
        return (
          <line
            key={`string-${stringNum}`}
            x1={padding.left}
            y1={getStringY(stringNum)}
            x2={padding.left + fretboardWidth}
            y2={getStringY(stringNum)}
            stroke="#D3D3D3"
            strokeWidth={strokeWidth}
            opacity={0.7 + strokeWidth * 0.1} // Thicker strings slightly more visible
          />
        )
      })}

      {/* Fret markers (dots) */}
      {FRET_MARKERS.filter(fretNum => fretNum <= frets).map(fretNum => {
        const x = getFretX(fretNum - 0.5)
        const isDoubleDot = DOUBLE_DOT_FRETS.includes(fretNum)

        if (isDoubleDot) {
          return (
            <g key={`marker-${fretNum}`}>
              <circle
                cx={x}
                cy={padding.top + fretboardHeight * 0.33}
                r="5"
                fill="#CCC"
                opacity="0.5"
              />
              <circle
                cx={x}
                cy={padding.top + fretboardHeight * 0.67}
                r="5"
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
            r="5"
            fill="#CCC"
            opacity="0.5"
          />
        )
      })}

      {/* Fret numbers - positioned to the right of each fret */}
      {Array.from({ length: frets }, (_, i) => {
        const fretNum = i + 1
        // Only show every 3rd fret number to avoid clutter
        if (fretNum % 3 !== 0 && fretNum !== 1) return null

        return (
          <text
            key={`fret-label-${fretNum}`}
            x={getFretX(fretNum) + 8} // Just to the right of the fret
            y={height - 20}
            textAnchor="start"
            fontSize="11"
            fill="#666"
          >
            {fretNum}
          </text>
        )
      })}

      {/* String labels (tuning) - on the RIGHT side */}
      {Array.from({ length: strings }, (_, i) => {
        const stringNum = i + 1
        const note = config.tuning[strings - stringNum]
        return (
          <text
            key={`string-label-${stringNum}`}
            x={width - 25}
            y={getStringY(stringNum)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
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
                fontSize={mode === 'solfege' ? '7' : '9'}
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
        y={25}
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="#333"
      >
        {scale.name}
      </text>
    </svg>
  )
}
