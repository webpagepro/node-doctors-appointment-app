
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {patient_name: 'Erin Williams'},
        {patient_name: 'Jessica DiRocco'},
        {patient_name: 'Jeremy Richards'}
      ]);
    });
};
