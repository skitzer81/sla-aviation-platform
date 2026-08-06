import Link from "next/link";

import SearchResults from "@/components/search/SearchResults";

type SearchPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = (await searchParams) ?? {};

  const from = typeof params.from === "string" ? params.from : "Glasgow";
  const to = typeof params.to === "string" ? params.to : "Lagos";
  const departure = typeof params.departure === "string" ? params.departure : "";
  const passengers = typeof params.passengers === "string" ? params.passengers : "1";
  const cabin = typeof params.cabin === "string" ? params.cabin : "Economy";

  return (
    <div className="searchPage">
      <header className="searchPageHeader">
        <div className="searchPageHeaderInner">
          <div>
            <h1>SLA Airlines</h1>
            <p>Premium travel curated for every journey.</p>
          </div>
          <Link href="/">Back to homepage</Link>
        </div>
      </header>

      <main className="searchPageMain">
        <div className="searchResultsContainer">
          <SearchResults
            from={from}
            to={to}
            departure={departure}
            passengers={passengers}
            cabin={cabin}
          />
        </div>
      </main>
    </div>
  );
}
