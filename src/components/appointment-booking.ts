// 'use client'

// import { useState } from 'react'
// import { format } from 'date-fns'
// import { Calendar } from '@/components/ui/calendar'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { useRouter } from 'next/navigation'

// const timeSlots = [
//   '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'
// ]

// const formSchema = z.object({
//   date: z.date({
//     required_error: 'Please select a date for your appointment.',
//   }),
//   time: z.string({
//     required_error: 'Please select a time slot.',
//   }),
//   caseBrief: z.string().min(50, 'Case brief must be at least 50 characters long.'),
//   location: z.enum(['lawyer-office', 'client-location'], {
//     required_error: 'Please select an appointment location.',
//   }),
//   clientAddress: z.string().optional(),
//   paymentMethod: z.enum(['online', 'pay-later'], {
//     required_error: 'Please select a payment method.',
//   })
// })

// interface AppointmentBookingProps {
//   lawyerId: number
//   lawyerName: string
//   basePrice: number
// }

// export function AppointmentBooking({ lawyerId, lawyerName, basePrice }: AppointmentBookingProps) {
//   const [step, setStep] = useState(1)
//   const [pricing, setPricing] = useState({
//     basePrice,
//     locationSurcharge: 0,
//     total: basePrice
//   })
//   const router = useRouter()

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       location: 'lawyer-office',
//       paymentMethod: 'online'
//     }
//   })

//   const updatePricing = (location: 'lawyer-office' | 'client-location') => {
//     const locationSurcharge = location === 'client-location' ? 1000 : 0
//     setPricing({
//       basePrice,
//       locationSurcharge,
//       total: basePrice + locationSurcharge
//     })
//   }

//   const nextStep = () => {
//     form.handleSubmit(() => {
//       setStep((currentStep) => currentStep + 1)
//     })()
//   }

//   const prevStep = () => {
//     setStep((currentStep) => currentStep - 1)
//   }

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     const appointmentData = {
//       ...data,
//       lawyerId,
//       totalPrice: pricing.total,
//       lawyerName
//     }

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//       console.log('Appointment Data:', appointmentData)
//     //   toast.success('Appointment booked successfully!')
//       router.push('/dashboard') // Redirect to dashboard or confirmation page
//     } catch (error) {
//       console.error('Appointment booking failed:', error)
//     //   toast.error('Failed to book appointment. Please try again.')
//     }
//   }

//   return (
//     <section>
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle>Book Appointment with {lawyerName}</CardTitle>
//         <CardDescription>
//           Step {step} of 3: {step === 1 ? 'Select Date & Time' : step === 2 ? 'Brief & Location' : 'Summary & Payment'}
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             {step === 1 && (
//               <div className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="date"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-col">
//                       <FormLabel>Appointment Date</FormLabel>
//                       <FormControl>
//                         <Calendar
//                           mode="single"
//                           selected={field.value}
//                           onSelect={field.onChange}
//                         disabled={(date) => date < new Date()}
//                         className="rounded-md border"
//                       />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="time"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Preferred Time</FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select a time slot" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           {timeSlots.map((slot) => (
//                             <SelectItem key={slot} value={slot}>
//                               {slot}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             )}

//             {step === 2 && (
//               <div className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="caseBrief"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Case Brief</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Please provide details about your case..."
//                           className="min-h-[150px]"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormDescription>
//                         This will help the lawyer prepare for your appointment
//                       </FormDescription>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="location"
//                   render={({ field }) => (
//                     <FormItem className="space-y-3">
//                       <FormLabel>Appointment Location</FormLabel>
//                             <FormControl>
//                         <RadioGroup
//                           onValueChange={(value: 'lawyer-office' | 'client-location') => {
//                             field.onChange(value)
//                             updatePricing(value)
//                           }}
//                           defaultValue={field.value}
//                           className="flex flex-col space-y-1"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="lawyer-office" />
//                       </FormControl>
//                             <FormLabel className="font-normal">
//                               Lawyer&apos;s Office
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="client-location" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               My Location (+৳1000)
//                             </FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {form.watch('location') === 'client-location' && (
//                   <FormField
//                     control={form.control}
//                     name="clientAddress"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Your Address</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Enter your full address" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 )}
//               </div>
//             )}

//             {step === 3 && (
//               <div className="space-y-4">
//                 <div className="rounded-lg bg-muted p-4">
//                   <h3 className="font-semibold mb-2">Appointment Summary</h3>
//                   <div className="space-y-2">
//                     <p>Date: {form.getValues('date') ? format(form.getValues('date'), 'PPP') : 'Not selected'}</p>
//                     <p>Time: {form.getValues('time') || 'Not selected'}</p>
//                     <p>Location: {form.getValues('location') === 'lawyer-office' ? "Lawyer's Office" : 'Your Location'}</p>
//                     <div className="border-t pt-2 mt-2">
//                       <p>Base Price: ৳{pricing.basePrice}</p>
//                       {pricing.locationSurcharge > 0 && (
//                         <p>Location Surcharge: ৳{pricing.locationSurcharge}</p>
//                       )}
//                       <p className="font-semibold">Total: ৳{pricing.total}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <FormField
//                   control={form.control}
//                   name="paymentMethod"
//                   render={({ field }) => (
//                     <FormItem className="space-y-3">
//                       <FormLabel>Payment Method</FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-col space-y-1"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="online" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Pay Now
//                             </FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="pay-later" />
//                             </FormControl>
//                             <FormLabel className="font-normal">
//                               Pay Later (at appointment)
//                             </FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             )}

//             <CardFooter className="flex justify-between">
//               {step > 1 && (
//                 <Button variant="secondary" onClick={prevStep}>
//                   Back
//                 </Button>
//               )}
//               {step < 3 ? (
//                 <Button onClick={nextStep}>Next</Button>
//               ) : (
//                 <Button type="submit">Book Appointment</Button>
//               )}
//             </CardFooter>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//     </section>
//   )

 
// }
