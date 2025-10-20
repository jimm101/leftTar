import type { Key, ScaleType, VisualizationMode, GuitarType } from '@/types'
import { KEYS, SCALE_TYPES, VISUALIZATION_MODES, GUITAR_TYPES } from '@/constants'

export interface SelectorsProps {
  selectedKey: Key
  selectedScaleType: ScaleType
  selectedVisualizationMode: VisualizationMode
  selectedGuitarType: GuitarType
  onKeyChange: (key: Key) => void
  onScaleTypeChange: (scaleType: ScaleType) => void
  onVisualizationModeChange: (mode: VisualizationMode) => void
  onGuitarTypeChange: (guitarType: GuitarType) => void
}

/**
 * Selectors component - dropdowns for key, scale type, visualization mode, and guitar type
 */
export function Selectors({
  selectedKey,
  selectedScaleType,
  selectedVisualizationMode,
  selectedGuitarType,
  onKeyChange,
  onScaleTypeChange,
  onVisualizationModeChange,
  onGuitarTypeChange,
}: SelectorsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Key Selector */}
      <div>
        <label htmlFor="key-select" className="block text-sm font-semibold text-gray-700 mb-2">
          Key
        </label>
        <select
          id="key-select"
          value={selectedKey}
          onChange={e => onKeyChange(e.target.value as Key)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white"
        >
          {KEYS.map(key => (
            <option key={key.value} value={key.value}>
              {key.label}
            </option>
          ))}
        </select>
      </div>

      {/* Scale Type Selector */}
      <div>
        <label htmlFor="scale-type-select" className="block text-sm font-semibold text-gray-700 mb-2">
          Scale / Mode
        </label>
        <select
          id="scale-type-select"
          value={selectedScaleType}
          onChange={e => onScaleTypeChange(e.target.value as ScaleType)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white"
        >
          {SCALE_TYPES.map(scaleType => (
            <option key={scaleType.value} value={scaleType.value}>
              {scaleType.label}
            </option>
          ))}
        </select>
      </div>

      {/* Visualization Mode Selector */}
      <div>
        <label htmlFor="viz-mode-select" className="block text-sm font-semibold text-gray-700 mb-2">
          Display
        </label>
        <select
          id="viz-mode-select"
          value={selectedVisualizationMode}
          onChange={e => onVisualizationModeChange(e.target.value as VisualizationMode)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white"
        >
          {VISUALIZATION_MODES.map(mode => (
            <option key={mode.value} value={mode.value}>
              {mode.label}
            </option>
          ))}
        </select>
      </div>

      {/* Guitar Type Selector */}
      <div>
        <label htmlFor="guitar-type-select" className="block text-sm font-semibold text-gray-700 mb-2">
          Guitar Type
        </label>
        <select
          id="guitar-type-select"
          value={selectedGuitarType}
          onChange={e => onGuitarTypeChange(e.target.value as GuitarType)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none bg-white"
        >
          {GUITAR_TYPES.map(guitarType => (
            <option key={guitarType.value} value={guitarType.value}>
              {guitarType.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
