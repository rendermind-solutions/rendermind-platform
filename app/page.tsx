import { AboutCore, DiscoveryCall, Hero, ServicesMethodology, TechnicalExcellence, UseCases, ValueProposition, WorkflowPreview } from "@/components/sections/home"
import Metrics from "@/components/sections/home/metrics/Metrics";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCore />
      <WorkflowPreview />
      <TechnicalExcellence />
      <ValueProposition />
      <ServicesMethodology />
      <Metrics />
      <UseCases />
      <DiscoveryCall />
    </>
  );
}
