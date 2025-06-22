'use client'

import { useState } from 'react'

interface EmailFormProps {
  className?: string
  placeholder?: string
  buttonText?: string
  showPrivacyNote?: boolean
}

export default function EmailForm({ 
  className = '',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  showPrivacyNote = true
}: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setMessage('Demo mode: Email subscription recorded! 🎉')
      setEmail('')
      console.log('Demo: Email subscription for:', email)
    }, 1000)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === 'loading'}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email.trim()}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? 'Subscribing...' : buttonText}
          </button>
        </div>
        
        {/* Status messages */}
        {message && (
          <div className={`text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </div>
        )}
        
        {/* Privacy note */}
        {showPrivacyNote && (
          <p className="text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        )}
      </form>
    </div>
  )
}

// Compact version for inline use
export function EmailFormCompact({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || status === 'loading') return

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  if (status === 'success') {
    return (
      <div className={`text-green-600 text-sm font-medium ${className}`}>
        ✓ Demo: Subscribed!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        disabled={status === 'loading'}
        className={`flex-1 px-3 py-1 text-sm border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          status === 'error' ? 'border-red-300' : 'border-gray-300'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading' || !email.trim()}
        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-r hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {status === 'loading' ? '...' : 'Subscribe'}
      </button>
    </form>
  )
}
