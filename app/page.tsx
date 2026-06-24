import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { BusinessSection } from '@/components/business-section'
import { StatsSection } from '@/components/stats-section'
import { MembersSection } from '@/components/members-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'



export default function Page() {
  return (
    <>
      <SiteHeader transparent />
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <StatsSection />
        <MembersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
