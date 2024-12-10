import './styles/app.css'
import { Mixer } from './components/mixerComponent.tsx'

export function MixerExample() {
  return (
    <>
      <h1>Audio mixer with XState v5</h1>
      <Mixer />
    </>
  )
}

