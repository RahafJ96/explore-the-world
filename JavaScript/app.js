// 

var userName ='Rahaf'; 

alert('hello');

var favouriteCountry= prompt('what is your favourite Country between Austria, France or Japan?');

// there is a way to change to lower case.


if(favouriteCountry=='Austria'){
  document.write('<img src="https://heritagehotelsofeurope.com/wp-content/uploads/2020/06/hallstatt-village-austria-TX59P3L-1-scaled.jpg" width="250px">');
}else if(favouriteCountry === 'France'){
  document.write('<img src="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg" width="250px">');
}else if(favouriteCountry === 'Japan'){
  document.write('<img src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" width="250px">');}
else{
  document.write('<h3> please only write Austria, France or Japan next time</h3>');
}
