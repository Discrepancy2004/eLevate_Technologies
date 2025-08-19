import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Award,
  Lightbulb,
  ArrowRight,
  MapPin,
  Shield,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      experience: "15+ years",
      image: "/ceo-headshot.png",
    },
    {
      name: "Sarah Chen",
      role: "Head of QA",
      experience: "12+ years",
      image: "/qa-manager-headshot.png",
    },
    {
      name: "Michael Thompson",
      role: "Lead Automation Engineer",
      experience: "10+ years",
      image: "/placeholder-jtn6f.png",
    },
    {
      name: "Emily Davis",
      role: "Performance Testing Specialist",
      experience: "8+ years",
      image: "/headshot-specialist.png",
    },
  ]

  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />
      {/* Hero Section */}
      <section className='py-20 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <Badge variant='outline'>About QualityPro</Badge>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Dedicated to Software Excellence Since 2015
            </h1>
            <p className='text-muted-foreground md:text-xl'>
              We're a team of passionate QA professionals committed to helping
              businesses deliver flawless software experiences through
              comprehensive testing and quality assurance services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-8 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <Target className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  To empower businesses with reliable, scalable, and
                  comprehensive quality assurance solutions that ensure their
                  software meets the highest standards of performance, security,
                  and user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  To be the leading quality assurance partner for innovative
                  companies worldwide, setting new standards in software testing
                  excellence and helping shape the future of digital
                  experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Our Track Record
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Numbers that speak to our commitment to quality and client
              success.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>500+</div>
              <div className='text-sm text-muted-foreground'>
                Projects Completed
              </div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>150+</div>
              <div className='text-sm text-muted-foreground'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>50+</div>
              <div className='text-sm text-muted-foreground'>QA Experts</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-primary mb-2'>99.9%</div>
              <div className='text-sm text-muted-foreground'>
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Our Team
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Meet Our Leadership
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Experienced professionals leading the charge in quality assurance
              innovation.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {team.map((member, index) => (
              <Card key={index} className='text-center'>
                <CardContent className='pt-6'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className='rounded-full mx-auto mb-4'
                  />
                  <h3 className='font-semibold text-lg'>{member.name}</h3>
                  <p className='text-primary text-sm font-medium'>
                    {member.role}
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Our Expert Team
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Meet more of our talented QA professionals and specialists.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-1.png'
                  alt='David Wilson'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>David Wilson</h3>
                <p className='text-primary text-sm font-medium'>
                  Senior QA Engineer
                </p>
                <p className='text-muted-foreground text-sm'>7+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    Selenium
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    API Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-2.png'
                  alt='Lisa Zhang'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Lisa Zhang</h3>
                <p className='text-primary text-sm font-medium'>
                  Mobile Testing Specialist
                </p>
                <p className='text-muted-foreground text-sm'>6+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    iOS
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    Android
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-3.png'
                  alt='Robert Kumar'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Robert Kumar</h3>
                <p className='text-primary text-sm font-medium'>
                  Security Testing Expert
                </p>
                <p className='text-muted-foreground text-sm'>9+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    Penetration
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    OWASP
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-4.png'
                  alt='Maria Garcia'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Maria Garcia</h3>
                <p className='text-primary text-sm font-medium'>
                  Test Automation Architect
                </p>
                <p className='text-muted-foreground text-sm'>11+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    Cypress
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    CI/CD
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-5.png'
                  alt='James Park'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>James Park</h3>
                <p className='text-primary text-sm font-medium'>
                  Performance Testing Lead
                </p>
                <p className='text-muted-foreground text-sm'>8+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    JMeter
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    LoadRunner
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-6.png'
                  alt='Anna Petrov'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Anna Petrov</h3>
                <p className='text-primary text-sm font-medium'>
                  Accessibility Testing Expert
                </p>
                <p className='text-muted-foreground text-sm'>5+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    WCAG
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    Screen Readers
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-7.png'
                  alt='Tom Anderson'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Tom Anderson</h3>
                <p className='text-primary text-sm font-medium'>
                  DevOps QA Engineer
                </p>
                <p className='text-muted-foreground text-sm'>7+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    Docker
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    Kubernetes
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Image
                  src='/qa-engineer-8.png'
                  alt='Sophie Martin'
                  width={150}
                  height={150}
                  className='rounded-full mx-auto mb-4'
                />
                <h3 className='font-semibold text-lg'>Sophie Martin</h3>
                <p className='text-primary text-sm font-medium'>
                  Manual Testing Specialist
                </p>
                <p className='text-muted-foreground text-sm'>6+ years</p>
                <div className='mt-3 flex flex-wrap gap-1 justify-center'>
                  <Badge variant='outline' className='text-xs'>
                    Exploratory
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    Usability
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Our Journey
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Company Milestones
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Key moments in our journey to becoming a leading QA partner.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader>
                <div className='text-3xl font-bold text-primary'>2015</div>
                <CardTitle>Company Founded</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Started with 5 QA engineers and a vision for excellence
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='text-3xl font-bold text-primary'>2017</div>
                <CardTitle>First 100 Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Reached milestone of serving 100+ satisfied clients
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='text-3xl font-bold text-primary'>2020</div>
                <CardTitle>ISO Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Achieved ISO 9001:2015 certification for quality management
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className='text-3xl font-bold text-primary'>2023</div>
                <CardTitle>50+ Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Expanded to 50+ QA professionals across multiple
                  specializations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Global Presence
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              Our offices around the world ensure 24/7 support for our clients.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <MapPin className='h-10 w-10 text-primary mb-2' />
                <CardTitle>San Francisco, CA</CardTitle>
                <CardDescription>Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  123 Tech Street, Suite 400
                  <br />
                  San Francisco, CA 94105
                </p>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Team Size:</span>
                    <span className='font-medium'>25 members</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Specialties:</span>
                    <span className='font-medium'>All services</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Austin, TX</CardTitle>
                <CardDescription>Development Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  456 Innovation Blvd
                  <br />
                  Austin, TX 78701
                </p>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Team Size:</span>
                    <span className='font-medium'>15 members</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Specialties:</span>
                    <span className='font-medium'>Automation, Performance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Toronto, Canada</CardTitle>
                <CardDescription>International Office</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground mb-4'>
                  789 Queen Street West
                  <br />
                  Toronto, ON M5V 1N2
                </p>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Team Size:</span>
                    <span className='font-medium'>10 members</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Specialties:</span>
                    <span className='font-medium'>Mobile, Security</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Company Culture
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              What Makes Us Different
            </h2>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <Users className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Collaborative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We foster a culture of collaboration where every team member's
                  input is valued and heard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Regular training, certifications, and conference attendance
                  keep our team at the cutting edge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Recognition & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Clear career paths and recognition programs that celebrate
                  achievements and milestones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Flexible working arrangements and comprehensive benefits that
                  support our team's well-being.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Dedicated time for exploring new tools, techniques, and
                  methodologies in quality assurance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Every project, no matter the size, receives the same level of
                  attention and quality focus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20'>
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Our Core Values
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              The principles that guide everything we do.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader>
                <Award className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We strive for perfection in every test case, every bug report,
                  and every client interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We work closely with our clients as partners, not just service
                  providers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We continuously adopt new technologies and methodologies to
                  stay ahead of the curve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Ready to Work With Us?
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
              Let's discuss how our expertise can help ensure your software
              meets the highest quality standards.
            </p>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
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
