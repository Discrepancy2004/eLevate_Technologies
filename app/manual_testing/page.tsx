"use client"
import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "../about/aurora"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  FileText,
  Users,
  ArrowRight,
  Target,
  ClipboardCheck,
  Shield,
  Zap,
  Code,
  TrendingUp,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { NavbarDemo } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { Highlight } from "../about/highlight"

export default function ManualTestingPage() {
  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />

      <Aurora>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-6 max-w-4xl mx-auto py-20 lg:py-32 flex flex-col justify-center min-h-screen'>
            <h1 className='text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none'>
              <span className='text-primary drop-shadow-2xl block text-center'>Manual Testing</span>
            </h1>
          </div>
        </div>
      </Aurora>

      {/* Section 1: About */}
      <section className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div className='order-2 lg:order-1'>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    About
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Expert Manual Testing Services
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    We provide expert manual testing services to help teams
                    deliver high-quality software. Our approach focuses on
                    thorough test planning, execution, and defect tracking to
                    ensure reliability and user satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop'
                  alt='Manual testing process'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className='py-16 lg:py-24 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
                  alt='Testing services'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Services Offered
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Comprehensive Testing Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>
                          Test Planning and Requirement Analysis
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Comprehensive analysis of requirements and strategic
                          test planning
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>
                          Functional, Regression, and Exploratory Testing
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Thorough testing across all functional areas with
                          systematic approaches
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>
                          Defect Reporting and Management
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Detailed defect documentation and lifecycle management
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>
                          Test Case Design and Execution
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Creating comprehensive test cases and systematic
                          execution
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <CheckCircle className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>
                          Collaboration with Development and QA Teams
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Seamless integration with existing teams to enhance
                          quality processes
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tools & Techniques */}
      <section className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Tools & Techniques
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Industry-Standard Tools and Proven Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    We utilize industry-standard tools and proven techniques to
                    deliver comprehensive testing solutions.
                  </p>
                  <div className='grid grid-cols-2 gap-3 mt-6'>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <FileText className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>JIRA</span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Code className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Azure DevOps
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <ClipboardCheck className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>TestRail</span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Target className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Agile Methodologies
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <BarChart3 className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Waterfall Methodologies
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Shield className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Risk-Based Testing
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <CheckCircle className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        User Acceptance Testing (UAT)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop'
                  alt='Testing tools and techniques'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className='py-16 lg:py-24 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop'
                  alt='Quality assurance team'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Why Choose Us?
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    What Sets Us Apart
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <Target className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Strong Attention to Detail and Analytical Skills
                      </h3>
                      <p className='text-muted-foreground'>
                        Meticulous approach to identifying even the smallest
                        issues that could impact user experience
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <FileText className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Clear Communication and Documentation Practices
                      </h3>
                      <p className='text-muted-foreground'>
                        Comprehensive reporting and transparent communication
                        throughout the testing lifecycle
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <Users className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Experience Across Diverse Domains and Platforms
                      </h3>
                      <p className='text-muted-foreground'>
                        Broad experience spanning multiple industries and
                        technology platforms
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <Shield className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Commitment to Delivering Defect-Free Software
                      </h3>
                      <p className='text-muted-foreground'>
                        Unwavering focus on delivering defect-free software that
                        exceeds expectations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className='py-20 bg-muted dark:bg-muted/80 border-y border-border/50'>
        <div className='container px-4 md:px-6 max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6'>
            We Don't Just Test Software
            <br />
            <Highlight className="text-black dark:text-white">
              We Elevate Quality
            </Highlight>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground mb-8'>
            Ensuring software quality through detailed analysis and hands-on
            testing to deliver reliable, secure, and high-performing digital
            products.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='container px-4 md:px-6 max-w-4xl mx-auto'>
          <div className='text-center space-y-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Ready to Elevate Your Software Quality?
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
              Let's discuss how our manual testing expertise can help ensure
              your software meets the highest quality standards and delivers
              exceptional user experiences.
            </p>
            <div className='flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Get In Touch
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/services'>View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
