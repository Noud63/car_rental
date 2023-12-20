import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants"
import ShowMore from "@/components/ShowMore";
import TheseToo from "@/components/TheseToo";
import HeroButtons from "@/components/HeroButtons";

export default async function Home({searchParams}:{searchParams:any}) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || "2023",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || "10",
    model: searchParams.model || ""

  })
 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <HeroButtons />

      <TheseToo />

      <div className="padding-x max-width mt-28 max-md:mt-16" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-black to-amber-700 text-transparent bg-clip-text py-1">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
