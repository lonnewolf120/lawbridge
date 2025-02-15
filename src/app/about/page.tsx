import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Shalish</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-muted-foreground text-center">
          Shalish is your trusted partner in navigating the complex world of law. We connect you with expert legal professionals and provide resources to help you understand and address your legal needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            To make legal services accessible, understandable, and efficient for everyone, bridging the gap between legal professionals and those in need of legal assistance.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            A world where legal support is readily available to all, empowering individuals and businesses to navigate legal challenges with confidence and ease.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Integrity</li>
              <li>Accessibility</li>
              <li>Innovation</li>
              <li>Empowerment</li>
              <li>Excellence</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg?text=JD" },
            { name: "John Smith", role: "Chief Legal Officer", image: "/placeholder.svg?text=JS" },
            { name: "Emily Brown", role: "Head of Technology", image: "/placeholder.svg?text=EB" },
          ].map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <Card>
          <CardContent className="prose max-w-none">
            <p>
              Shalish was founded in 2023 with a simple yet powerful idea: to make legal services more accessible and understandable for everyone. Our founders, experienced legal professionals and tech innovators, recognized the challenges many people face when dealing with legal issues.
            </p>
            <p>
              They envisioned a platform that would not only connect clients with the right legal experts but also provide educational resources to empower individuals with legal knowledge. This vision gave birth to Shalish, a comprehensive legal service platform that combines technology with human expertise.
            </p>
            <p>
              Since our inception, we've been committed to breaking down the barriers in the legal industry. We've built a network of qualified lawyers, developed an AI-powered legal assistant, and created an extensive educational hub. Our journey is driven by the belief that everyone deserves access to quality legal support and information.
            </p>
            <p>
              As we continue to grow and evolve, our focus remains on innovation, accessibility, and empowerment. We're constantly exploring new ways to improve our services and expand our reach, always with our users' needs at the forefront of everything we do.
            </p>
            <p>
              Join us in our mission to bridge the gap between legal expertise and those who need it. Together, we're shaping a future where legal support is just a click away for everyone.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

