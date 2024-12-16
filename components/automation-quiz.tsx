'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Download } from 'lucide-react'
import { jsPDF } from 'jspdf'

const questions = [
  {
    question: "How do you currently handle customer inquiries?",
    options: [
      { text: "Manually respond to each inquiry", score: 80 },
      { text: "Use templates, but still manually send", score: 60 },
      { text: "Use a basic autoresponder", score: 40 },
      { text: "We have an advanced AI chatbot", score: 0 }
    ]
  },
  {
    question: "How do you manage your inventory?",
    options: [
      { text: "Manual spreadsheets", score: 90 },
      { text: "Basic inventory software", score: 60 },
      { text: "Advanced inventory management system", score: 30 },
      { text: "Fully automated with AI predictions", score: 0 }
    ]
  },
  {
    question: "How do you handle data entry tasks?",
    options: [
      { text: "Manually enter all data", score: 100 },
      { text: "Use basic data entry software", score: 70 },
      { text: "Partially automated data entry", score: 40 },
      { text: "Fully automated with AI and OCR", score: 0 }
    ]
  }
]

export default function AutomationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score]
    setScores(newScores)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateAutomationPotential = () => {
    const totalScore = scores.reduce((a, b) => a + b, 0)
    return Math.round((totalScore / (questions.length * 100)) * 100)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores([])
    setShowResults(false)
  }

  const downloadReport = () => {
    const pdf = new jsPDF()
    pdf.setFontSize(20)
    pdf.text('Your Automation Potential Report', 20, 20)
    pdf.setFontSize(16)
    pdf.text(`Automation Potential: ${calculateAutomationPotential()}%`, 20, 40)
    pdf.setFontSize(12)
    pdf.text('Based on your answers, here are some areas where you can improve:', 20, 60)
    questions.forEach((q, index) => {
      pdf.text(`${index + 1}. ${q.question}`, 20, 80 + index * 20)
    })
    pdf.save('automation-potential-report.pdf')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-2xl mx-auto bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">How Automatable is Your Business?</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResults ? (
              <div className="space-y-4">
                <Progress value={(currentQuestion / questions.length) * 100} className="w-full" />
                <h3 className="text-lg font-semibold text-white">{questions[currentQuestion].question}</h3>
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full text-left justify-start h-auto py-3 text-gray-300 hover:text-white hover:bg-primary/20"
                        onClick={() => handleAnswer(option.score)}
                      >
                        {option.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Results</h3>
                <p className="text-lg text-gray-300">Your business can automate up to</p>
                <div className="text-4xl font-bold text-primary">{calculateAutomationPotential()}%</div>
                <p className="text-lg text-gray-300">of tasks. Here's how we can help!</p>
                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90" onClick={downloadReport}>
                  Download your personalized automation roadmap
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!showResults && currentQuestion > 0 && (
              <Button variant="outline" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                Previous
              </Button>
            )}
            {showResults && (
              <Button onClick={resetQuiz} className="bg-primary text-primary-foreground hover:bg-primary/90">Retake Quiz</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

