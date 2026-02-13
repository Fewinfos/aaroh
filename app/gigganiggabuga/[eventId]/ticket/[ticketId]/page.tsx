import TicketClient from "./TicketClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [];
}

export default function TicketPage() {
  return <TicketClient />;
}
