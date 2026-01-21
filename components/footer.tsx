import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className='bg-muted/50 border-t'>
      <div className='container px-4 md:px-6 py-12 max-w-7xl mx-auto'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4 justify-items-center text-center'>
          <div className='space-y-4'>
            <Link href='/' className='flex items-center justify-center space-x-2'>
              <Shield className='h-6 w-6 text-primary' />
              <span className='font-bold text-xl'>eLevate Technologies</span>
            </Link>
            <p className='text-sm text-muted-foreground text-center'>
              Professional software testing and quality assurance services for
              modern applications.
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-center'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Automation Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Accessibility Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link
                  href='/manual_testing'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Manual Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Software QA Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Non-Functional Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Performance Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Security Testing
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-center'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-primary text-center block'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-center'>Contact Info</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-center justify-center gap-2'>
                <Mail className='h-4 w-4' />
                info@qualitypro.com
              </li>
              <li className='flex items-center justify-center gap-2'>
                <Phone className='h-4 w-4' />
                +1 (555) 123-4567
              </li>
              <li className='flex items-center justify-center gap-2'>
                <MapPin className='h-4 w-4' />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} QualityPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
