
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {patient_name: 'Erin Williams', booking_doctor_id: 1, booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Jessica DiRocco', booking_doctor_id: 2, booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Jeremy Richards', booking_doctor_id: 3, booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Mith Mitchell', booking_doctor_id: 1, booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false},
        {patient_name: 'Red Redding', booking_doctor_id: 1, booking_reason: 'aslkjfslfj', booking_details: 'kasfsad', booking_date: '11/24/2018', booking_confirmed: true, booking_complete: false}
     
      ]);
    });
};
