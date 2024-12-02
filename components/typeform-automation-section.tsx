"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  industry: string;
}

export default function TypeformAutomationSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    industry: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const webhookUrl = "https://hook.eu2.make.com/d6xp8kgjrbh5r7mld12fw2ksd3gg9o2q";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the webhook");
      }

      console.log("Form data successfully sent to webhook:", formData);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending form data to webhook:", error);
    } finally {
      setTimeout(() => setIsSubmitted(false), 5000); // Reset the popup after 5 seconds
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience Our <span className="text-gradient">Lead Nurturing Automation</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Fill out the form and see our automation in action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="relative">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-8 flex justify-between items-center">
                    <div className="flex gap-2">
                      {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                            i + 1 <= step ? "bg-primary" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      Step {step} of {totalSteps}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData("name", e.target.value)}
                            placeholder="John Doe"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="john@example.com"
                            required
                            className="mt-1"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => updateFormData("company", e.target.value)}
                            placeholder="Acme Inc"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">Your Role</Label>
                          <Input
                            id="role"
                            value={formData.role}
                            onChange={(e) => updateFormData("role", e.target.value)}
                            placeholder="CEO, Manager, etc."
                            required
                            className="mt-1"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor="industry">Industry</Label>
                          <Input
                            id="industry"
                            value={formData.industry}
                            onChange={(e) => updateFormData("industry", e.target.value)}
                            placeholder="Technology, Healthcare, etc."
                            required
                            className="mt-1"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                    )}
                    {step < totalSteps ? (
                      <Button type="button" className="ml-auto" onClick={handleNext}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="ml-auto bg-primary text-white hover:bg-primary/90"
                      >
                        Submit <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.video
              src="/robot.mp4"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            />
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-primary/90 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-center p-6">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Automation Triggered!</h3>
                    <p className="text-lg">Check your email for a personalized follow-up message.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
