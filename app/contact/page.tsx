"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Globe,
  Award,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <NavbarDemo />
      <section className='py-20 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <Badge variant='outline'>Contact Us</Badge>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Let's Discuss Your Testing Needs
            </h1>
            <p className='text-muted-foreground md:text-xl'>
              Ready to improve your software quality? Get in touch with our
              experts for a free consultation and customized testing solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-12 lg:grid-cols-2'>
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Full Name *</Label>
                      <Input
                        id='name'
                        placeholder='John Doe'
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='email'>Email Address *</Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@company.com'
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='company'>Company Name</Label>
                    <Input
                      id='company'
                      placeholder='Your Company'
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                    />
                  </div>

                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <Label htmlFor='service'>Service Needed</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select a service' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='manual'>Manual Testing</SelectItem>
                          <SelectItem value='automated'>
                            Automated Testing
                          </SelectItem>
                          <SelectItem value='performance'>
                            Performance Testing
                          </SelectItem>
                          <SelectItem value='security'>
                            Security Testing
                          </SelectItem>
                          <SelectItem value='mobile'>Mobile Testing</SelectItem>
                          <SelectItem value='web'>Web Testing</SelectItem>
                          <SelectItem value='consultation'>
                            Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='budget'>Project Budget</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Select budget range' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='under-5k'>Under $5,000</SelectItem>
                          <SelectItem value='5k-15k'>
                            $5,000 - $15,000
                          </SelectItem>
                          <SelectItem value='15k-50k'>
                            $15,000 - $50,000
                          </SelectItem>
                          <SelectItem value='50k-plus'>$50,000+</SelectItem>
                          <SelectItem value='ongoing'>
                            Ongoing Partnership
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Project Details *</Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us about your project, timeline, and specific testing requirements...'
                      className='min-h-[120px]'
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button type='submit' className='w-full' size='lg'>
                    <Send className='mr-2 h-4 w-4' />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className='space-y-8'>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us directly through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <Mail className='h-5 w-5 text-primary mt-1' />
                    <div>
                      <p className='font-medium'>Email</p>
                      <p className='text-muted-foreground'>
                        info@qualitypro.com
                      </p>
                      <p className='text-muted-foreground'>
                        sales@qualitypro.com
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <Phone className='h-5 w-5 text-primary mt-1' />
                    <div>
                      <p className='font-medium'>Phone</p>
                      <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                      <p className='text-muted-foreground'>+1 (555) 123-4568</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <MapPin className='h-5 w-5 text-primary mt-1' />
                    <div>
                      <p className='font-medium'>Office</p>
                      <p className='text-muted-foreground'>
                        123 Tech Street, Suite 400
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <Clock className='h-5 w-5 text-primary mt-1' />
                    <div>
                      <p className='font-medium'>Business Hours</p>
                      <p className='text-muted-foreground'>
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        Saturday: 10:00 AM - 2:00 PM PST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose QualityPro?</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-sm'>
                      24-hour response time guarantee
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-sm'>Free initial consultation</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-sm'>Flexible engagement models</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-sm'>
                      Experienced QA professionals
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full' />
                    <span className='text-sm'>Proven track record</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  How quickly can you start testing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We can typically begin testing within 1-2 weeks of project
                  kickoff, depending on the scope and complexity of your
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Do you work with agile teams?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Yes, we're experienced in agile methodologies and can
                  integrate seamlessly with your existing development processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  What industries do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We serve various industries including fintech, healthcare,
                  e-commerce, SaaS, and enterprise software companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Do you provide ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Yes, we offer ongoing testing support, maintenance of
                  automated tests, and continuous quality assurance
                  partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Multiple Ways to Connect
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Choose the communication method that works best for your needs.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='text-center group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <Phone className='h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2'>Phone Support</h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  Speak directly with our QA experts
                </p>
                <div className='space-y-2 text-sm'>
                  <p className='font-medium'>+1 (555) 123-4567</p>
                  <p className='text-muted-foreground'>Mon-Fri: 9AM-6PM PST</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <Mail className='h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2'>Email Support</h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  Detailed inquiries and documentation
                </p>
                <div className='space-y-2 text-sm'>
                  <p className='font-medium'>info@qualitypro.com</p>
                  <p className='text-muted-foreground'>24-hour response time</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <Users className='h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2'>Video Consultation</h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  Face-to-face project discussions
                </p>
                <div className='space-y-2 text-sm'>
                  <p className='font-medium'>Schedule Online</p>
                  <p className='text-muted-foreground'>30-60 minute sessions</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <Clock className='h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2'>Emergency Support</h3>
                <p className='text-sm text-muted-foreground mb-4'>
                  Critical issue resolution
                </p>
                <div className='space-y-2 text-sm'>
                  <p className='font-medium'>24/7 Hotline</p>
                  <p className='text-muted-foreground'>
                    Enterprise clients only
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Our Locations
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Visit Our Offices
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              We have offices across North America to serve you better.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <MapPin className='h-8 w-8 text-primary' />
                  <div>
                    <CardTitle>San Francisco</CardTitle>
                    <CardDescription>Headquarters</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>
                    123 Tech Street, Suite 400
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='font-medium'>Phone:</p>
                    <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className='font-medium'>Team Size:</p>
                    <p className='text-muted-foreground'>25 members</p>
                  </div>
                </div>
                <div>
                  <p className='font-medium text-sm mb-2'>Specialties:</p>
                  <div className='flex flex-wrap gap-1'>
                    <Badge variant='outline' className='text-xs'>
                      All Services
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      Enterprise
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      Consulting
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <MapPin className='h-8 w-8 text-primary' />
                  <div>
                    <CardTitle>Austin</CardTitle>
                    <CardDescription>Development Center</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>
                    456 Innovation Blvd
                    <br />
                    Austin, TX 78701
                    <br />
                    United States
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='font-medium'>Phone:</p>
                    <p className='text-muted-foreground'>+1 (555) 123-4568</p>
                  </div>
                  <div>
                    <p className='font-medium'>Team Size:</p>
                    <p className='text-muted-foreground'>15 members</p>
                  </div>
                </div>
                <div>
                  <p className='font-medium text-sm mb-2'>Specialties:</p>
                  <div className='flex flex-wrap gap-1'>
                    <Badge variant='outline' className='text-xs'>
                      Automation
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      Performance
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      DevOps
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <MapPin className='h-8 w-8 text-primary' />
                  <div>
                    <CardTitle>Toronto</CardTitle>
                    <CardDescription>International Office</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>
                    789 Queen Street West
                    <br />
                    Toronto, ON M5V 1N2
                    <br />
                    Canada
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <p className='font-medium'>Phone:</p>
                    <p className='text-muted-foreground'>+1 (416) 555-0123</p>
                  </div>
                  <div>
                    <p className='font-medium'>Team Size:</p>
                    <p className='text-muted-foreground'>10 members</p>
                  </div>
                </div>
                <div>
                  <p className='font-medium text-sm mb-2'>Specialties:</p>
                  <div className='flex flex-wrap gap-1'>
                    <Badge variant='outline' className='text-xs'>
                      Mobile
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      Security
                    </Badge>
                    <Badge variant='outline' className='text-xs'>
                      Compliance
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Downloads */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Free Resources
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Download our comprehensive guides and resources to improve your
              testing processes.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📋</span>
                </div>
                <h3 className='font-semibold mb-2 text-center'>QA Checklist</h3>
                <p className='text-sm text-muted-foreground text-center mb-4'>
                  Complete testing checklist for web applications
                </p>
                <Button
                  variant='outline'
                  className='w-full bg-transparent'
                  size='sm'
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📊</span>
                </div>
                <h3 className='font-semibold mb-2 text-center'>
                  Testing ROI Calculator
                </h3>
                <p className='text-sm text-muted-foreground text-center mb-4'>
                  Calculate the ROI of your testing investments
                </p>
                <Button
                  variant='outline'
                  className='w-full bg-transparent'
                  size='sm'
                >
                  Download Excel
                </Button>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📖</span>
                </div>
                <h3 className='font-semibold mb-2 text-center'>
                  Testing Best Practices
                </h3>
                <p className='text-sm text-muted-foreground text-center mb-4'>
                  50-page guide on modern testing practices
                </p>
                <Button
                  variant='outline'
                  className='w-full bg-transparent'
                  size='sm'
                >
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardContent className='pt-6'>
                <div className='w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🔧</span>
                </div>
                <h3 className='font-semibold mb-2 text-center'>
                  Tool Comparison
                </h3>
                <p className='text-sm text-muted-foreground text-center mb-4'>
                  Comprehensive comparison of testing tools
                </p>
                <Button
                  variant='outline'
                  className='w-full bg-transparent'
                  size='sm'
                >
                  Download Chart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities 
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Partnerships
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Partner With Us
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Explore partnership opportunities to expand your service
              offerings.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <Users className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Agency Partners</CardTitle>
                <CardDescription>
                  White-label testing services for agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• White-label testing services</li>
                  <li>• Revenue sharing programs</li>
                  <li>• Joint marketing opportunities</li>
                  <li>• Dedicated partner support</li>
                </ul>
                <Button
                  className='w-full mt-4 bg-transparent'
                  variant='outline'
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Technology Partners</CardTitle>
                <CardDescription>
                  Integration with testing tools and platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Tool integrations</li>
                  <li>• API partnerships</li>
                  <li>• Joint solution development</li>
                  <li>• Technical collaboration</li>
                </ul>
                <Button
                  className='w-full mt-4 bg-transparent'
                  variant='outline'
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Referral Program</CardTitle>
                <CardDescription>
                  Earn rewards for successful referrals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• Up to 15% commission</li>
                  <li>• Lifetime referral tracking</li>
                  <li>• Marketing support materials</li>
                  <li>• Quarterly bonus programs</li>
                </ul>
                <Button
                  className='w-full mt-4 bg-transparent'
                  variant='outline'
                >
                  Join Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Extended FAQ 
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              More Frequently Asked Questions
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  What testing methodologies do you follow?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We follow industry-standard methodologies including Agile,
                  Waterfall, and DevOps practices. Our approach is tailored to
                  your specific project needs and development lifecycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Can you integrate with our existing CI/CD pipeline?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Yes, we have extensive experience integrating with popular
                  CI/CD tools like Jenkins, GitLab CI, Azure DevOps, and GitHub
                  Actions to automate your testing processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Do you provide test documentation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Absolutely. We provide comprehensive test plans, test cases,
                  execution reports, and defect reports. All documentation
                  follows industry standards and can be customized to your
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  What is your typical project timeline?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Project timelines vary based on scope and complexity. Simple
                  projects can start within 1-2 weeks, while complex enterprise
                  solutions may require 4-6 weeks for proper setup and planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Do you offer training for our internal team?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Yes, we provide comprehensive training programs for your
                  internal QA team, covering testing methodologies, tools, and
                  best practices to improve your in-house capabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  How do you ensure data security and confidentiality?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We maintain strict security protocols including NDAs, secure
                  testing environments, data encryption, and compliance with
                  standards like SOC 2 Type II and ISO 27001.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  Can you work with our preferred communication tools?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We adapt to your preferred communication and project
                  management tools including Slack, Microsoft Teams, Jira,
                  Trello, Asana, and many others.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>
                  What happens if we're not satisfied with the results?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We offer a satisfaction guarantee with clear remediation
                  processes. If you're not satisfied, we'll work to address
                  concerns at no additional cost or provide a partial refund
                  based on our service agreement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  )
}
