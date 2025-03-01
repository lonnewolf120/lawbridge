import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

interface CategoryCardProps {
  name: string
  description: string
  href: string
  image: string
  imageId: number
  courseCount: number
}

export function CategoryCard({ name, description, href, image, imageId, courseCount }: CategoryCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={200}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {courseCount} Courses
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Link href={href} className="w-full">
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Explore Courses
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


