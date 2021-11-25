import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  trips = [];

  // createTrip = async (newTrip) => {
  //   try {
  //     const formData = new FormData();
  //     for (const key in newTrip) {
  //       formData.append(key, newTrip[key]);
  //     }
  //     const response = await instance.post("/trips", formData);
  //     this.trips.push(response.data);
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: tripStore.js ~ line 16 ~ TripStore ~ createTrip= ~ error",
  //       error
  //     );
  //   }
  // };

  createTrip = async (newtrip) => {
    try {
      const formData = new FormData();
      for (const key in newtrip) {
        formData.append(key, newtrip[key]);
      }

      const res = await instance.post("/trips", formData);
      this.trips.push(res.data);
      // navigation.navigate("TripList");
    } catch (error) {
      console.log(error);
      toast.show({
        status: "error",
        title: "Invalid Creat",
        description: "something wrong happend!",
      });
    }
  };

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

  //   tripDelete = async (tripId) => {
  //     try {
  //       if (trip.owner === trip.tripId.owner) {
  //         this.trips = this.trips.filter((trip) => trip._id !== tripId);
  //       }
  //     } catch (error) {
  //       console.log("TripStore -> fetchTrips -> error", error);
  //     }
  //   };

  tripDelete = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();

tripStore.fetchTrips();

export default tripStore;
