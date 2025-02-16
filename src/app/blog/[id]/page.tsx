import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

// This data should ideally come from a database or API
const posts: Post[] = [
  {
    id: 1,
    title: 'How to file a lawsuit against a company',
    content: `
      <p>Filing a lawsuit against a company can be a complex process, but with the right guidance, it can be manageable. Here's a step-by-step guide to help you navigate this legal procedure:</p>
      
      <h2>1. Determine if you have a valid case</h2>
      <p>Before proceeding, ensure that you have a legitimate legal claim against the company. Consult with a lawyer to evaluate the strength of your case.</p>
      
      <h2>2. Gather evidence</h2>
      <p>Collect all relevant documents, correspondence, and other evidence that support your claim. This may include contracts, emails, financial records, or witness statements.</p>
      
      <h2>3. Consider alternative dispute resolution</h2>
      <p>Before filing a lawsuit, explore options like mediation or arbitration. These methods can be faster and less expensive than going to court.</p>
      
      <h2>4. File a complaint</h2>
      <p>If you decide to proceed with the lawsuit, draft and file a complaint with the appropriate court. This document outlines your allegations against the company.</p>
      
      <h2>5. Serve the complaint</h2>
      <p>Ensure that the company is properly served with a copy of the complaint and a summons to appear in court.</p>
      
      <h2>6. Prepare for the legal process</h2>
      <p>Be ready for various stages of the legal process, including discovery, pre-trial motions, and potentially, a trial.</p>
      
      <p>Remember, legal proceedings can be time-consuming and costly. It's advisable to seek professional legal counsel to guide you through this process and represent your interests effectively.</p>
    `,
    image: '/business2.webp',
    date: '2023-05-15',
    author: 'Jane Doe',
    category: 'Legal Procedures'
  },
  {
    id: 2,
    title: 'Understanding business law in Bangladesh',
    content: `
      <p>Business law in Bangladesh encompasses a wide range of regulations that govern commercial activities in the country. Here's an overview of key aspects that entrepreneurs should be aware of:</p>
      
      <h2>1. Company Formation</h2>
      <p>The Companies Act 1994 governs the formation and operation of companies in Bangladesh. It outlines the procedures for incorporation, types of companies, and compliance requirements.</p>
      
      <h2>2. Labor Laws</h2>
      <p>The Bangladesh Labour Act 2006 (amended in 2018) sets out regulations on working hours, leave, compensation, and worker safety. Compliance with these laws is crucial for businesses.</p>
      
      <h2>3. Taxation</h2>
      <p>Understanding the tax system is vital. This includes corporate tax, value-added tax (VAT), and personal income tax. The National Board of Revenue (NBR) oversees tax collection and administration.</p>
      
      <h2>4. Intellectual Property Rights</h2>
      <p>Protection of intellectual property is governed by various acts, including the Copyright Act 2000 and the Patents and Designs Act 1911.</p>
      
      <h2>5. Foreign Investment</h2>
      <p>The Foreign Private Investment (Promotion and Protection) Act 1980 provides the framework for foreign investments in Bangladesh.</p>
      
      <h2>6. Environmental Regulations</h2>
      <p>The Bangladesh Environment Conservation Act 1995 sets out environmental protection measures that businesses must adhere to.</p>
      
      <p>It's important to note that laws and regulations can change. Always consult with a qualified legal professional for the most up-to-date and specific advice for your business situation in Bangladesh.</p>
    `,
    image: '/business.jpeg',
    date: '2023-05-20',
    author: 'John Smith',
    category: 'Business Law'
  },
  {
    id: 3,
    title: 'The path to becoming a lawyer in Bangladesh',
    content: `
      <p>Becoming a lawyer in Bangladesh requires dedication, hard work, and a series of educational and professional steps. Here's a guide to help you navigate this career path:</p>
      
      <h2>1. Complete Higher Secondary Education</h2>
      <p>Finish your Higher Secondary Certificate (HSC) or equivalent with good grades, preferably in the humanities group.</p>
      
      <h2>2. Earn a Law Degree</h2>
      <p>Enroll in a 4-year Bachelor of Laws (LLB) program at a recognized university. Some universities also offer a 5-year integrated program combining BA and LLB.</p>
      
      <h2>3. Obtain a Master of Laws (Optional)</h2>
      <p>While not mandatory, many aspiring lawyers choose to pursue an LLM to specialize in a particular area of law.</p>
      
      <h2>4. Pass the Bar Council Enrollment Examination</h2>
      <p>After completing your LLB, you must pass the Bar Council Enrollment Examination to become eligible to practice law.</p>
      
      <h2>5. Complete Apprenticeship</h2>
      <p>Work under a senior lawyer for a specified period to gain practical experience.</p>
      
      <h2>6. Enroll as an Advocate</h2>
      <p>After completing your apprenticeship and meeting all requirements, you can apply to be enrolled as an advocate with the Bangladesh Bar Council.</p>
      
      <h2>7. Continuous Learning</h2>
      <p>The legal field is constantly evolving. Continuous learning and staying updated with new laws and amendments is crucial for a successful career.</p>
      
      <p>Remember, becoming a lawyer requires not just academic excellence, but also strong analytical, communication, and interpersonal skills. It's a challenging but rewarding career path for those passionate about law and justice.</p>
    `,
    image: '/lawyer2.jpg',
    date: '2023-05-25',
    author: 'Aminul Islam',
    category: 'Legal Career'
  }
]

interface BlogPostProps {
  params: {
    id: string;
  };
}

export default async function BlogPost(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="relative aspect-[16/9] w-full mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <Badge className="mb-2">{post.category}</Badge>
          <CardTitle className="text-3xl mb-2">{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            <span>{post.author}</span> • <span>{post.date}</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <span className="text-sm text-muted-foreground">Share this article:</span>
          {/* Add social sharing buttons here */}
        </CardFooter>
      </Card>
    </div>
  )
}