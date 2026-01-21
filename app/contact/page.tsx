"use client"

import Form from "./form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

export default function ContactPage() {

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <NavbarDemo />

    
      <section className='py-20 lg:py-32 bg-black'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <Badge variant='outline'>Contact Us</Badge>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
              Let's Discuss Your Testing Needs
            </h1>
            <p className='text-muted-foreground md:text-xl text-center'>
              Ready to improve your software quality? Get in touch with our
              experts for a free consultation and customized testing solution.
            </p>
          </div>
        </div>
      </section>
      <Form />
      {/* Contact Form & Info */}
      <section className='py-20 bg-black'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 md:grid-cols-2 justify-items-center max-w-5xl mx-auto'>
            {/* Contact Information */}
            <Card className='w-full max-w-lg bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Contact Information</CardTitle>
                <CardDescription className='text-center text-white/70'>
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-start gap-4 justify-center'>
                  <Mail className='h-5 w-5 text-green-300 mt-1' />
                  <div className='text-center'>
                    <p className='font-medium text-white'>Email</p>
                    <p className='text-white/70'>
                      info@qualitypro.com
                    </p>
                    <p className='text-white/70'>
                      sales@qualitypro.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4 justify-center'>
                  <Phone className='h-5 w-5 text-green-300 mt-1' />
                  <div className='text-center'>
                    <p className='font-medium text-white'>Phone</p>
                    <p className='text-white/70'>+1 (555) 123-4567</p>
                    <p className='text-white/70'>+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 justify-center'>
                  <MapPin className='h-5 w-5 text-green-300 mt-1' />
                  <div className='text-center'>
                    <p className='font-medium text-white'>Office</p>
                    <p className='text-white/70'>
                      123 Tech Street, Suite 400
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4 justify-center'>
                  <Clock className='h-5 w-5 text-green-300 mt-1' />
                  <div className='text-center'>
                    <p className='font-medium text-white'>Business Hours</p>
                    <p className='text-white/70'>
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

            {/* Why Choose QualityPro? */}
            <Card className='w-full max-w-lg bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Why Choose QualityPro?</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center gap-3 justify-center'>
                  <div className='w-2 h-2 bg-green-300 rounded-full' />
                  <span className='text-sm text-center text-white/70'>
                    24-hour response time guarantee
                  </span>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <div className='w-2 h-2 bg-green-300 rounded-full' />
                  <span className='text-sm text-center text-white/70'>Free initial consultation</span>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <div className='w-2 h-2 bg-green-300 rounded-full' />
                  <span className='text-sm text-center text-white/70'>Flexible engagement models</span>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <div className='w-2 h-2 bg-green-300 rounded-full' />
                  <span className='text-sm text-center text-white/70'>
                    Experienced QA professionals
                  </span>
                </div>
                <div className='flex items-center gap-3 justify-center'>
                  <div className='w-2 h-2 bg-green-300 rounded-full' />
                  <span className='text-sm text-center text-white/70'>Proven track record</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-neutral-900'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
              Frequently Asked Questions
            </h2>
            <p className='text-white/70 md:text-xl max-w-2xl mx-auto text-center'>
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 justify-items-center'>
            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  What testing services do you offer?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  We provide comprehensive testing services including manual testing, automated testing, performance testing, security testing, mobile and web testing, ETL testing, accessibility testing, and QA outsourcing solutions.
                </p>
              </CardContent>
            </Card>

            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  How quickly can you start testing our project?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  We can typically begin testing within 1-2 weeks of project kickoff, depending on the scope and complexity of your requirements. For urgent projects, we offer expedited onboarding.
                </p>
              </CardContent>
            </Card>

            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  Do you work with agile and DevOps teams?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  Yes, we're experienced in agile methodologies, CI/CD pipelines, and can integrate seamlessly with your existing development processes and tools like JIRA, Azure DevOps, and TestRail.
                </p>
              </CardContent>
            </Card>

            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  What testing tools and technologies do you use?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  We work with industry-standard tools including Selenium, Postman, TestRail, JIRA, and various automation frameworks. We adapt to your preferred tools and can recommend the best solutions for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  Can you help with test automation setup?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  Absolutely! We provide end-to-end test automation services including framework setup, script development, CI/CD integration, and ongoing maintenance to ensure your automated tests remain effective.
                </p>
              </CardContent>
            </Card>

            <Card className='w-full max-w-md bg-black border-white/10'>
              <CardHeader className='text-center'>
                <CardTitle className='text-lg text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
                  What is your pricing model?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-white/70 text-center'>
                  We offer flexible engagement models including project-based, dedicated team, and hourly rates. Contact us for a free consultation and customized quote based on your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className='py-20 bg-black'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>
              Multiple Ways to Connect
            </h2>
            <p className='mt-4 text-white/70 md:text-xl max-w-2xl mx-auto text-center'>
              Choose the communication method that works best for your needs.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
            <Card className='text-center group hover:shadow-lg transition-shadow w-full max-w-xs bg-black border-white/10'>
              <CardContent className='pt-6'>
                <Phone className='h-12 w-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2 text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Phone Support</h3>
                <p className='text-sm text-white/70 mb-4 text-center'>
                  Speak directly with our QA experts
                </p>
                <div className='space-y-2 text-sm text-center'>
                  <p className='font-medium text-white'>+1 (555) 123-4567</p>
                  <p className='text-white/70'>Mon-Fri: 9AM-6PM PST</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow w-full max-w-xs bg-black border-white/10'>
              <CardContent className='pt-6'>
                <Mail className='h-12 w-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2 text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Email Support</h3>
                <p className='text-sm text-white/70 mb-4 text-center'>
                  Detailed inquiries and documentation
                </p>
                <div className='space-y-2 text-sm text-center'>
                  <p className='font-medium text-white'>info@qualitypro.com</p>
                  <p className='text-white/70'>24-hour response time</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow w-full max-w-xs bg-black border-white/10'>
              <CardContent className='pt-6'>
                <Users className='h-12 w-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2 text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Video Consultation</h3>
                <p className='text-sm text-white/70 mb-4 text-center'>
                  Face-to-face project discussions
                </p>
                <div className='space-y-2 text-sm text-center'>
                  <p className='font-medium text-white'>Schedule Online</p>
                  <p className='text-white/70'>30-60 minute sessions</p>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center group hover:shadow-lg transition-shadow w-full max-w-xs bg-black border-white/10'>
              <CardContent className='pt-6'>
                <Clock className='h-12 w-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform' />
                <h3 className='font-semibold mb-2 text-center bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent'>Emergency Support</h3>
                <p className='text-sm text-white/70 mb-4 text-center'>
                  Critical issue resolution
                </p>
                <div className='space-y-2 text-sm text-center'>
                  <p className='font-medium text-white'>24/7 Hotline</p>
                  <p className='text-white/70'>
                    Enterprise clients only
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Removed sections: Visit Our Offices through Free Resources */}

      <Footer />
    </div>
  )
}
