
let arrStudents = [
  {
    fio: 'Великанов Мадест Игоревич',
    birthday: new Date('1993-03-08'),
    faculty: 'Математика',
    startEducation: new Date('2013-09-01'),
  },
  {
    fio: 'Веселов Андрей Викторович',
    birthday: new Date('2000-08-17'),
    faculty: 'Физика',
    startEducation: new Date('2016-09-01'),
  },
  {
    fio: 'Джигарханян Акоп Ментандилович',
    birthday: new Date('1980-03-25'),
    faculty: 'Химия',
    startEducation: new Date('2019-09-01'),
  },
  {
    fio: 'Коркин Валерий Петрович',
    birthday: new Date('2004-01-31'),
    faculty: 'История',
    startEducation: new Date('2022-09-01'),
  },
  {
    fio: 'Церетели Зураб Сулейманович',
    birthday: new Date('1999-04-22'),
    faculty: 'Физика',
    startEducation: new Date('2020-09-01'),
  },
];


  sortOfTypeDate(arrStudents);
  sortOfTypeStrings(arrStudents);

  function sortOfTypeDate(arr) {

    arr.sort(function(a,b) {
      a.birthday.getFullYear() - b.birthday.getFullYear();
    });
    console.log(arr);
  }

  function sortOfTypeStrings(arr) {

    arr.sort(function(a,b) {
      a.fio.localeCompare(b.fio);
    });
    console.log(arr);
  }
