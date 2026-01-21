"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContainerTextFlip } from "@/components/ui/text_shift"

const MarketingHeroCard = () => {

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <Card className='max-w-4xl w-full bg-white rounded-3xl shadow-2xl'>
        <CardContent className='p-12 text-center space-y-8'>
          {/* Main Headline */}
          <div className='space-y-4'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 leading-tight'>
              Build, test, and deploy software{" "}
              <ContainerTextFlip
                words={["better", "faster", "stronger", "smarter"]}
              />
              {/*<span className='text-gray-700'>faster</span>*/}
            </h1>

            <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Ensure your applications reach users seamlessly with expert
              deployment and rigorous testing services. From automated quality
              checks to smooth rollouts, we help you save time, reduce risks,
              and deliver software that performs flawlessly in the real world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium'
            >
              Explore our services
            </Button>
          </div>

          {/* Social Proof */}
          <div className='space-y-6 pt-8'>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Trusted by leading companies worldwide for comprehensive quality assurance and testing solutions
            </p>

            {/* Technology Logos */}
            <div className='flex justify-center items-center gap-8 pt-4 flex-wrap'>
              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <img
                    src='https://cdn.simpleicons.org/selenium/43B02A'
                    alt='Selenium'
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='text-sm font-medium'>Selenium</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <img
                    src='https://cdn.simpleicons.org/jira/0052CC'
                    alt='JIRA'
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='text-sm font-medium'>JIRA</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <img
                    src='https://cdn.simpleicons.org/testrail/2B3A4E'
                    alt='TestRail'
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='text-sm font-medium'>TestRail</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <img
                    src='https://cdn.simpleicons.org/postman/FF6C37'
                    alt='Postman'
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='text-sm font-medium'>Postman</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MarketingHeroCard
