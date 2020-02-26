<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add new booking:</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">email:</label>
      <input type="text" id="email" v-model="email" required/>
    </div>
    <div class="formWrap">
      <select id="booked_in" name="booked_in" v-model="booked_in">
        <option value=true>Yes</option>
        <option value=false>No</option>
      </select>
    </div>

    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
import { eventBus } from '../main.js';
import BookingService from '../services/BookingService.js';

export default {
  name: "bookings-form",
  data(){
    return{
      name: "",
      email: "",
      booked_in: false
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        booked_in: this.booked_in
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });

      document.getElementById("bookings-form").reset();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
