var names = ['Abhi', 'Aniket', 'Aarushi'];
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Abhi'));

var person = {
  name: 'Abhi',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' > ' + name);
    });
  }
}

person.greet();
