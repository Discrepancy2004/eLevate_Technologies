import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Zap,
  Lock,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Bug,
  Gauge,
  Code,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"
// import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Manual Testing",
      description:
        "Comprehensive manual testing by experienced QA professionals",
      features: [
        "Functional Testing",
        "Usability Testing",
        "Exploratory Testing",
        "Regression Testing",
        "User Acceptance Testing",
        "Cross-browser Testing",
      ],
      pricing: "Starting at $2,500/month",
    },
    {
      icon: Zap,
      title: "Automated Testing",
      description: "Scalable automated testing solutions for faster delivery",
      features: [
        "API Testing",
        "UI Automation",
        "CI/CD Integration",
        "Test Framework Setup",
        "Maintenance & Updates",
        "Custom Test Scripts",
      ],
      pricing: "Starting at $4,000/month",
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      description: "Ensure your applications perform under any load",
      features: [
        "Load Testing",
        "Stress Testing",
        "Volume Testing",
        "Scalability Testing",
        "Endurance Testing",
        "Performance Monitoring",
      ],
      pricing: "Starting at $3,500/month",
    },
    {
      icon: Lock,
      title: "Security Testing",
      description:
        "Comprehensive security assessment and vulnerability testing",
      features: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Code Review",
        "Authentication Testing",
        "Data Protection Testing",
        "Compliance Verification",
      ],
      pricing: "Starting at $5,000/project",
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description:
        "Complete testing solutions for iOS and Android applications",
      features: [
        "Device Compatibility",
        "OS Version Testing",
        "Performance Testing",
        "Battery Usage Testing",
        "Network Testing",
        "App Store Compliance",
      ],
      pricing: "Starting at $3,000/month",
    },
    {
      icon: Globe,
      title: "Web Testing",
      description: "Comprehensive web application testing across all browsers",
      features: [
        "Cross-browser Testing",
        "Responsive Design Testing",
        "Accessibility Testing",
        "SEO Testing",
        "Performance Optimization",
        "Progressive Web App Testing",
      ],
      pricing: "Starting at $2,800/month",
    },
  ]

  const testingTypes = [
    {
      category: "Functional Testing",
      icon: Bug,
      tests: [
        "Unit Testing",
        "Integration Testing",
        "System Testing",
        "Acceptance Testing",
        "Smoke Testing",
        "Sanity Testing",
      ],
    },
    {
      category: "Non-Functional Testing",
      icon: Gauge,
      tests: [
        "Performance Testing",
        "Security Testing",
        "Usability Testing",
        "Compatibility Testing",
        "Reliability Testing",
        "Scalability Testing",
      ],
    },
    {
      category: "Specialized Testing",
      icon: Code,
      tests: [
        "API Testing",
        "Database Testing",
        "Localization Testing",
        "Accessibility Testing",
        "Migration Testing",
        "Recovery Testing",
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* <Header /> */}
      <NavbarDemo />
      {/* Hero Section */}
      <section className='py-20 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <Badge variant='outline'>Our Services</Badge>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Comprehensive Testing Solutions
            </h1>
            <p className='text-muted-foreground md:text-xl'>
              From manual testing to automated CI/CD integration, we provide
              end-to-end quality assurance services tailored to your specific
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300'
              >
                <CardHeader>
                  <service.icon className='h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform' />
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2 text-sm'>
                        <CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='pt-4 border-t'>
                    <p className='font-semibold text-primary'>
                      {service.pricing}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Testing Methodologies
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              We employ a wide range of testing methodologies to ensure
              comprehensive coverage.
            </p>
          </div>

          <Tabs defaultValue='functional' className='w-full'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='functional'>Functional</TabsTrigger>
              <TabsTrigger value='non-functional'>Non-Functional</TabsTrigger>
              <TabsTrigger value='specialized'>Specialized</TabsTrigger>
            </TabsList>

            {testingTypes.map((type, index) => (
              <TabsContent
                key={index}
                value={type.category.toLowerCase().replace(" ", "-")}
              >
                <Card>
                  <CardHeader className='text-center'>
                    <type.icon className='h-12 w-12 text-primary mx-auto mb-4' />
                    <CardTitle>{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                      {type.tests.map((test, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 p-3 rounded-lg bg-muted/50'
                        >
                          <CheckCircle className='h-4 w-4 text-primary' />
                          <span className='text-sm font-medium'>{test}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Our Testing Process
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              A systematic approach that ensures thorough testing and quality
              delivery.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                1
              </div>
              <h3 className='font-semibold'>Analysis</h3>
              <p className='text-sm text-muted-foreground'>
                We analyze your requirements and create a comprehensive testing
                strategy.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                2
              </div>
              <h3 className='font-semibold'>Planning</h3>
              <p className='text-sm text-muted-foreground'>
                Detailed test planning with timelines, resources, and
                deliverables.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                3
              </div>
              <h3 className='font-semibold'>Execution</h3>
              <p className='text-sm text-muted-foreground'>
                Systematic test execution with real-time reporting and
                communication.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                4
              </div>
              <h3 className='font-semibold'>Reporting</h3>
              <p className='text-sm text-muted-foreground'>
                Comprehensive reports with actionable insights and
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Ready to Get Started?
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
              Contact us today to discuss your testing needs and get a
              customized quote.
            </p>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Request Quote
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/about'>Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Packages */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Service Packages
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Choose Your Testing Package
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Flexible packages designed to meet different project needs and
              budgets.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-3'>
            <Card className='relative'>
              <CardHeader>
                <Badge variant='outline' className='w-fit'>
                  Starter
                </Badge>
                <CardTitle className='text-2xl'>Essential Testing</CardTitle>
                <CardDescription>
                  Perfect for small projects and startups
                </CardDescription>
                <div className='text-3xl font-bold text-primary'>
                  $2,500
                  <span className='text-lg text-muted-foreground'>/month</span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Manual functional testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Cross-browser testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Basic regression testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Weekly reports</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Email support</span>
                  </li>
                </ul>
                <Button className='w-full' asChild>
                  <Link href='/contact'>Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='relative border-primary'>
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                <Badge className='bg-primary'>Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant='outline' className='w-fit'>
                  Professional
                </Badge>
                <CardTitle className='text-2xl'>Complete Testing</CardTitle>
                <CardDescription>
                  Comprehensive testing for growing businesses
                </CardDescription>
                <div className='text-3xl font-bold text-primary'>
                  $5,500
                  <span className='text-lg text-muted-foreground'>/month</span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>All Starter features</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Automated testing suite</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Performance testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Security testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Mobile testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Daily reports</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Priority support</span>
                  </li>
                </ul>
                <Button className='w-full' asChild>
                  <Link href='/contact'>Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='relative'>
              <CardHeader>
                <Badge variant='outline' className='w-fit'>
                  Enterprise
                </Badge>
                <CardTitle className='text-2xl'>Premium Testing</CardTitle>
                <CardDescription>
                  Full-scale testing for large organizations
                </CardDescription>
                <div className='text-3xl font-bold text-primary'>
                  Custom
                  <span className='text-lg text-muted-foreground'>
                    {" "}
                    pricing
                  </span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>All Professional features</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Dedicated QA team</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Custom test frameworks</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>Compliance testing</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>24/7 support</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    <span className='text-sm'>On-site consulting</span>
                  </li>
                </ul>
                <Button className='w-full' asChild>
                  <Link href='/contact'>Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Industry-Specific Testing
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Specialized testing services tailored to industry requirements and
              compliance standards.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🏥</span>
                </div>
                <CardTitle>Healthcare & Medical</CardTitle>
                <CardDescription>
                  HIPAA compliant testing for healthcare applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    FDA 21 CFR Part 11 validation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    HIPAA compliance testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Medical device integration
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Patient data security
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Clinical workflow testing
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $8,000/month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>💰</span>
                </div>
                <CardTitle>Financial Services</CardTitle>
                <CardDescription>
                  Secure testing for banking and fintech applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    PCI DSS compliance testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Transaction security testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Fraud detection testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Regulatory compliance
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    High-frequency trading systems
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $10,000/month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🛒</span>
                </div>
                <CardTitle>E-commerce & Retail</CardTitle>
                <CardDescription>
                  Comprehensive testing for online retail platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Payment gateway testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Shopping cart functionality
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Inventory management
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Peak load testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Multi-channel testing
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $6,000/month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🎓</span>
                </div>
                <CardTitle>Education Technology</CardTitle>
                <CardDescription>
                  Testing for educational platforms and learning systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    LMS functionality testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Student data privacy
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Accessibility compliance
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Multi-device compatibility
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Content delivery testing
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $4,500/month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🚗</span>
                </div>
                <CardTitle>Automotive & IoT</CardTitle>
                <CardDescription>
                  Testing for connected vehicles and IoT devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Embedded systems testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Vehicle connectivity
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Safety-critical systems
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Over-the-air updates
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Environmental testing
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $12,000/month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🎮</span>
                </div>
                <CardTitle>Gaming & Entertainment</CardTitle>
                <CardDescription>
                  Specialized testing for games and media applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Gameplay testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Platform compatibility
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Performance optimization
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Multiplayer testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Content rating compliance
                  </li>
                </ul>
                <div className='mt-4 pt-4 border-t'>
                  <p className='font-semibold text-primary'>
                    Starting at $7,500/month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Tools & Technologies */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Our Testing Arsenal
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              We use the most advanced tools and technologies to deliver
              comprehensive testing solutions.
            </p>
          </div>

          <Tabs defaultValue='automation' className='w-full'>
            <TabsList className='grid w-full grid-cols-4'>
              <TabsTrigger value='automation'>Automation</TabsTrigger>
              <TabsTrigger value='performance'>Performance</TabsTrigger>
              <TabsTrigger value='security'>Security</TabsTrigger>
              <TabsTrigger value='mobile'>Mobile</TabsTrigger>
            </TabsList>

            <TabsContent value='automation'>
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Code className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Selenium WebDriver</h3>
                    <p className='text-sm text-muted-foreground'>
                      Cross-browser automation
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
                      <Globe className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Playwright</h3>
                    <p className='text-sm text-muted-foreground'>
                      Multi-browser automation
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>TestComplete</h3>
                    <p className='text-sm text-muted-foreground'>
                      Desktop automation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='performance'>
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Gauge className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Apache JMeter</h3>
                    <p className='text-sm text-muted-foreground'>
                      Load testing
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Zap className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>LoadRunner</h3>
                    <p className='text-sm text-muted-foreground'>
                      Enterprise performance
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Globe className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>K6</h3>
                    <p className='text-sm text-muted-foreground'>
                      Modern load testing
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Users className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Gatling</h3>
                    <p className='text-sm text-muted-foreground'>
                      High-performance testing
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='security'>
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Shield className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>OWASP ZAP</h3>
                    <p className='text-sm text-muted-foreground'>
                      Security scanning
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Lock className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Burp Suite</h3>
                    <p className='text-sm text-muted-foreground'>
                      Web security testing
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Nessus</h3>
                    <p className='text-sm text-muted-foreground'>
                      Vulnerability assessment
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Target className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Metasploit</h3>
                    <p className='text-sm text-muted-foreground'>
                      Penetration testing
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='mobile'>
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Smartphone className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Appium</h3>
                    <p className='text-sm text-muted-foreground'>
                      Cross-platform mobile
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Globe className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Espresso</h3>
                    <p className='text-sm text-muted-foreground'>
                      Android testing
                    </p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Code className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>XCUITest</h3>
                    <p className='text-sm text-muted-foreground'>iOS testing</p>
                  </CardContent>
                </Card>

                <Card className='text-center'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4'>
                      <Users className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold mb-2'>Detox</h3>
                    <p className='text-sm text-muted-foreground'>
                      React Native testing
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Case Studies
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Success Stories
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Real-world examples of how our testing services have transformed
              our clients' software quality.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>🏥</span>
                  </div>
                  <div>
                    <Badge variant='secondary'>Healthcare</Badge>
                    <CardTitle className='mt-1'>MedTech Solutions</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  A leading medical device company needed FDA-compliant testing
                  for their patient monitoring system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4 text-center'>
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
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        Zero
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Critical Issues
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Our comprehensive validation testing approach helped them
                    achieve FDA approval 6 months ahead of schedule while
                    maintaining zero critical defects.
                  </p>
                  <div className='pt-4 border-t'>
                    <h4 className='font-semibold text-sm mb-2'>
                      Services Provided:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline' className='text-xs'>
                        Validation Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Regulatory Compliance
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Risk Assessment
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>💰</span>
                  </div>
                  <div>
                    <Badge variant='secondary'>FinTech</Badge>
                    <CardTitle className='mt-1'>SecureBank Pro</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  A digital banking platform required comprehensive security
                  testing and performance optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        99.99%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Uptime
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>10x</div>
                      <div className='text-xs text-muted-foreground'>
                        Load Capacity
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        Zero
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Security Breaches
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Implemented comprehensive security testing and performance
                    optimization, resulting in 10x improved load capacity and
                    zero security incidents.
                  </p>
                  <div className='pt-4 border-t'>
                    <h4 className='font-semibold text-sm mb-2'>
                      Services Provided:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline' className='text-xs'>
                        Security Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Performance Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        PCI Compliance
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>🛒</span>
                  </div>
                  <div>
                    <Badge variant='secondary'>E-commerce</Badge>
                    <CardTitle className='mt-1'>ShopGlobal</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  A major e-commerce platform needed testing for their Black
                  Friday traffic surge and new mobile app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>5M</div>
                      <div className='text-xs text-muted-foreground'>
                        Concurrent Users
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        300%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Sales Increase
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        0.1%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Error Rate
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Successfully handled 5M concurrent users during Black Friday
                    with 300% sales increase and minimal error rates.
                  </p>
                  <div className='pt-4 border-t'>
                    <h4 className='font-semibold text-sm mb-2'>
                      Services Provided:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline' className='text-xs'>
                        Load Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Mobile Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Payment Testing
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <span className='text-2xl'>🏢</span>
                  </div>
                  <div>
                    <Badge variant='secondary'>Enterprise</Badge>
                    <CardTitle className='mt-1'>TechCorp ERP</CardTitle>
                  </div>
                </div>
                <CardDescription>
                  A Fortune 500 company required comprehensive testing for their
                  enterprise resource planning system migration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>50K</div>
                      <div className='text-xs text-muted-foreground'>
                        Users Migrated
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        99.5%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Data Accuracy
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>3mo</div>
                      <div className='text-xs text-muted-foreground'>
                        Ahead of Schedule
                      </div>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Successfully migrated 50,000 users to the new ERP system
                    with 99.5% data accuracy, completing 3 months ahead of
                    schedule.
                  </p>
                  <div className='pt-4 border-t'>
                    <h4 className='font-semibold text-sm mb-2'>
                      Services Provided:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline' className='text-xs'>
                        Migration Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        Integration Testing
                      </Badge>
                      <Badge variant='outline' className='text-xs'>
                        User Acceptance
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
