import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebaseConnection";
import type { CarProps } from "../types";

export async function fetchCars(): Promise<CarProps[]> {
    const carsRef = collection(db, "cars");
    const queryRef = query(carsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(queryRef);
    const list: CarProps[] = [];
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
        });
    });
    return list;
}
