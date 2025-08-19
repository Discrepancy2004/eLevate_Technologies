"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Users,
  Target,
  Shield,
  FileText,
  Zap,
  TrendingUp,
  Award,
  Clock,
  BarChart3,
  ArrowRight,
  Star,
  Quote,
  Play,
  ChevronRight,
  Sparkles,
  Globe,
  Code,
  Database,
  Smartphone,
} from "lucide-react"
import { useState, useEffect } from "react"
import { NavbarDemo } from "@/components/ui/navbar"
import { LampDemo } from "@/components/ui/lamp"
import FadeContent from "@/components/ui/fade"

export default function ManualTestingServices() {
  const [activeTab, setActiveTab] = useState("overview")
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    bugs: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ projects: 150, clients: 45, bugs: 2847 })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      title: "Test Planning & Strategy",
      description:
        "Comprehensive analysis of requirements and strategic test planning to ensure complete coverage.",
      icon: <Target className='h-8 w-8' />,
      features: [
        "Risk Assessment",
        "Test Coverage Analysis",
        "Resource Planning",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Functional Testing",
      description:
        "Thorough testing across all functional areas with systematic regression and exploratory approaches.",
      icon: <CheckCircle className='h-8 w-8' />,
      features: ["End-to-End Testing", "Integration Testing", "API Testing"],
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Defect Management",
      description:
        "Detailed defect documentation and lifecycle management to ensure swift resolution.",
      icon: <FileText className='h-8 w-8' />,
      features: [
        "Bug Tracking",
        "Severity Classification",
        "Resolution Monitoring",
      ],
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      title: "Test Automation Consulting",
      description:
        "Strategic guidance on automation opportunities and implementation roadmaps.",
      icon: <Zap className='h-8 w-8' />,
      features: ["Automation Strategy", "Tool Selection", "ROI Analysis"],
      color: "bg-chart-4/10 text-chart-4",
    },
    {
      title: "Performance Testing",
      description:
        "Load, stress, and performance testing to ensure optimal system behavior.",
      icon: <TrendingUp className='h-8 w-8' />,
      features: ["Load Testing", "Stress Testing", "Performance Monitoring"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      title: "Team Collaboration",
      description:
        "Seamless integration with your existing teams to enhance overall quality processes.",
      icon: <Users className='h-8 w-8' />,
      features: ["Agile Integration", "DevOps Alignment", "Knowledge Transfer"],
      color: "bg-primary/10 text-primary",
    },
  ]

  const tools = [
    { name: "JIRA", category: "Project Management", icon: "🎯" },
    { name: "Azure DevOps", category: "DevOps", icon: "☁️" },
    { name: "TestRail", category: "Test Management", icon: "📋" },
    { name: "Selenium", category: "Automation", icon: "🤖" },
    { name: "Postman", category: "API Testing", icon: "📡" },
    { name: "JMeter", category: "Performance", icon: "⚡" },
    { name: "Cypress", category: "E2E Testing", icon: "🌲" },
    { name: "Browserstack", category: "Cross-browser", icon: "🌐" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content:
        "Their manual testing expertise helped us identify critical issues before launch. The attention to detail is unmatched.",
      rating: 5,
      company: "TechStart",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, DataFlow",
      content:
        "Professional, thorough, and delivered results ahead of schedule. Our software quality improved dramatically.",
      rating: 5,
      company: "DataFlow",
    },
    {
      name: "Emily Rodriguez",
      role: "QA Director, CloudSys",
      content:
        "The strategic approach to testing and clear documentation made all the difference in our product launch.",
      rating: 5,
      company: "CloudSys",
    },
  ]

  const industries = [
    { name: "FinTech", icon: <Database className='h-6 w-6' />, projects: 25 },
    { name: "Healthcare", icon: <Shield className='h-6 w-6' />, projects: 18 },
    { name: "E-commerce", icon: <Globe className='h-6 w-6' />, projects: 32 },
    {
      name: "Mobile Apps",
      icon: <Smartphone className='h-6 w-6' />,
      projects: 28,
    },
    { name: "SaaS", icon: <Code className='h-6 w-6' />, projects: 22 },
  ]

  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />
      <LampDemo />
      <section className='relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
        <div className='container mx-auto px-4 max-w-7xl relative text-center'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
              <Sparkles className='h-4 w-4' />
              Premium Quality Assurance Services
            </div>
            <h1 className='text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight'>
              Manual Testing
              <span className='text-primary block'>Excellence</span>
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Ensuring software quality through detailed analysis, strategic
              testing, and hands-on expertise
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <Card className='text-center border-2 hover:border-primary/20 transition-all duration-300'>
              <CardContent className='pt-6'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  {animatedStats.projects}+
                </div>
                <div className='text-muted-foreground'>Projects Completed</div>
              </CardContent>
            </Card>
            <Card className='text-center border-2 hover:border-accent/20 transition-all duration-300'>
              <CardContent className='pt-6'>
                <div className='text-4xl font-bold text-accent mb-2 text-green-500'>
                  {animatedStats.clients}+
                </div>
                <div className='text-muted-foreground'>Happy Clients</div>
              </CardContent>
            </Card>
            <Card className='text-center border-2 hover:border-chart-3/20 transition-all duration-300'>
              <CardContent className='pt-6'>
                <div className='text-4xl font-bold text-chart-3 mb-2'>
                  {animatedStats.bugs.toLocaleString()}+
                </div>
                <div className='text-muted-foreground'>Bugs Prevented</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-4 py-16 max-w-7xl'>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className='mb-16 text-center'
        >
          <TabsList className='grid w-full grid-cols-4 mb-12'>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='services'>Services</TabsTrigger>
            <TabsTrigger value='process'>Process</TabsTrigger>
            <TabsTrigger value='results'>Results</TabsTrigger>
          </TabsList>

          <TabsContent value='overview' className='space-y-12'>
            {/* About Section with enhanced design */}
            <Card className='border-2 hover:border-primary/20 transition-all duration-300'>
              <CardHeader>
                <CardTitle className='text-3xl flex items-center gap-3'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <Award className='h-8 w-8 text-primary' />
                  </div>
                  About Our Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  We provide expert manual testing services to help teams
                  deliver high-quality software. Our approach focuses on
                  thorough test planning, execution, and defect tracking to
                  ensure reliability and user satisfaction.
                </p>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-4'>
                    <h4 className='font-semibold text-foreground'>
                      Our Methodology
                    </h4>
                    <ul className='space-y-2'>
                      <li className='flex items-center gap-2 text-muted-foreground'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                        Risk-based testing approach
                      </li>
                      <li className='flex items-center gap-2 text-muted-foreground'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                        Comprehensive documentation
                      </li>
                      <li className='flex items-center gap-2 text-muted-foreground'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                        Continuous improvement
                      </li>
                    </ul>
                  </div>
                  <div className='space-y-4'>
                    <h4 className='font-semibold text-foreground'>
                      Quality Metrics
                    </h4>
                    <div className='space-y-3'>
                      <div>
                        <div className='flex justify-between text-sm mb-1'>
                          <span>Test Coverage</span>
                          <span>98%</span>
                        </div>
                        <Progress value={98} className='h-2' />
                      </div>
                      <div>
                        <div className='flex justify-between text-sm mb-1'>
                          <span>Bug Detection Rate</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className='h-2' />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industry Experience */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Industry Experience</CardTitle>
                <CardDescription>
                  Proven expertise across diverse domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-5 gap-4'>
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className='text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors'
                    >
                      <div className='flex justify-center mb-2 text-primary'>
                        {industry.icon}
                      </div>
                      <div className='font-medium text-sm'>{industry.name}</div>
                      <div className='text-xs text-muted-foreground'>
                        {industry.projects} projects
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='services' className='space-y-8'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {services.map((service, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20'
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className='text-xl'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-muted-foreground'>
                      {service.description}
                    </p>
                    <div className='space-y-2'>
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm'
                        >
                          <ChevronRight className='h-3 w-3 text-primary' />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='process' className='space-y-8'>
            {/* Testing Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Our Testing Process</CardTitle>
                <CardDescription>
                  A systematic approach to quality assurance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-8'>
                  {[
                    {
                      phase: "Discovery & Planning",
                      description:
                        "Requirements analysis and test strategy development",
                      icon: <Target className='h-6 w-6' />,
                    },
                    {
                      phase: "Test Design",
                      description:
                        "Creating comprehensive test cases and scenarios",
                      icon: <FileText className='h-6 w-6' />,
                    },
                    {
                      phase: "Execution",
                      description:
                        "Systematic testing across all identified scenarios",
                      icon: <Play className='h-6 w-6' />,
                    },
                    {
                      phase: "Reporting",
                      description:
                        "Detailed defect reporting and quality metrics",
                      icon: <BarChart3 className='h-6 w-6' />,
                    },
                    {
                      phase: "Validation",
                      description: "Final verification and sign-off",
                      icon: <CheckCircle className='h-6 w-6' />,
                    },
                  ].map((step, index) => (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary'>
                        {step.icon}
                      </div>
                      <div>
                        <h4 className='font-semibold text-lg'>{step.phase}</h4>
                        <p className='text-muted-foreground'>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Tools & Technologies</CardTitle>
                <CardDescription>
                  Industry-standard tools and proven techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-4 gap-4'>
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className='p-4 rounded-lg border hover:border-primary/20 transition-colors'
                    >
                      <div className='text-2xl mb-2'>{tool.icon}</div>
                      <div className='font-medium'>{tool.name}</div>
                      <div className='text-xs text-muted-foreground'>
                        {tool.category}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='results' className='space-y-8 text-center'>
            {/* Client Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl flex items-center gap-2'>
                  <Quote className='h-6 w-6 text-primary' />
                  Client Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-3 gap-6'>
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className='p-6 rounded-lg bg-muted/50 space-y-4'
                    >
                      <div className='flex gap-1'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='h-4 w-4 fill-primary text-primary'
                          />
                        ))}
                      </div>
                      <p className='text-muted-foreground italic'>
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className='font-medium'>{testimonial.name}</div>
                        <div className='text-sm text-muted-foreground'>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <div className='grid md:grid-cols-2 gap-6'>
              {[
                {
                  icon: <Target className='h-8 w-8' />,
                  title: "Precision & Detail",
                  description:
                    "Meticulous approach to identifying even the smallest issues that could impact user experience",
                  color: "text-primary",
                },
                {
                  icon: <FileText className='h-8 w-8' />,
                  title: "Clear Documentation",
                  description:
                    "Comprehensive reporting and transparent communication throughout the testing lifecycle",
                  color: "text-accent",
                },
                {
                  icon: <Users className='h-8 w-8' />,
                  title: "Cross-Domain Expertise",
                  description:
                    "Broad experience spanning multiple industries and technology platforms",
                  color: "text-chart-3",
                },
                {
                  icon: <Shield className='h-8 w-8' />,
                  title: "Quality Commitment",
                  description:
                    "Unwavering focus on delivering defect-free software that exceeds expectations",
                  color: "text-chart-4",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className='group hover:shadow-lg transition-all duration-300 text-center'
                >
                  <CardHeader>
                    <CardTitle className='text-xl flex items-center gap-3'>
                      <div
                        className={`${benefit.color} group-hover:scale-110 transition-transform`}
                      >
                        {benefit.icon}
                      </div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground text-center'>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card
          className='bg-gradient-to-r from-blue-500 to-cyan-400
 text-white border-0 overflow-hidden relative'
        >
          <div className='absolute inset-0 bg-black/10'></div>
          <CardContent className='relative text-center py-16 px-8'>
            <div className='max-w-3xl mx-auto space-y-6'>
              <h3 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to Elevate Your Software Quality?
              </h3>
              <p className='text-xl opacity-90 leading-relaxed'>
                Let's discuss how our manual testing expertise can help ensure
                your software meets the highest standards and delivers
                exceptional user experiences.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
                <Button size='lg' variant='secondary' className='group'>
                  Start Your Project
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='bg-white/10 border-white/20 text-white hover:bg-white/20'
                >
                  Schedule Consultation
                </Button>
              </div>
              <div className='flex items-center justify-center gap-6 text-sm opacity-75 mt-8'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='h-4 w-4' />
                  <span>Free Initial Assessment</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='h-4 w-4' />
                  <span>Quick Turnaround</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award className='h-4 w-4' />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
