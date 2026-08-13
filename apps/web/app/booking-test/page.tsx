import Header from "@/components/v2/Header/Header";
import BookingWidget from "@/components/booking/BookingWidget";

export default function BookingTestPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 84px)",
          padding: "56px 24px",
          background:
            "linear-gradient(180deg, #f7fbff 0%, #eef4fa 100%)",
        }}
      >
        <div
          style={{
            width: "min(1180px, 100%)",
            margin: "0 auto",
          }}
        >
          <BookingWidget />
        </div>
      </main>
    </>
  );
}
