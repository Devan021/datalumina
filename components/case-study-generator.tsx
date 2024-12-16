'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Download } from 'lucide-react'
import { jsPDF } from 'jspdf'

const industries = [
  "E-commerce",
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Technology",
  "Education",
]

const caseStudyTemplates = {
  "E-commerce": {
    title: "Revolutionizing Online Retail with AI",
    solutions: [
      "Automated customer support chatbots",
      "AI-powered product recommendations",
      "Intelligent inventory management",
      "Personalized email marketing campaigns",
    ],
    results: [
      "50% reduction in customer support response time",
      "30% increase in average order value",
      "20% reduction in inventory costs",
      "40% improvement in email campaign conversion rates",
    ],
  },
  "Healthcare": {
    title: "Enhancing Patient Care through AI Automation",
    solutions: [
      "AI-assisted diagnosis and treatment planning",
      "Automated appointment scheduling and reminders",
      "Intelligent medical record management",
      "Predictive analytics for patient outcomes",
    ],
    results: [
      "25% improvement in diagnosis accuracy",
      "40% reduction in appointment no-shows",
      "60% faster access to patient records",
      "30% better prediction of patient readmissions",
    ],
  },
  // Add more industry templates as needed
}

export default function CaseStudyGenerator() {
  const [industry, setIndustry] = useState('')
  const [challenges, setChallenges] = useState('')
  const [goals, setGoals] = useState('')
  const [generatedCaseStudy, setGeneratedCaseStudy] = useState<string | null>(null)

  const generateCaseStudy = () => {
    if (!industry || !challenges || !goals) {
      alert('Please fill in all fields')
      return
    }

    const template = caseStudyTemplates[industry as keyof typeof caseStudyTemplates] || caseStudyTemplates["E-commerce"]
    
    const caseStudy = `
      # ${template.title}

      ## Industry
      ${industry}

      ## Challenges
      ${challenges}

      ## Goals
      ${goals}

      ## AI Solutions Implemented
      ${template.solutions.map(solution => `- ${solution}`).join('\n')}

      ## Results Achieved
      ${template.results.map(result => `- ${result}`).join('\n')}

      This case study demonstrates how HollerLabs' AI automation solutions can transform businesses in the ${industry} industry, addressing specific challenges and achieving remarkable results.
    `

    setGeneratedCaseStudy(caseStudy)
  }

  const downloadCaseStudy = () => {
    if (!generatedCaseStudy) return

    const pdf = new jsPDF()
    const splitText = pdf.splitTextToSize(generatedCaseStudy, 180)
    pdf.text(splitText, 15, 15)
    pdf.save(`${industry.toLowerCase()}-ai-case-study.pdf`)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-4xl mx-auto bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">Custom Case Study Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-gray-200">Industry</Label>
              <Select onValueChange={setIndustry}>
                <SelectTrigger id="industry" className="bg-background text-white border-gray-700">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (
                    <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-gray-200">Challenges</Label>
              <Textarea
                id="challenges"
                placeholder="Describe your business challenges"
                value={challenges}
                onChange={(e) => setChallenges(e.target.value)}
                className="bg-background text-white border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals" className="text-gray-200">Goals</Label>
              <Textarea
                id="goals"
                placeholder="Describe your business goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="bg-background text-white border-gray-700"
              />
            </div>
            <Button onClick={generateCaseStudy} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Generate Case Study
            </Button>
            
            {generatedCaseStudy && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 border border-gray-700 rounded-lg bg-background/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Generated Case Study</h3>
                <pre className="whitespace-pre-wrap text-sm text-gray-300 mb-4">{generatedCaseStudy}</pre>
                <Button onClick={downloadCaseStudy} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Download Case Study (PDF)
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

