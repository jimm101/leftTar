/**
 * Visualization mode for displaying scale notes
 */
export type VisualizationMode = 'color' | 'notes' | 'degrees' | 'solfege'

/**
 * Label text for a visualization mode option
 */
export interface VisualizationModeOption {
  value: VisualizationMode
  label: string
  description: string
}
