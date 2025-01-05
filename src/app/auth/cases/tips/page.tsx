import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const legalTips = [
  {
    title: "Preparing for Court",
    description: "Essential steps to take before your court appearance",
    content: "Gather all relevant documents, review your case details, and consult with your lawyer. Dress appropriately and arrive early to the courthouse.",
  },
  {
    title: "Understanding Legal Jargon",
    description: "Common legal terms explained",
    content: "Familiarize yourself with terms like plaintiff, defendant, jurisdiction, and statute of limitations. Ask your lawyer to explain any terms you don't understand.",
  },
  {
    title: "Your Rights During Arrest",
    description: "What to know if you're arrested",
    content: "Remember your right to remain silent and your right to an attorney. Don't resist arrest, but politely assert your rights.",
  },
]

export default function TipsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Legal Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {legalTips.map((tip, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tip.title}</CardTitle>
              <CardDescription>{tip.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{tip.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

