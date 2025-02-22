"use client"
import {useEffect} from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BriefcaseIcon, DollarSign, MapPin, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { post_req } from '@/lib/functions'
import { Snackbar } from '@mui/material'
import { set } from 'date-fns'

type Lawyer = {
  lawyer_id: number
  first_name: string
  last_name: string
  profile_picture_url: string
  practice_areas: string
  rating: string
  location: string
  biography: string
  specialization: string
  email: string
  phone_number: string
  office_contact_number: string
  address: string
  bar_number: string
  nid: string
  fees: number
  user_created_at: string
  user_id: number
  username: string | null
}

const formSchema = z.object({
  caseTitle: z.string({
    required_error: "Please provide a title for your case",
  }),
  caseType: z.string({
    required_error: "Please select a case type",
  }),
  caseDescription: z.string().min(10, {
    message: "Case description must be at least 10 characters.",
  }),
  caseFiles : z.string().min(10, {
    message: "Please provide files about your case",
  }),
  caseCategory: z.string({
    required_error: "Please select a case category",
  }),
  court: z.string().min(2, {
    message: "Please enter a valid court name",
  }),
  location: z.string().min(2, {
    message: "Please enter a valid location",
  }),
  hearingDate: z.string({
    required_error: "Please select a hearing date",
  }),
})

export default function LawyerHire({ lawyer }: { lawyer: Lawyer }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cookies = parseCookies()
  const [snackopen, setSnack] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const [snackColor, setSnackColor] = useState('success')
  const user = cookies.user ? JSON.parse(cookies.user) : null
  const lawyerCurrent = cookies.lawyer ? JSON.parse(cookies.lawyer) : null
  const token = cookies.token

  useEffect(() => {
    if (!user) {
      setSnackMessage('Please login to hire a lawyer')
      setSnackColor('error')
      setSnack(true)
      window.location.href = '/login'
    }
    if (lawyerCurrent) {
      setSnackMessage('You are already a lawyer')
      setSnackColor('error')
      setSnack(true)
      window.location.href = '/lawyer/dashboard'
    }
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseType: "",
      caseDescription: "",
      caseCategory: "",
      court: "",
      location: "",
      hearingDate: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      console.log("Form values:", values)

      const res = await post_req({
          caseTitle: values.caseTitle,
          caseType: values.caseType,
          court: values.court,
          location: values.location,
          hearingDate: new Date(values.hearingDate),
          caseFiles: values.caseFiles,
          lawyer_id: lawyer.lawyer_id,
          description: values.caseDescription
      }, 'cases/client/req')
      // Add your API call here
      console.log("response:", res)
      if(res.status >= 200 && res.status < 300){

      setSnackMessage('Your hire request has been submitted')
      setSnackColor('success')
      setSnack(true)
      // Redirect or show success message

      toast({
        title: "Success!",
        description: "Your hire request has been submitted.",
      })
    }
    else{
      setSnackMessage('Something went wrong. Please try again.')
      setSnackColor('error')
      setSnack(true)

    }
      // Redirect or show success message
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background py-12 px-4">
      <Snackbar open={snackopen} autoHideDuration={6000} message={snackMessage} />
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-20 h-20 border-4 border-primary/10">
                <AvatarImage src={lawyer.profile_picture_url} alt={`${lawyer.first_name} ${lawyer.last_name}`} />
                <AvatarFallback>{lawyer.first_name[0]}{lawyer.last_name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{`${lawyer.first_name} ${lawyer.last_name}`}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{lawyer.location}</span>
                  <Star className="w-4 h-4 text-secondary-500 fill-secondary-500 ml-2" />
                  <span>{lawyer.rating}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BriefcaseIcon className="w-4 h-4 text-muted-foreground" />
                  <Badge variant="secondary">{lawyer.practice_areas}</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <DollarSign className="w-4 h-4 text-primary-600" />
                  <span className="font-medium">{lawyer.fees}</span>
                  <span className="text-muted-foreground">Tk</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="caseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Case Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a case type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="criminal">Criminal</SelectItem>
                          <SelectItem value="civil">Civil</SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <FormField
                  control={form.control}
                  name="caseCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Case Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="category1">Category 1</SelectItem>
                          <SelectItem value="category2">Category 2</SelectItem>
                          <SelectItem value="category3">Category 3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="court"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Court</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter court name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the location of the court
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hearingDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hearing Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormDescription>
                        Select your preferred hearing date
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="caseTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Case Title</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide title for your case"
                        className="min-h-[30px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Add a title to your case (can be edited later)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="caseDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Case Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide details about your case"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include all relevant details about your case
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="caseFiles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Case Files</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide files about your case"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include all relevant files in urls (Google Drive, Dropbox, etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Hire Request"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
