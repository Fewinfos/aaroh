import type { Metadata } from "next";
import Navbar from "../components/NavBar/navbar";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Events | MULTIVERSE 2026",
  description: "Explore all events at MULTIVERSE 2026 - National Level Hackathon at MKCE, Karur",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Navbar />
      {children}
    </SmoothScroll>
  );
}
