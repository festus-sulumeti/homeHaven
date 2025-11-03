import React, { useEffect, useState } from 'react'
import {
  ArrowRightLeftIcon,
  CalendarClockIcon,
  CalendarX2Icon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ClipboardListIcon,
  Clock9Icon,
  FacebookIcon,
  HashIcon,
  InstagramIcon,
  LanguagesIcon,
  LinkedinIcon,
  SettingsIcon,
  SquareActivityIcon,
  TriangleAlertIcon,
  TruckIcon,
  TwitterIcon,
  Undo2Icon,
  UsersIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

import LanguageDropdown from '@/Dashboard/dropdown-language'
import ProductInsightsCard from '@/Dashboard/widget-product-insights'
import ProfileDropdown from '@/Dashboard/dropdown-profile'
import SalesMetricsCard from '@/Dashboard/chart-sales-metrics'
import StatisticsCard from '@/Dashboard/statistics-card-01'
import TotalEarningCard from '@/Dashboard/widget-total-earning'
import TransactionDatatable, { type Item } from '@/Dashboard/datatable-transaction'

// --- Tenant & Property Types ---
type Tenant = {
  id: string
  name: string
  email: string
}

type Property = {
  id: string
  title: string
  address: string
  price: number
  bedrooms?: number
  bathrooms?: number
  areaSqFt?: number
  imageUrl?: string
  status?: 'available' | 'occupied' | 'pending'
}

// Statistics card data
const StatisticsCardData = [
  {
    icon: <UsersIcon className='size-4' />,
    value: '8',
    title: 'Active Listings',
    changePercentage: '+18.2%'
  },
  {
    icon: <TriangleAlertIcon className='size-4' />,
    value: '8',
    title: 'Maintenance Tickets',
    changePercentage: '-8.7%'
  },
  {
    icon: <Clock9Icon className='size-4' />,
    value: '27',
    title: 'Missed Viewings',
    changePercentage: '+4.3%'
  }
]

// Earning data for Total Earning card
const earningData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
    platform: 'Zipcar',
    technologies: 'Vuejs & HTML',
    earnings: '-23569.26',
    progressPercentage: 75
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
    platform: 'Bitbank',
    technologies: 'Figma & React',
    earnings: '-12650.31',
    progressPercentage: 25
  }
]

// Transaction table data
const transactionData: Item[] = [
  {
    id: '1',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    avatarFallback: 'JA',
    name: 'Jack Alfredo',
    amount: 316.0,
    status: 'paid',
    email: 'jack@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '2',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    avatarFallback: 'MG',
    name: 'Maria Gonzalez',
    amount: 253.4,
    status: 'pending',
    email: 'maria.g@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '3',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    avatarFallback: 'JD',
    name: 'John Doe',
    amount: 852.0,
    status: 'paid',
    email: 'john.doe@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '4',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    avatarFallback: 'EC',
    name: 'Emily Carter',
    amount: 889.0,
    status: 'pending',
    email: 'emily.carter@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '5',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    avatarFallback: 'DL',
    name: 'David Lee',
    amount: 723.16,
    status: 'paid',
    email: 'david.lee@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '6',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    avatarFallback: 'SP',
    name: 'Sophia Patel',
    amount: 612.0,
    status: 'failed',
    email: 'sophia.patel@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '7',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    avatarFallback: 'RW',
    name: 'Robert Wilson',
    amount: 445.25,
    status: 'paid',
    email: 'robert.wilson@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '8',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    avatarFallback: 'LM',
    name: 'Lisa Martinez',
    amount: 297.8,
    status: 'processing',
    email: 'lisa.martinez@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '9',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    avatarFallback: 'MT',
    name: 'Michael Thompson',
    amount: 756.9,
    status: 'paid',
    email: 'michael.thompson@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '10',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    avatarFallback: 'AJ',
    name: 'Amanda Johnson',
    amount: 189.5,
    status: 'pending',
    email: 'amanda.johnson@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '11',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    avatarFallback: 'KB',
    name: 'Kevin Brown',
    amount: 1024.75,
    status: 'paid',
    email: 'kevin.brown@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '12',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    avatarFallback: 'SD',
    name: 'Sarah Davis',
    amount: 367.2,
    status: 'failed',
    email: 'sarah.davis@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '13',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png',
    avatarFallback: 'CG',
    name: 'Christopher Garcia',
    amount: 598.45,
    status: 'processing',
    email: 'christopher.garcia@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '14',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
    avatarFallback: 'JR',
    name: 'Jennifer Rodriguez',
    amount: 821.3,
    status: 'paid',
    email: 'jennifer.rodriguez@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '15',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png',
    avatarFallback: 'DM',
    name: 'Daniel Miller',
    amount: 156.75,
    status: 'pending',
    email: 'daniel.miller@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '16',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    avatarFallback: 'NW',
    name: 'Nicole White',
    amount: 934.1,
    status: 'paid',
    email: 'nicole.white@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '17',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png',
    avatarFallback: 'AL',
    name: 'Anthony Lopez',
    amount: 412.85,
    status: 'failed',
    email: 'anthony.lopez@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '18',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
    avatarFallback: 'MH',
    name: 'Michelle Harris',
    amount: 675.5,
    status: 'processing',
    email: 'michelle.harris@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '19',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png',
    avatarFallback: 'JC',
    name: 'James Clark',
    amount: 289.95,
    status: 'paid',
    email: 'james.clark@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '20',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png',
    avatarFallback: 'RL',
    name: 'Rachel Lewis',
    amount: 1156.25,
    status: 'pending',
    email: 'rachel.lewis@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '21',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-21.png',
    avatarFallback: 'TY',
    name: 'Thomas Young',
    amount: 543.6,
    status: 'paid',
    email: 'thomas.young@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '22',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-22.png',
    avatarFallback: 'SB',
    name: 'Stephanie Brown',
    amount: 789.3,
    status: 'processing',
    email: 'stephanie.brown@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '23',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-23.png',
    avatarFallback: 'BM',
    name: 'Brandon Moore',
    amount: 425.75,
    status: 'failed',
    email: 'brandon.moore@gmail.com',
    paidBy: 'visa'
  },
  {
    id: '24',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-24.png',
    avatarFallback: 'KT',
    name: 'Kelly Taylor',
    amount: 1203.5,
    status: 'paid',
    email: 'kelly.taylor@gmail.com',
    paidBy: 'mastercard'
  },
  {
    id: '25',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-25.png',
    avatarFallback: 'MA',
    name: 'Mark Anderson',
    amount: 356.2,
    status: 'pending',
    email: 'mark.anderson@gmail.com',
    paidBy: 'visa'
  }
]

const DashboardShell = () => {
  // --- State ---
  const [tenant, setTenant] = useState<Tenant | null>(null)
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Property[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // --- Effects ---
  useEffect(() => {
    const loadInitial = async () => {
      try {
        setLoading(true)
        setError('')
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
        const token = localStorage.getItem('token')

        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }

        const [meRes, currentRes] = await Promise.all([
          fetch(`${apiUrl}/tenant/me`, { headers }),
          fetch(`${apiUrl}/tenant/current-property`, { headers }),
        ])

        const meData = await meRes.json()
        const currentData = await currentRes.json()

        if (!meRes.ok) throw new Error(meData?.message || 'Failed to load tenant')
        if (!currentRes.ok && currentRes.status !== 404) throw new Error(currentData?.message || 'Failed to load current property')

        setTenant(meData?.tenant ?? null)
        setCurrentProperty(currentData?.property ?? null)
      } catch (err: any) {
        setError(err?.message || 'Something went wrong loading your dashboard')
      } finally {
        setLoading(false)
      }
    }
    loadInitial()
  }, [])

  // --- Handlers ---
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
      const token = localStorage.getItem('token')
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }
      const res = await fetch(`${apiUrl}/properties/search?q=${encodeURIComponent(searchQuery)}`, { headers })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Search failed')
      setSearchResults(Array.isArray(data?.properties) ? data.properties : [])
    } catch (err: any) {
      setError(err?.message || 'Unable to search properties')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartNoAxesCombinedIcon />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className='bg-primary/10 rounded-full'>5</SidebarMenuBadge>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Properties</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <UsersIcon />
                        <span>My Residence</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartPieIcon />
                        <span>Browse Properties</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ClipboardListIcon />
                        <span>Applications</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className='bg-primary/10 rounded-full'>3</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ArrowRightLeftIcon />
                        <span>Payments</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartSplineIcon />
                        <span>Active Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <Clock9Icon />
                        <span>Upcoming Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <HashIcon />
                        <span>Completed Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <SquareActivityIcon />
                        <span>Real Time Monitoring</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <CalendarClockIcon />
                        <span>Schedule Post & Calendar</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <Undo2Icon />
                        <span>Report & Export</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <SettingsIcon />
                        <span>Settings & Integrations</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <UsersIcon />
                        <span>User Management</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='[&_svg]:!size-5' />
                <Separator orientation='vertical' className='hidden !h-4 sm:block' />
                <Breadcrumb className='hidden sm:block'>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Free</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className='flex items-center gap-1.5'>
                <LanguageDropdown
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <LanguagesIcon />
                    </Button>
                  }
                />
                <ProfileDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='size-9.5'>
                      <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />
              </div>
            </div>
          </header>
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            {/* Tenant header */}
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Welcome back</p>
                <h1 className='text-2xl font-semibold'>
                  {tenant?.name ? tenant.name : 'Tenant'}
                </h1>
              </div>
              <div className='text-sm text-muted-foreground'>
                {loading ? 'Syncing...' : ''}
              </div>
            </div>

            {/* Current Residence */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold mb-3'>Current Residence</h2>
              {error && (
                <div className='mb-3 rounded-md border border-destructive/20 bg-destructive/10 p-3'>
                  <p className='text-destructive text-sm'>{error}</p>
                </div>
              )}
              {currentProperty ? (
                <Card className='overflow-hidden'>
                  {currentProperty.imageUrl && (
                    <img
                      src={currentProperty.imageUrl}
                      alt={currentProperty.title}
                      className='h-44 w-full object-cover'
                    />
                  )}
                  <div className='px-4 py-4 space-y-2'>
                    <div className='flex items-start justify-between gap-3'>
                      <div>
                        <p className='font-medium'>{currentProperty.title}</p>
                        <p className='text-muted-foreground text-sm'>{currentProperty.address}</p>
                      </div>
                      {currentProperty.status && (
                        <span className='text-xs rounded-full border px-2 py-0.5 capitalize'>
                          {currentProperty.status}
                        </span>
                      )}
                    </div>
                    <div className='text-sm text-muted-foreground grid grid-cols-3 gap-2'>
                      {typeof currentProperty.bedrooms === 'number' && (
                        <span>{currentProperty.bedrooms} bd</span>
                      )}
                      {typeof currentProperty.bathrooms === 'number' && (
                        <span>{currentProperty.bathrooms} ba</span>
                      )}
                      {typeof currentProperty.areaSqFt === 'number' && (
                        <span>{currentProperty.areaSqFt} sqft</span>
                      )}
                    </div>
                    <p className='text-sm'>
                      <span className='font-semibold'>KSh {currentProperty.price.toLocaleString()}</span>
                    </p>
                    <div className='flex gap-2 pt-1'>
                      <Button size='sm' variant='outline' className='px-3'>View Lease</Button>
                      <Button size='sm' className='px-3'>Request Service</Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className='p-6'>
                  <p className='text-muted-foreground text-sm'>No current residence on file.</p>
                </Card>
              )}
            </div>

            {/* Find Properties */}
            <div className='mb-10'>
              <h2 className='text-xl font-semibold mb-3'>Find Properties</h2>
              <form onSubmit={handleSearch} className='mb-4 flex gap-2'>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search city, address, or keywords...'
                  className='border-input bg-transparent h-9 w-full rounded-md border px-3 text-sm outline-none'
                />
                <Button type='submit' disabled={loading}>Search</Button>
              </form>
              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {searchResults.map((p) => (
                  <Card key={p.id} className='overflow-hidden'>
                    {p.imageUrl && (
                      <img src={p.imageUrl} alt={p.title} className='h-40 w-full object-cover' />
                    )}
                    <div className='px-4 py-4 space-y-2'>
                      <div className='flex items-start justify-between gap-3'>
                        <div>
                          <p className='font-medium'>{p.title}</p>
                          <p className='text-muted-foreground text-sm'>{p.address}</p>
                        </div>
                        {p.status && (
                          <span className='text-xs rounded-full border px-2 py-0.5 capitalize'>
                            {p.status}
                          </span>
                        )}
                      </div>
                      <div className='text-sm text-muted-foreground grid grid-cols-3 gap-2'>
                        {typeof p.bedrooms === 'number' && <span>{p.bedrooms} bd</span>}
                        {typeof p.bathrooms === 'number' && <span>{p.bathrooms} ba</span>}
                        {typeof p.areaSqFt === 'number' && <span>{p.areaSqFt} sqft</span>}
                      </div>
                      <p className='text-sm'><span className='font-semibold'>KSh {p.price.toLocaleString()}</span></p>
                      <div className='flex gap-2 pt-1'>
                        <Button size='sm' variant='outline' className='px-3'>Details</Button>
                        <Button size='sm' className='px-3'>Apply</Button>
                      </div>
                    </div>
                  </Card>
                ))}
                {!loading && searchResults.length === 0 && (
                  <Card className='p-6 sm:col-span-2 lg:col-span-3'>
                    <p className='text-muted-foreground text-sm'>Search to discover properties.</p>
                  </Card>
                )}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
              {/* Statistics Cards */}
              <div className='col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1'>
                {StatisticsCardData.map((card, index) => (
                  <StatisticsCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    changePercentage={card.changePercentage}
                  />
                ))}
              </div>

              <div className='grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2'>
                {/* Product Insights Card */}
                <ProductInsightsCard className='justify-between gap-3 [&>[data-slot=card-content]]:space-y-5' />

                {/* Total Earning Card */}
                <TotalEarningCard
                  title='Total Earning'
                  earning={24650}
                  trend='up'
                  percentage={10}
                  comparisonText='Compare to last year ($84,325)'
                  earningData={earningData}
                  className='justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7'
                />
              </div>

              <SalesMetricsCard className='col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6' />

              <Card className='col-span-full w-full py-0'>
                <TransactionDatatable data={transactionData} />
              </Card>
            </div>
          </main>
        
        </div>
      </SidebarProvider>
    </div>
  )
}

export default DashboardShell
