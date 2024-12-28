import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    id: 1,
    title: 'How to file a lawsuit against a company',
    excerpt: 'Learn the step-by-step process of filing a lawsuit against a company, including necessary documentation and legal procedures.',
    image: '/placeholder.svg?text=Blog1',
    date: '2023-05-15',
    author: 'Jane Doe',
    category: 'Legal Procedures'
  },
  {
    id: 2,
    title: 'Understanding business law in Bangladesh',
    excerpt: 'An overview of key business laws and regulations that every entrepreneur in Bangladesh should be aware of.',
    image: '/placeholder.svg?text=Blog2',
    date: '2023-05-20',
    author: 'John Smith',
    category: 'Business Law'
  },
  {
    id: 3,
    title: 'The path to becoming a lawyer in Bangladesh',
    excerpt: 'Explore the educational requirements, exams, and steps needed to pursue a career in law in Bangladesh.',
    image: '/placeholder.svg?text=Blog3',
    date: '2023-05-25',
    author: 'Aminul Islam',
    category: 'Legal Career'
  }
]

export default function BlogPosts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <Badge className="mb-2">{post.category}</Badge>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                <div className="flex justify-between w-full">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

