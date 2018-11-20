
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {note:  'Eam novum pericula cu, duo dicunt nostrum accommodare te. Diam repudiare eam ei, sumo possit ad sed. Erat doctus discere ex vix. Aliquam concludaturque has at, ex sea elit disputationi. Oratio deserunt nam eu, at vis solet dolorum.'},
        {note: 'Lorem ipsum dolor sit amet, latine delectus ad pro, id usu veri adhuc, dico inermis nonumes his eu. An soleat praesent duo. Eu has illud sapientem. Nam enim propriae inimicus ei. Ut sed exerci homero laudem, cetero democritum abhorreant ei vel, te adhuc quaerendum interpretaris mei.'},
        {note: 'Eos et malorum salutatus, clita intellegat te sit, has malis oportere eu. In fierent signiferumque sea, timeam legimus accumsan cu mei, mei consul persecuti dissentiet at. Nec viderer complectitur definitionem eu, in per saperet facilis repudiandae. Ea augue veritus eam, mel et aperiri alterum partiendo. Affert propriae interpretaris has an, te has adipisci omittantur, eos ei ullum delenit theophrastus. Te veniam utamur elaboraret mea. Doctus vocent discere ut vix, at per vitae constituam.'}

      ]);
    });
};
