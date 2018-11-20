
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {doctor_name: 'Dr. Ulises Urcuyo', doctor_email: 'test@test.com', doctor_password: 'test'},
        {doctor_name: 'Dr. Jorge Seda', doctor_email: 'test2@test.com', doctor_password: 'test2'},
        {doctor_name: 'Dr. Eric Donahue', doctor_email: 'test3@test.com', doctor_password: 'test3'}
      ]);
    });
};
