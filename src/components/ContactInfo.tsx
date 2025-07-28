'use client'

import { CONTACT_INFO } from '@/config/contact'

interface ContactInfoProps {
  type: 'email' | 'phone'
  showLabel?: boolean
  className?: string
}

export default function ContactInfo({ type, showLabel = true, className = '' }: ContactInfoProps) {
  const value = CONTACT_INFO[type]
  const label = type.charAt(0).toUpperCase() + type.slice(1)

  if (!showLabel) {
    return <span className={className}>{value}</span>
  }

  return (
    <div>
      <p className="text-lg mb-2">{label}</p>
      <p className={`opacity-90 ${className}`}>{value}</p>
    </div>
  )
} 