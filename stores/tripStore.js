import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  trips = [];

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.isLoading = false;
      console.log(response.data);
    } catch (error) {
      console.log("TripStore -> fetchTrips -> error", error);
    }
  };
}

const tripStore = new TripStore();

tripStore.fetchTrips();

export default tripStore;
