import { landingHtml } from "@/features/marketing/landing-page.html";

export default function LandingPage() {
  return <div dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
