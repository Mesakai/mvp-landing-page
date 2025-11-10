import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useWaitlistForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value
    // Remove spaces
    const noSpaces = value.replace(/\s/g, '')
    // Capitalize first char, lowercase the rest
    const formatted = noSpaces.charAt(0).toUpperCase() + noSpaces.slice(1).toLowerCase()
    setter(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Insert the new waitlist entry
      const { error: insertError } = await supabase
        .from('waitlist_entries')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(),
          ip_address: null, // Can be enhanced to capture real IP
          user_agent: navigator.userAgent,
        })

      if (insertError) throw insertError

      // Success! Flip the card
      setIsFlipped(true)
    } catch (err: any) {
      console.error('Error submitting to waitlist:', err)

      // Check for duplicate email error
      if (err.code === '23505' || err.message?.includes('duplicate key') || err.message?.includes('idx_waitlist_entries_email_lower')) {
        setError('This email has already joined the waitlist')
      } else {
        setError('Sorry, there\'s been a problem. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
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
  }
}
