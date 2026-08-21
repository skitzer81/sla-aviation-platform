import { NextRequest, NextResponse } from "next/server";
import { demoBookings } from "../../../../lib/sla/demo-data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const reference = String(body.reference || "")
      .trim()
      .toUpperCase();

    const surname = String(body.surname || "")
      .trim()
      .toUpperCase();

    if (!reference || !surname) {
      return NextResponse.json(
        {
          ok: false,
          error: "Booking reference and last name are required.",
        },
        { status: 400 }
      );
    }

    const booking = demoBookings.find(
      (item) =>
        item.reference.toUpperCase() === reference &&
        item.surname.toUpperCase() === surname
    );

    if (!booking) {
      return NextResponse.json(
        {
          ok: false,
          error: "We could not find a booking matching those details.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      booking,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to retrieve booking.",
      },
      { status: 500 }
    );
  }
}
