<template lang="html">
  <div id="bookingsGrid">
    <booking v-for="booking, index in bookings" :key="index" :booking="booking" />
  </div>

</template>

<script>
import { eventBus } from '../main.js';
import Booking from './Booking.vue';
import BookingService from '../services/BookingService.js';

export default {
  name: 'bookings-grid',
  data (){
    return{
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted (){
    this.fetchData();
  },
  methods:{
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
