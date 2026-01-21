"use client"
import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "./aurora"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Users,
  ArrowRight,
  Target,
  Smartphone,
  Workflow,
  Code,
  Activity,
  ClipboardCheck,
  TrendingUp,
  Building2,
  Accessibility,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { NavbarDemo } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { Highlight } from "./highlight"
export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />

      <Aurora>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-6 max-w-4xl mx-auto py-20 lg:py-32 flex flex-col justify-center min-h-screen'>
            <h1 className='text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none'>
              <span className='text-primary drop-shadow-2xl block text-center'>eLevate</span>
              <span className='text-primary drop-shadow-2xl block text-center -ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20 xl:-ml-20'>Technologies</span>
            </h1>
          </div>
        </div>
      </Aurora>

      {/* Section 1: About Us */}
      <section className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div className='order-2 lg:order-1'>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    About Us
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Specialised Testing Services
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    We specialise in end-to-end testing services across web,
                    mobile, and data platforms, combining deep testing expertise
                    with modern tools and industry best practices.
                  </p>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    Our approach ensures that applications not only function as
                    expected but also meet today's demands for performance,
                    accessibility, security, and user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop'
                  alt='Team collaboration'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Service Offerings */}
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
                    Our Service Offerings
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Comprehensive Testing Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    Our service offerings include functional and non-functional
                    testing, manual and automated testing, ETL and data
                    validation testing, mobile and web automation framework
                    setup, performance and load testing, and accessibility
                    testing aligned with global standards such as WCAG.
                  </p>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    We work with the latest technologies, cloud-based platforms,
                    CI/CD pipelines, and open-source and enterprise testing
                    tools to deliver scalable and future-ready solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach */}
      <section className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Our Approach
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Quality Built Into Every Stage
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    At Elevation Technologies, we believe quality should be
                    built into every stage of the software development
                    lifecycle. We collaborate closely with our clients to
                    understand their business goals, mitigate risks early, and
                    accelerate time-to-market without compromising on quality.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'
                  alt='Quality assurance process'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology & Tools */}
      <section className='py-16 lg:py-24 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop'
                  alt='Modern technology stack'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Technology & Tools
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    Modern Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    We work with the latest technologies, cloud-based platforms,
                    CI/CD pipelines, and open-source and enterprise testing
                    tools to deliver scalable and future-ready solutions.
                  </p>
                  <div className='grid grid-cols-2 gap-3 mt-6'>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Code className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Cloud Platforms
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Zap className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        CI/CD Pipelines
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Code className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Open-source Tools
                      </span>
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-muted rounded-lg'>
                      <Shield className='h-5 w-5 text-primary' />
                      <span className='text-sm font-medium'>
                        Enterprise Tools
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Philosophy */}
      <section className='py-16 lg:py-24'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Our Philosophy
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
                        Quality-Driven
                      </h3>
                      <p className='text-muted-foreground'>
                        Quality built into every stage of the software
                        development lifecycle
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <Users className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Client Collaboration
                      </h3>
                      <p className='text-muted-foreground'>
                        We work closely with clients to understand business
                        goals and mitigate risks early
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <TrendingUp className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Accelerate Time-to-Market
                      </h3>
                      <p className='text-muted-foreground'>
                        Deliver faster without compromising on quality standards
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                      <Shield className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg mb-2'>
                        Measurable Outcomes
                      </h3>
                      <p className='text-muted-foreground'>
                        Ensure improved customer satisfaction and long-term
                        value
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop'
                  alt='Team collaboration and values'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Who We Serve */}
      <section className='py-16 lg:py-24 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'
                  alt='Startups and enterprises'
                  className='w-full h-[400px] object-cover'
                />
              </div>
            </div>
            <div>
              <Card className='h-full shadow-lg border-2'>
                <CardHeader>
                  <Badge variant='outline' className='w-fit mb-4'>
                    Our Clients
                  </Badge>
                  <CardTitle className='text-3xl font-bold mb-4'>
                    From Startups to Enterprises
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-lg text-muted-foreground leading-relaxed'>
                    Whether you are a startup launching a new product or an
                    enterprise modernising complex systems, our flexible
                    engagement models and experienced testing professionals
                    ensure measurable quality outcomes, improved customer
                    satisfaction, and long-term value.
                  </p>
                  <div className='space-y-4 mt-6'>
                    <div className='flex items-start gap-3 p-4 bg-muted rounded-lg'>
                      <Building2 className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>Startups</h3>
                        <p className='text-sm text-muted-foreground'>
                          Launch your product with confidence using our
                          comprehensive testing services
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3 p-4 bg-muted rounded-lg'>
                      <Building2 className='h-6 w-6 text-primary mt-1 shrink-0' />
                      <div>
                        <h3 className='font-semibold mb-1'>Enterprises</h3>
                        <p className='text-sm text-muted-foreground'>
                          Modernise complex systems with our scalable testing
                          solutions
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
            At Elevation Technologies Pty Ltd, we are committed to helping
            businesses deliver reliable, secure, and high-performing digital
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
              Let's discuss how our expertise can help ensure your software
              meets the highest quality standards and accelerates your
              time-to-market.
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
