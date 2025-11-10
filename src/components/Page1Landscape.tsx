import { useEffect, useRef, useState } from 'react'
import landingHeroAsset from '../assets/LandingHeroAsset.png'
import mesakaiLogo from '../assets/logos/Mesakai full logo white.svg'
import gradientArc from '../assets/gradient-arc.svg'
import gradientCircle from '../assets/gradient-circle.svg'

function Page1Landscape() {
  const circleRef = useRef<HTMLImageElement>(null)
  const [circleWidth, setCircleWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (circleRef.current) {
        setCircleWidth(circleRef.current.offsetWidth)
      }
    }

    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight)
    }

    const updateAll = () => {
      updateWidth()
      updateViewportHeight()
    }

    updateAll()

    const resizeObserver = new ResizeObserver(updateWidth)
    if (circleRef.current) {
      resizeObserver.observe(circleRef.current)
    }

    window.addEventListener('resize', updateAll)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateAll)
    }
  }, [])

  const scrollToPage2 = () => {
    const page2 = document.getElementById('page2')
    if (page2) {
      page2.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="flex items-center justify-center relative overflow-hidden mx-auto"
      style={{
        height: '100dvh',
        maxWidth: '2000px',
        backgroundImage: `url(${landingHeroAsset})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Arc - positioned at top */}
      <img
        src={gradientArc}
        alt=""
        className="absolute top-0 left-0 w-full z-10"
        style={{ height: '25dvh' }}
      />

      {/* Mesakai Logo - positioned at top within arc */}
      <img
        src={mesakaiLogo}
        alt="Mesakai"
        className="absolute top-[2vh] left-1/2 -translate-x-1/2 z-20"
        style={{ width: 'min(15vh, 200px)' }}
      />

      {/* Gradient Circle - bottom left, only top right quarter visible */}
      <img
        ref={circleRef}
        src={gradientCircle}
        alt=""
        className="absolute bottom-0 left-[20vw]"
        style={{
          width: 'min(140vh, 2000px)',
          height: 'auto',
          transform: 'translate(-50%, 50%) rotate(135deg)',
        }}
      />

      {/* Text Content - bottom left quarter */}
      <div className="text-white w-full flex items-end justify-start z-5 relative" style={{ height: '100dvh' }}>
        <div style={{
          maxWidth: circleWidth ? `${circleWidth * 0.55}px` : '55vw',
          paddingLeft: 'clamp(2rem, 4vw, 5rem)',
          paddingBottom: viewportHeight < 480 ? 'clamp(1rem, 3vh, 3rem)' : 'clamp(2rem, 6vh, 8rem)',
          boxSizing: 'border-box'
        }}>
          <h1 className='font-bold' style={{
            fontSize: circleWidth ? `clamp(${viewportHeight < 480 ? '1.5rem' : '2rem'}, ${circleWidth * (viewportHeight < 480 ? 0.038 : 0.045)}px, ${viewportHeight < 480 ? '3.5rem' : '5rem'})` : 'clamp(2rem, min(4.5vw, 9vh), 5rem)',
            lineHeight: '1.2',
            marginBottom: viewportHeight < 480 ? '0.75rem' : '1.25rem'
          }}>
            For the love of good food and great company
          </h1>
          <p style={{
            fontSize: circleWidth ? `clamp(${viewportHeight < 480 ? '0.875rem' : '1rem'}, ${circleWidth * (viewportHeight < 480 ? 0.015 : 0.018)}px, ${viewportHeight < 480 ? '1.5rem' : '2rem'})` : 'clamp(1rem, min(1.8vw, 3.6vh), 2rem)',
            lineHeight: '1.6',
            marginBottom: viewportHeight < 480 ? '0.75rem' : '1.25rem'
          }}>
            At Mesakai, we belive food and people Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam.
          </p>
          <button
            onClick={scrollToPage2}
            className='border-2 rounded-md hover:bg-white hover:text-[#585651] transition-colors'
            style={{
              padding: 'clamp(0.25rem, 1vh, 1rem) clamp(1rem, min(2vw, 4vh), 2.5rem)',
              fontSize: circleWidth ? `clamp(0.875rem, ${circleWidth * 0.015}px, 1.25rem)` : 'clamp(0.875rem, min(1.5vw, 3vh), 1.25rem)'
            }}
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page1Landscape
