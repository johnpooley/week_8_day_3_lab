<template lang="html">
  <div class="booking">
    <p>
      Name: {{booking.name}} email: {{booking.email}} Booked In: {{booking.booked_in}}
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
      <!-- <button v-on:click="handleUpdate(booking._id)">Update Status</button> -->
    </p>
  </div>
</template>

<script>
import { eventBus} from '../main.js';
import BookingService from '../services/BookingService.js';

export default {
  name: "booking",
  props: ["booking"],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }

    // handleUpdate(id){
    //   const payload = {
    //     name: this.name,
    //     email: this.email,
    //     booked_in: !this.booked_in
    //   };
    //   BookingService.updateBooking(id, payload)
    //   .then(response => eventBus.$emit('booking-updated', id));
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
