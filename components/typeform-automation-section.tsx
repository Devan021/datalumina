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
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const validateStep = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "A valid email is required.";
    } else if (step === 2) {
      if (!formData.company.trim()) newErrors.company = "Company name is required.";
      if (!formData.role.trim()) newErrors.role = "Role is required.";
    } else if (step === 3) {
      if (!formData.industry.trim()) newErrors.industry = "Industry is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    const webhookUrl = "https://hook.eu2.make.com/d6xp8kgjrbh5r7mld12fw2ksd3gg9o2q";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send data to the webhook");

      console.log("Form data successfully sent to webhook:", formData);
      setIsSubmitted(true);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        industry: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000); // Hide popup after 5 seconds
    } catch (error) {
      console.error("Error sending form data to webhook:", error);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined })); // Clear error on input change
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
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
            Fill out the form and see our automation in action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-8 flex justify-between items-center">
                  <div className="flex gap-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-8 rounded-full transition-colors ${
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
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
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
                        {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
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
                        {errors.industry && (
                          <p className="text-red-500 text-sm">{errors.industry}</p>
                        )}
                      </div>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full mt-4 bg-primary text-white hover:bg-primary/90"
                      >
                        Submit <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handleBack} className="mt-4">
                    Back
                  </Button>
                )}
                {step < totalSteps && (
                  <Button
                    type="button"
                    className="mt-4 ml-auto"
                    onClick={handleNext}
                  >
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          <motion.div className="relative">
            <motion.video
              src="/robot.mp4"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg"
            />
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-primary/90 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
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
