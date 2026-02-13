import FAQ from "../components/FAQ/faq";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";

export const metadata = {
  title: "FAQ - MULTIVERSE 2026",
  description: "Frequently Asked Questions about MULTIVERSE 2026 - National Level Hackathon",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-titanium-black">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}