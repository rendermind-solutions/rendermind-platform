import {
  AICapabilities,
  DiscoveryCall,
  Hero,
  HowItWorks,
  Problem,
  Solution,
  UseCases,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <AICapabilities />
      <UseCases />
      <HowItWorks />
      <DiscoveryCall />
    </>
  );
}
