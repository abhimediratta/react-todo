function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City Not found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    resolve(79);
    reject('City Not found');
  });
}

getTempPromise('Philadelphia').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});
