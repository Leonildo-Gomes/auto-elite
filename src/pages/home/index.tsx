import { useQuery } from "@tanstack/react-query";
import { CardList } from "../../components/cardList";
import { FeaturedCars } from "../../components/featuredCars";
import { HeroBanner } from "../../components/heroBanner";
import { Loading } from "../../components/loading";
import { fetchCars } from "../../api/cars";
import { carKeys } from "../../api/queryKeys";

export function Home() {
    const { data: cars, isLoading, isError } = useQuery({
        queryKey: carKeys.all,
        queryFn: fetchCars
    });

    if (isLoading) return <Loading />;

    if (isError) {
        return <div className="text-center mt-8 text-red-500">Ocorreu um erro ao buscar os carros. Tente novamente mais tarde.</div>;
    }

    const safeCars = cars || [];

    return (
        <>  
            <HeroBanner/>
            
            <main className="container py-12 mx-auto px-4">
                    <FeaturedCars cars={safeCars}/>
                    { /* <FilterSection></FilterSection>*/  }
                    <CardList cars={safeCars}
                        filteredCount={safeCars.length}
                        totalCount={safeCars.length}
                    /> 
            </main>
            
        </>
    )
} 