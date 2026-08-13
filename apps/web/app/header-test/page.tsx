import Header from "@/components/v2/Header/Header";

export default function HeaderTestPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 88px)",
          background: "#f7f9fc",
        }}
      />
    </>
  );
}
