import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className='bg-muted/50 border-t'>
      <div className='container px-4 md:px-6 py-12'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
          <div className='space-y-4'>
            <Link href='/' className='flex items-center space-x-2'>
              <Shield className='h-6 w-6 text-primary' />
              <span className='font-bold text-xl'>eLevate Technologies</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              Professional software testing and quality assurance services for
              modern applications.
            </p>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Automation Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Accessibility Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link
                  href='/manual_testing'
                  className='text-muted-foreground hover:text-primary'
                >
                  Manual Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Software QA Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Non-Functional Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Performance Testing
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-muted-foreground hover:text-primary'
                >
                  Security Testing
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-primary'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-primary'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-primary'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-primary'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Contact Info</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                info@qualitypro.com
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                +1 (555) 123-4567
              </li>
              <li className='flex items-center gap-2'>
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
