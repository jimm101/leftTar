import { Fretboard } from '@/components/Fretboard'
import { GUITAR_CONFIG, C_MAJOR_PENTATONIC } from '@/constants'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">leftTar</h1>
          <p className="text-gray-600">Guitar fretboard visualization for left-handed players</p>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Fretboard scale={C_MAJOR_PENTATONIC} config={GUITAR_CONFIG} />
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
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

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              About This Visualization
            </h2>
            <p className="text-blue-800 mb-3">
              This fretboard is displayed in <strong>left-handed orientation</strong>:
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Nut/headstock on the LEFT</li>
              <li>High E string (thinnest) at the TOP</li>
              <li>Low E string (thickest) at the BOTTOM</li>
            </ul>
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Version 0.1 - Prototype MVP</p>
        </footer>
      </div>
    </div>
  )
}

export default App
