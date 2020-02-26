<template lang="html">
  <div>
    <p>Name: {{booking.name}} email: {{booking.email}} Booked In: {{booking.booked_in}}</p>
  </div>
</template>

<script>
export default {
  name: "booking",
  props: ["booking"]
}
</script>

<style lang="css" scoped>
</style>
