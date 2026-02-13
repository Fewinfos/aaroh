import EventDetailClient from "./EventDetailClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [];
}

export default function EventDetailPage() {
  return <EventDetailClient />;
}
