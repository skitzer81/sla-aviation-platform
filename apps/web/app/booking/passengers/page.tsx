import Link from "next/link";
import Header from "../../../components/home/Header";

import PassengerForm from "@/components/booking/PassengerForm";

type BookingPassengerPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BookingPassengerPage({ searchParams }: BookingPassengerPageProps) {
  const params = (await searchParams) ?? {};

  const flight = typeof params.flight === "string" ? params.flight : "SLA 101";
  const from = typeof params.from === "string" ? params.from : "Glasgow";
  const to = typeof params.to === "string" ? params.to : "Lagos";
  const departure = typeof params.departure === "string" ? params.departure : "";
  const passengers = typeof params.passengers === "string" ? params.passengers : "1";
  const cabin = typeof params.cabin === "string" ? params.cabin : "Economy";
  const fare = typeof params.fare === "string" ? params.fare : "Economy";
  const price = typeof params.price === "string" ? params.price : "595";

  return (
    <div className="bookingPage">
      <header className="bookingPageHeader">
        <div className="bookingPageHeaderInner">
          <div>
            <p className="eyebrow">PASSENGER DETAILS</p>
            <h1>Who is travelling?</h1>
          </div>
          <Link href="/search">Back to flights</Link>
        </div>
      </header>

      <main className="bookingPageMain">
        <div className="bookingLayout">
          <PassengerForm
            flight={flight}
            from={from}
            to={to}
            departure={departure}
            passengers={passengers}
            cabin={cabin}
            fare={fare}
            price={price}
          />
        </div>
      </main>
    </div>
  );
}
