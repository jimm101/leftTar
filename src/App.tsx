import { useState } from 'react'
import { Fretboard } from '@/components/Fretboard'
import { ModeSelector } from '@/components/ModeSelector'
import { GUITAR_CONFIG, C_MAJOR_PENTATONIC } from '@/constants'
import type { VisualizationMode } from '@/types'

function App() {
  const [mode, setMode] = useState<VisualizationMode>('color')

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">leftTar</h1>
          <p className="text-gray-600">Guitar fretboard visualization for left-handed players</p>
        </header>

        <main className="space-y-8">
          {/* Mode Selector */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ModeSelector selectedMode={mode} onModeChange={setMode} />
          </div>

          {/* Fretboard Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} mode={mode} />
          </div>

          {/* Legend */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Legend</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-blue-800"></div>
                <span className="text-gray-700">Root note (C)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-300 border-2 border-blue-500"></div>
                <span className="text-gray-700">Scale note</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              About This Visualization
            </h2>
            <p className="text-blue-800 mb-3">
              This fretboard is displayed in <strong>left-handed orientation</strong>:
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Nut/headstock (fret 0) on the RIGHT</li>
              <li>Body of guitar on the LEFT</li>
              <li>Fret 1 toward the RIGHT, higher frets toward the LEFT</li>
              <li>High E string (thinnest) at the TOP</li>
              <li>Low E string (thickest) at the BOTTOM</li>
            </ul>
            <p className="text-blue-800 mt-3">
              This matches how you see your guitar when looking down at it while playing.
            </p>
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Version 0.2 - With Visualization Modes</p>
        </footer>
      </div>
    </div>
  )
}

export default App
