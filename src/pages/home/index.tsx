import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CardList } from "../../components/cardList";
import { Container } from "../../components/container";
import { db } from "../../services/firebaseConnection";
import type { CarProps } from "../../types";

export function Home() {
     const [cars, setCars] = useState<CarProps[]>([]);
    

    useEffect(()=> {
        function getCars() {
            const carsRef = collection(db, "cars");
            const queryRef=query(carsRef, orderBy("createdAt", "desc"));
            getDocs(queryRef)
            .then((snapshot) => {
                const list=[] as CarProps[];
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        make: doc.data().make,
                        model: doc.data().model,
                        year: doc.data().year,
                        price: doc.data().price,
                        images: doc.data().images,
                        featured: doc.data().featured,
                        availability: doc.data().availability,
                        location: doc.data().location,
                        condition: doc.data().condition,
                        bodyType: doc.data().bodyType,
                        fuelType: doc.data().fuelType,
                        transmission: doc.data().transmission,
                        mileage: doc.data().mileage,
                        color: doc.data().color
                    })
                })
                setCars(list);
            })
            
        }
        getCars();
    },[])
    return (
        <Container>
           { /* <FilterSection></FilterSection>*/  }
            <CardList cars={cars}
                filteredCount={cars.length}
                totalCount={cars.length}
            />
        </Container>
    )
} 