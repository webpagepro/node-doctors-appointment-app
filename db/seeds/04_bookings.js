
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {patient_name: 'Erin Williams', booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Jessica DiRocco', booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Jeremy Richards', booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false}
      ]);
    });
};
