export type AppointmentLocation = 'lawyer-office' | 'client-location'

export type AppointmentStatus = 'pending' | 'confirmed' | 'paid' | 'completed' | 'cancelled'

export type PaymentMethod = 'online' | 'pay-later'

export interface AppointmentFormData {
  lawyerId: number
  date: Date
  time: string
  caseBrief: string
  location: AppointmentLocation
  clientAddress?: string
  paymentMethod: PaymentMethod
}

export interface PricingDetails {
  basePrice: number
  locationSurcharge: number
  total: number
}

