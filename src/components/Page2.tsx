import mesakaiLogo from '../assets/logos/Mesakai full logo white.svg'
import { useWaitlistForm } from '@/hooks/useWaitlistForm'

function Page2() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    isFlipped,
    isLoading,
    error,
    handleNameChange,
    handleSubmit
  } = useWaitlistForm()

  return (
    <section id="page2" className="h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #FFA63C 0%, #FA5336 50%, #F00C50 100%)' }}>
      <div className="max-w-md w-full" style={{ perspective: '1000px' }}>
        <div
          className="relative w-full transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front of card */}
          <div
            className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/20"
            style={{ backfaceVisibility: 'hidden' }}
          >
        <div className="flex justify-center mb-4">
          <img src={mesakaiLogo} alt="Mesakai" className="w-40" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Join the Waitlist</h2>
        <p className="text-white mb-6 text-center opacity-80">Get early access to food discovery made personal</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => handleNameChange(e, setFirstName)}
              required
              className="w-full px-4 py-2 border border-white/40 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white/60 backdrop-blur-sm text-[#585651]"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => handleNameChange(e, setLastName)}
              required
              className="w-full px-4 py-2 border border-white/40 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white/60 backdrop-blur-sm text-[#585651]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-white/40 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white/60 backdrop-blur-sm text-[#585651]"
            />
          </div>

          {error && (
            <div className="text-red-200 text-sm text-center bg-red-500/20 border border-red-300/30 rounded-md p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#FFA63C] via-[#FA5336] to-[#F00C50] text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Joining...' : 'Sign me up!'}
          </button>
        </form>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/20 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="flex justify-center mb-6">
              <img src={mesakaiLogo} alt="Mesakai" className="w-40" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Welcome to the club!</h2>
            <p className="text-white text-center text-lg">You've been added to our waitlist and will be notified when we go live!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page2
