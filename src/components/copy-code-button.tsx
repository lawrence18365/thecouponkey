'use client'

interface CopyCodeButtonProps {
  code: string
  className?: string
  children?: React.ReactNode
  alert?: string
}

export default function CopyCodeButton({ code, className = '', children, alert }: CopyCodeButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    if (alert) {
      window.alert(alert)
    } else {
      window.alert(`Code ${code} copied!`)
    }
  }

  return (
    <button 
      onClick={handleCopy}
      className={className}
    >
      {children || 'Copy Code'}
    </button>
  )
}
