'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { parseCookies } from 'nookies'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, scaleUp } from "@/lib/animation"
import { get_req } from '@/lib/functions'
import { useRouter } from 'next/navigation';

interface Case {
  case_id: string; // Changed to case_id to match your data
  title: string;
  client_id: string; // Changed to client_id to match your data
  category: string; // Changed to category to match your data
  status: string;
  description: string; // Assuming you want to pass the description as well
  // ... other properties
}

function LawyerCasesPage() {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.token;
  const [cases, setCases] = useState<Case[]>([]); // Type the state with the Case interface
  const user = cookies.user ? JSON.parse(cookies.user) : null;
  const lawyer = cookies.lawyer ? JSON.parse(cookies.lawyer) : null;

  useEffect(() => {
    console.log('Fetching cases... for ', lawyer);
    const fetchCases = async () => {
      try {
        const response = await get_req('cases');
        const data = await response.json();
        console.log("Cases:", data);
        setCases(data);
      } catch (error) {
        console.error("Error fetching cases:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    };
    fetchCases();
  }, []);

  const handleCaseClick = (case_: Case) => {
    // Use router.push to navigate to the new page, passing the case object as state
    router.push(`/lawyer/cases/${case_.case_id}?caseData=${encodeURIComponent(JSON.stringify(case_))}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="container mx-auto py-12 px-4"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideIn}
        className="flex justify-between items-center mb-8"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl font-bold"
        >
          Case Management
        </motion.h1>
        <Button>
          Create New Case
        </Button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case ID</TableHead>
                  <TableHead>Case Title</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cases.map((case_) => (
                  <TableRow key={case_.case_id} onClick={() => handleCaseClick(case_)} style={{ cursor: 'pointer' }}> {/* Added onClick handler */}
                    <TableCell>{case_.case_id}</TableCell>
                    <TableCell>{case_.title}</TableCell>
                    <TableCell>{case_.client_id}</TableCell>
                    <TableCell>{case_.category ?? '?'}</TableCell>
                    <TableCell>
                      <Badge variant={case_.status === 'Active' ? 'default' : case_.status === 'On Hold' ? 'secondary' : 'outline'}>
                        {case_.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="link">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default LawyerCasesPage;