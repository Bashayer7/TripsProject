import { observable, action, makeObservable, makeAutoObservable } from "mobx";
// import axios from "axios";
import api from "./api";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  fetchTrips = async () => {
    try {
      const res = await api.get("/trip");
      this.trips = res.data;
      console.log(res.data);
    } catch (error) {
      console.log("this.trips", error);
    }
  };

  addNewTrip = (newtrip) => {
    const foundTrip = this.trips.find(
      (trip) => trip.trip_id === newItem.trip._id
    );
    if (foundTrip) {
      foundTrip.name = newtrip.name;
    } else {
      this.trip.push(newtrip);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
