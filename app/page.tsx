"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  Code,
  Smartphone,
  Gauge,
  Globe,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavbarDemo } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import MarketingHeroCard from "@/components/ui/marketing_header"
import { StickyScroll } from "@/components/ui/process"
import { Compare } from "@/components/ui/compare"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { FocusCards } from "@/components/ui/focus-cards"
import FadeContent from "@/components/ui/fade"

const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
]

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
]

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <img
          src='/linear.webp'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Running out of content
      </div>
    ),
  },
]

export default function HomePage() {
  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />

      {/* Hero Section */}
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className='text-4xl font-semibold text-black dark:text-white'>
                Eliminating glitches, We
                <br />
                <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                  Elevate Performance
                </span>
              </h1>
            </>
          }
        >
          <img
            src={"/scroll.jpg"}
            alt='hero'
            height={720}
            width={1400}
            className='mx-auto rounded-2xl object-cover h-full object-left-top'
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <FadeContent
        blur={false}
        duration={1000}
        easing='ease-out'
        initialOpacity={0}
      >
        <MarketingHeroCard />
      </FadeContent>

      <div className='w-full py-4'>
        <StickyScroll content={content} />
      </div>

      <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0.1}
      >
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5' />
          <div className='container relative px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <Badge variant='outline' className='w-fit'>
                    Trusted by 500+ Companies
                  </Badge>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Quality Assurance That{" "}
                    <span className='text-primary'>Delivers Excellence</span>
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Comprehensive software testing and QA services that ensure
                    your applications perform flawlessly. From manual testing to
                    automated solutions, we've got you covered.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button size='lg' asChild>
                    <Link href='/contact'>
                      Get Started Today
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button variant='outline' size='lg' asChild>
                    <Link href='/services'>View Our Services</Link>
                  </Button>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>
                    4.9/5 from 200+ reviews
                  </span>
                </div>
              </div>
              <div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4'>
                <Compare
                  firstImage='https://assets.aceternity.com/code-problem.png'
                  secondImage='https://assets.aceternity.com/code-solution.png'
                  firstImageClassName='object-cover object-left-top'
                  secondImageClassname='object-cover object-left-top'
                  className='h-[250px] w-[200px] md:h-[500px] md:w-[500px]'
                  slideMode='hover'
                />
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Stats Section */}
      <section className='py-12 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>3x</div>
              <div className='text-sm text-muted-foreground'>
                Faster Time-to-Market
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>99.9%</div>
              <div className='text-sm text-muted-foreground'>
                Bug Detection Rate
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>50+</div>
              <div className='text-sm text-muted-foreground'>
                Expert QA Engineers
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-primary'>24/7</div>
              <div className='text-sm text-muted-foreground'>
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <div className='container px-4 md:px-6 max-w-7xl mx-auto py-20'>
        <div className=' mb-12 text-center'>
          <Badge variant='outline' className='mb-4'>
            Our Services
          </Badge>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Comprehensive Testing Solutions
          </h2>
          <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
            From manual testing to automated CI/CD integration, we provide
            end-to-end quality assurance services.
          </p>

          <div className='max-w-5xl mx-auto px-8'>
            <HoverEffect items={projects} />
          </div>

          <div className='max-w-5xl mx-auto px-8'>
            <FocusCards cards={cards} />
          </div>
        </div>
      </div>

      {/* Services Preview 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className=' mb-12 text-center'>
            <Badge variant='outline' className='mb-4'>
              Our Services
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Comprehensive Testing Solutions
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              From manual testing to automated CI/CD integration, we provide
              end-to-end quality assurance services.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Shield className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Manual Testing</CardTitle>
                <CardDescription>
                  Comprehensive manual testing by experienced QA professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Functional Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Usability Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Exploratory Testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Zap className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Automated Testing</CardTitle>
                <CardDescription>
                  Scalable automated testing solutions for faster delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    API Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    UI Automation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    CI/CD Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Users className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Performance Testing</CardTitle>
                <CardDescription>
                  Ensure your applications perform under any load
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Load Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Stress Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Scalability Testing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className='text-center mt-8'>
            <Button asChild>
              <Link href='/services'>
                View All Services
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials */}
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Testimonials
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              What Our Clients Say
            </h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-sm mb-4'>
                  "Their automated testing suite reduced our deployment time by
                  60% while improving quality significantly."
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-semibold'>JD</span>
                  </div>
                  <div>
                    <div className='font-semibold text-sm'>John Doe</div>
                    <div className='text-xs text-muted-foreground'>
                      CTO, TechCorp
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-sm mb-4'>
                  "Professional team with deep expertise. They found critical
                  issues we missed internally."
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-semibold'>SM</span>
                  </div>
                  <div>
                    <div className='font-semibold text-sm'>Sarah Miller</div>
                    <div className='text-xs text-muted-foreground'>
                      Product Manager, StartupXYZ
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-sm mb-4'>
                  "Excellent communication and detailed reporting. They're now
                  our go-to QA partner."
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-semibold'>MJ</span>
                  </div>
                  <div>
                    <div className='font-semibold text-sm'>Mike Johnson</div>
                    <div className='text-xs text-muted-foreground'>
                      Lead Developer, WebSolutions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Industry Solutions
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Specialized Testing for Every Industry
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              We understand that different industries have unique requirements
              and compliance needs.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🏥</span>
                </div>
                <CardTitle>Healthcare</CardTitle>
                <CardDescription>
                  HIPAA compliant testing for medical software
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• FDA validation testing</li>
                  <li>• Patient data security</li>
                  <li>• Medical device integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>💰</span>
                </div>
                <CardTitle>FinTech</CardTitle>
                <CardDescription>
                  Secure testing for financial applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• PCI DSS compliance</li>
                  <li>• Transaction security</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🛒</span>
                </div>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>
                  Comprehensive testing for online stores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Payment gateway testing</li>
                  <li>• Load testing for sales</li>
                  <li>• Mobile commerce</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🏢</span>
                </div>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Scalable testing for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Legacy system integration</li>
                  <li>• Enterprise security</li>
                  <li>• Multi-platform testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Technology Stack */}
      <section className='min-h-screen flex items-center justify-center py-20 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Technology Stack
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Cutting-Edge Testing Tools & Frameworks
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              We use the latest tools and technologies to deliver comprehensive
              testing solutions.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Code className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Selenium</h3>
                <p className='text-sm text-muted-foreground'>
                  Web automation testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Zap className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Cypress</h3>
                <p className='text-sm text-muted-foreground'>
                  Modern web testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Smartphone className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Appium</h3>
                <p className='text-sm text-muted-foreground'>
                  Mobile app testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Gauge className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>JMeter</h3>
                <p className='text-sm text-muted-foreground'>
                  Performance testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>OWASP ZAP</h3>
                <p className='text-sm text-muted-foreground'>
                  Security testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>TestRail</h3>
                <p className='text-sm text-muted-foreground'>Test management</p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Globe className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Postman</h3>
                <p className='text-sm text-muted-foreground'>API testing</p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <CheckCircle className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold mb-2'>Jenkins</h3>
                <p className='text-sm text-muted-foreground'>
                  CI/CD integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Preview 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Success Stories
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Real Results for Real Clients
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              See how we've helped companies improve their software quality and
              reduce time to market.
            </p>
          </div>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  E-commerce
                </Badge>
                <CardTitle>60% Faster Deployments</CardTitle>
                <CardDescription>
                  Major retailer reduces testing time with automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>60%</div>
                      <div className='text-xs text-muted-foreground'>
                        Faster Testing
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        99.9%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Uptime
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Implemented comprehensive automated testing suite covering
                    500+ test cases.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  FinTech
                </Badge>
                <CardTitle>Zero Security Incidents</CardTitle>
                <CardDescription>
                  Banking app passes rigorous security testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>0</div>
                      <div className='text-xs text-muted-foreground'>
                        Security Issues
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        100%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Compliance
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Comprehensive security testing including penetration testing
                    and compliance validation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  Healthcare
                </Badge>
                <CardTitle>FDA Approval Success</CardTitle>
                <CardDescription>
                  Medical device software meets all regulatory requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        100%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        FDA Compliance
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>6mo</div>
                      <div className='text-xs text-muted-foreground'>
                        Faster Approval
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Rigorous validation testing ensuring patient safety and
                    regulatory compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Certifications & Awards */}
      <section className='min-h-screen flex items-center justify-center py-20 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Certifications & Awards
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Recognized Excellence in Quality Assurance
            </h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Award className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>ISO 9001:2015</h3>
                <p className='text-sm text-muted-foreground'>
                  Quality Management Systems
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Shield className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>ISTQB Certified</h3>
                <p className='text-sm text-muted-foreground'>
                  International Software Testing
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Star className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>Best QA Partner 2023</h3>
                <p className='text-sm text-muted-foreground'>
                  Tech Excellence Awards
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <CheckCircle className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='font-semibold mb-2'>SOC 2 Type II</h3>
                <p className='text-sm text-muted-foreground'>
                  Security & Compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Ready to Improve Your Software Quality?
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
              Get started with a free consultation and see how our QA experts
              can help your project succeed.
            </p>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Start Free Consultation
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/about'>Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
