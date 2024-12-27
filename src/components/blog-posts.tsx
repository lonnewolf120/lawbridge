import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'How to file a lawsuit against a company',
    image: '/placeholder.svg?text=Blog1'
  },
  {
    title: 'Legal System related to business',
    image: '/placeholder.svg?text=Blog2'
  },
  {
    title: 'How to become a lawyer',
    image: '/placeholder.svg?text=Blog3'
  }
]

export default function BlogPosts() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href="#" className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium group-hover:text-blue-600">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

