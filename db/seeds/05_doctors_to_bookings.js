
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctor_to_bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctor_to_bookings').insert([
        {doctor_id: 1, note_id: 1, booking_id: 1},
        {doctor_id: 2, note_id: 2, booking_id: 2},   
        {doctor_id: 3, note_id: 3, booking_id: 3}   
      ]);
    });
};
  