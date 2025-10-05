"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={40}
          buttonText="Start free trial"
          onButtonClick={() => console.log('Button clicked')}
          navItems={
            [
              { name: 'hero', id: 'hero' },
              { name: 'about', id: 'about' },
              { name: 'how-to-buy', id: 'how-to-buy' },
              { name: 'tokenomics', id: 'tokenomics' },
              { name: 'footer', id: 'footer' }
            ]
          }
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Xeven"
          description="Your future-forward, developer-friendly platform."
          tagLabel="Get started"
          primaryButtonText="Join now"
          secondaryButtonText="Learn more"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Xeven"
          descriptions={[
            "Xeven is designed to streamline your development process.",
            "We focus on efficiency and innovation to enhance your workflow."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Select your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your payment", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Explore the key metrics and statistics."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "Total supply of tokens", icon: "Star" },
            { value: "500K", description: "Circulating Supply", longDescription: "Tokens available in circulation", icon: "Users" },
            { value: "150K", description: "Mapped Liquidity", longDescription: "Total liquidity for trading", icon: "Chart" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          logoText="Xeven"
          columns={[
            { items: [ { label: "Privacy Policy", onClick: () => console.log('Privacy clicked') }, { label: "Terms of Service", onClick: () => console.log('Terms clicked') }] },
            { items: [ { label: "Contact Us", onClick: () => console.log('Contact clicked') }, { label: "Help", onClick: () => console.log('Help clicked') }] },
            { items: [ { label: "About Us", onClick: () => console.log('About clicked') }, { label: "Careers", onClick: () => console.log('Careers clicked') }] }
          ]}
          copyrightText="© 2023 Xeven. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}