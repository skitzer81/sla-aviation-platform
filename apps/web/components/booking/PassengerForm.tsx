"use client";

import Link from "next/link";
import { useMemo } from "react";

type PassengerFormProps = {
  flight: string;
  from: string;
  to: string;
  departure: string;
  passengers: string;
  cabin: string;
  fare: string;
  price: string;
};

export default function PassengerForm({
  flight,
  from,
  to,
  departure,
  passengers,
  cabin,
  fare,
  price,
}: PassengerFormProps) {
  const formattedDate = useMemo(() => {
    if (!departure) return "Select a date";

    const parsed = new Date(`${departure}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      return departure;
    }

    return parsed.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [departure]);

  const totalPrice = Number(price) * Number(passengers || 1);

  return (
    <>
      <section className="bookingFormPanel" aria-labelledby="passenger-form-heading">
        <div className="bookingSectionIntro">
          <p className="eyebrow">PASSENGER INFORMATION</p>
          <h2 id="passenger-form-heading">Complete your traveller profile.</h2>
          <p>
            Add the details for the lead traveller and we will keep everything in
            place for your premium journey.
          </p>
        </div>

        <form className="bookingForm" action="/booking/payment" method="GET">
          <fieldset>
            <legend>Personal details</legend>
            <div className="fieldGrid">
              <label>
                <span>Title</span>
                <select name="title" required defaultValue="">
                  <option value="" disabled>
                    Select title
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
              </label>
              <label>
                <span>First name</span>
                <input type="text" name="firstName" required />
              </label>
              <label>
                <span>Middle name (optional)</span>
                <input type="text" name="middleName" />
              </label>
              <label>
                <span>Last name</span>
                <input type="text" name="lastName" required />
              </label>
              <label>
                <span>Date of birth</span>
                <input type="date" name="dateOfBirth" required />
              </label>
              <label>
                <span>Gender</span>
                <select name="gender" required defaultValue="">
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Travel document</legend>
            <div className="fieldGrid">
              <label>
                <span>Nationality</span>
                <input type="text" name="nationality" required />
              </label>
              <label>
                <span>Passport number</span>
                <input type="text" name="passportNumber" required />
              </label>
              <label>
                <span>Passport expiry date</span>
                <input type="date" name="passportExpiry" required />
              </label>
              <label>
                <span>Passport issuing country</span>
                <input type="text" name="passportCountry" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Contact details</legend>
            <div className="fieldGrid">
              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span>Phone country code</span>
                <input type="text" name="phoneCountryCode" defaultValue="+44" required />
              </label>
              <label>
                <span>Phone number</span>
                <input type="tel" name="phoneNumber" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Travel preferences</legend>
            <div className="fieldGrid">
              <label>
                <span>Meal preference</span>
                <select name="mealPreference" defaultValue="Standard">
                  <option value="Standard">Standard</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Kosher">Kosher</option>
                </select>
              </label>
              <label>
                <span>Accessibility assistance</span>
                <select name="assistance" defaultValue="None">
                  <option value="None">None</option>
                  <option value="Wheelchair">Wheelchair assistance</option>
                  <option value="Visual">Visual assistance</option>
                  <option value="Hearing">Hearing assistance</option>
                </select>
              </label>
              <label>
                <span>Frequent traveller number (optional)</span>
                <input type="text" name="frequentTraveller" />
              </label>
            </div>
          </fieldset>

          <label className="checkboxRow">
            <input type="checkbox" name="passportMatch" required />
            <span>I confirm the passenger details match the passport.</span>
          </label>

          <input type="hidden" name="flight" value={flight} />
          <input type="hidden" name="from" value={from} />
          <input type="hidden" name="to" value={to} />
          <input type="hidden" name="departure" value={departure} />
          <input type="hidden" name="passengers" value={passengers} />
          <input type="hidden" name="cabin" value={cabin} />
          <input type="hidden" name="fare" value={fare} />
          <input type="hidden" name="price" value={price} />

          <button type="submit" className="bookingSubmitButton">
            Continue to payment
          </button>
          <Link href="/search" className="bookingBackLink">
            Back to flights
          </Link>
        </form>
      </section>

      <aside className="bookingSummaryPanel" aria-label="Booking summary">
        <div className="bookingSummaryCard">
          <p className="eyebrow">BOOKING SUMMARY</p>
          <h3>{from} → {to}</h3>
          <p>{flight}</p>
          <div className="summaryRows">
            <div>
              <span>Departure</span>
              <strong>{formattedDate}</strong>
            </div>
            <div>
              <span>Cabin</span>
              <strong>{cabin}</strong>
            </div>
            <div>
              <span>Fare</span>
              <strong>{fare}</strong>
            </div>
            <div>
              <span>Passengers</span>
              <strong>{passengers}</strong>
            </div>
          </div>
          <div className="summaryTotal">
            <span>Total</span>
            <strong>£{totalPrice}</strong>
          </div>
        </div>
      </aside>
    </>
  );
}
