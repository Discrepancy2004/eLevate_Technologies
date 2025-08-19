"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ContainerTextFlip } from "@/components/ui/text_shift"

const MarketingHeroCard = () => {
  const userAvatars = [
    "/placeholder.svg?height=40&width=40&text=User1",
    "/placeholder.svg?height=40&width=40&text=User2",
    "/placeholder.svg?height=40&width=40&text=User3",
    "/placeholder.svg?height=40&width=40&text=User4",
    "/placeholder.svg?height=40&width=40&text=User5",
    "/placeholder.svg?height=40&width=40&text=User6",
    "/placeholder.svg?height=40&width=40&text=User7",
    "/placeholder.svg?height=40&width=40&text=User8",
  ]

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
            <p className='text-sm text-gray-500 font-medium'>
              Trusted by Founders and Entrepreneurs from all over the world
            </p>

            {/* User Avatars */}
            <div className='flex justify-center items-center'>
              <div className='flex -space-x-2'>
                {userAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className='w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100'
                  >
                    <Image
                      src={avatar || "/placeholder.svg"}
                      alt={`User ${index + 1}`}
                      width={40}
                      height={40}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Logos */}
            <div className='flex justify-center items-center gap-8 pt-4'>
              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6 bg-gray-900 rounded flex items-center justify-center'>
                  <span className='text-white text-xs font-bold'>N</span>
                </div>
                <span className='text-sm font-medium'>Next.js</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-full h-full text-blue-500'
                  >
                    <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565-.455-.47-.91-.993-1.36-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
                  </svg>
                </div>
                <span className='text-sm font-medium'>React</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-full h-full text-cyan-500'
                  >
                    <path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z' />
                  </svg>
                </div>
                <span className='text-sm font-medium'>TailwindCSS</span>
              </div>

              <div className='flex items-center gap-2 text-gray-500'>
                <div className='w-6 h-6'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-full h-full text-purple-500'
                  >
                    <path d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                  </svg>
                </div>
                <span className='text-sm font-medium'>Framer Motion</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MarketingHeroCard
