import type { VisualizationMode } from '@/types'
import { VISUALIZATION_MODES } from '@/constants'

export interface ModeSelectorProps {
  selectedMode: VisualizationMode
  onModeChange: (mode: VisualizationMode) => void
}

/**
 * ModeSelector component - allows users to switch between visualization modes
 */
export function ModeSelector({ selectedMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Visualization Mode</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {VISUALIZATION_MODES.map(modeOption => (
          <button
            key={modeOption.value}
            onClick={() => onModeChange(modeOption.value)}
            className={`
              px-4 py-3 rounded-lg border-2 transition-all text-left
              ${
                selectedMode === modeOption.value
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
              }
            `}
            aria-pressed={selectedMode === modeOption.value}
          >
            <div className="font-semibold text-gray-900">{modeOption.label}</div>
            <div className="text-sm text-gray-600 mt-1">{modeOption.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
