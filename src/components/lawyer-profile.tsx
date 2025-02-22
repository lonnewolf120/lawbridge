import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Mail, MapPin, Phone, Star, DollarSign } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  fees: number
  email: string
  phone_number: string
  office_contact_number: string
  address: string
  bar_number: string
  nid: string
  user_created_at: string
  user_id: number
  username: string | null
}

export function LawyerProfile({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background py-12 px-4">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary/10">
                <AvatarImage src={lawyer.profile_picture_url} alt={`${lawyer.first_name} ${lawyer.last_name}`} />
                <AvatarFallback>
                  {lawyer.first_name[0]}
                  {lawyer.last_name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{`${lawyer.first_name} ${lawyer.last_name}`}</h1>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{lawyer.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                  <span className="font-medium">{lawyer.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <DollarSign className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                  <span className="font-medium">{lawyer.fees}</span>
                  <span className="text-muted-foreground">Tk</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Link href={`/lawyer/${lawyer.lawyer_id}/hire`} className="flex-1 md:flex-none">
                <Button className="w-full" size="lg">
                  Hire Lawyer
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Practice Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {lawyer.practice_areas.split(",").map((area, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {area.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Biography</h3>
                <p className="text-muted-foreground leading-relaxed">{lawyer.biography}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Specialization</h3>
                <p className="text-muted-foreground leading-relaxed">{lawyer.specialization}</p>
              </div>
            </TabsContent>
            <TabsContent value="contact" className="space-y-6 mt-6">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{lawyer.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{lawyer.phone_number}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-muted-foreground">{lawyer.address}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="credentials" className="space-y-6 mt-6">
              <div className="grid gap-4">
                <div>
                  <h3 className="font-medium">Bar Number</h3>
                  <p className="text-muted-foreground">{lawyer.bar_number}</p>
                </div>
                <div>
                  <h3 className="font-medium">NID</h3>
                  <p className="text-muted-foreground">{lawyer.nid}</p>
                </div>
                <div>
                  <h3 className="font-medium">Member Since</h3>
                  <p className="text-muted-foreground">{new Date(lawyer.user_created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

