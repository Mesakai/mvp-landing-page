import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page1Landscape from './components/Page1Landscape'
import Page2Landscape from './components/Page2Landscape'
import { useOrientation } from './hooks/useOrientation'

function App() {
  const isLandscape = useOrientation()

  return (
    <div style={{ background: 'linear-gradient(135deg, #FFA63C 0%, #FA5336 50%, #F00C50 100%)' }}>
      {isLandscape ? (
        <>
          <Page1Landscape />
          <Page2Landscape />
        </>
      ) : (
        <>
          <Page1 />
          <Page2 />
        </>
      )}
    </div>
  )
}

export default App
