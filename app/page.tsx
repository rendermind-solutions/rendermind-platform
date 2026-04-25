import {
  AICapabilities,
  BestFirstProjects,
  DiscoveryCall,
  Hero,
  HowItWorks,
  Modules,
  Problem,
  Solution,
  TechnicalFoundation,
  UseCases,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <BestFirstProjects />
      <AICapabilities />
      <UseCases />
      <HowItWorks />
      <TechnicalFoundation />
      <DiscoveryCall />
    </>
  );
}
