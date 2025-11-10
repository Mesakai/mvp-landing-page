import landingHeroAsset from '../assets/LandingHeroAsset.png'
import mesakaiLogo from '../assets/logos/Mesakai full logo white.svg'
import gradientArc from '../assets/gradient-arc.svg'
import gradientCircle from '../assets/gradient-circle.svg'

function Page1() {

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
        className="absolute top-0 left-0 w-full"
        style={{ height: '30dvh' }}
      />

      {/* Mesakai Logo - positioned at top within arc */}
      <img
        src={mesakaiLogo}
        alt="Mesakai"
        className="absolute top-[3vh] left-1/2 -translate-x-1/2 z-20"
        style={{ width: 'min(20vh, 300px)' }}
      />

      {/* Gradient Circle - bottom left, only top right quarter visible */}
      <img
        src={gradientCircle}
        alt=""
        className="absolute bottom-0 left-30"
        style={{
          width: '120vw',
          minWidth: '800px',
          maxWidth: '2000px',
          height: 'auto',
          transform: 'translate(-50%, 50%) rotate(135deg)',
        }}
      />

      {/* Text Content - positioned in bottom half */}
      <div className="text-white p-[10vw] w-full flex justify-end items-start flex-col z-10 relative" style={{ height: '100dvh' }}>
        <h1 className='font-bold text-4xl mb-5 w-80'>For the love of good food and great company</h1>
        <p className='text-lg w-80 mb-5'>
          At Mesakai, we belive food and people Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam.</p>
          <button onClick={scrollToPage2} className='border-2 p-1 px-5 rounded-md hover:bg-white hover:text-[#585651] transition-colors'>Join the waitlist</button>
      </div>
    </section>
  )
}

export default Page1
