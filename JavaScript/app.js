// 
/* 
1. Welcome Message for the User
2. Ask the user whats your favourite Country?
3. Keep asking until he only answers with Austria, France or Japan.
4. Ask how many starts do you give our website ?
5. show number of starts based on user input.
*/

alert('Hello there! Welcome to my website');

var favouriteCountry= prompt('what is your favourite Country between Austria, France or Japan?');

while (favouriteCountry !== 'Austria' && favouriteCountry !== 'France'&& favouriteCountry !== 'Japan') {

  favouriteCountry = prompt('Please only answer with between Austria, France or Japan');
}


if(favouriteCountry=='Austria'){
  document.write('<img src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" width="500px">');
}else if(favouriteCountry === 'France'){
  document.write('<img src="https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg" width="500px">');
}else if(favouriteCountry === 'Japan'){
  document.write('<img src="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg" width="500px">');}
else{
  document.write('<h3> please only write Austria, France or Japan next time</h3>');
}


var stars = prompt('How do you rate our Website 1-5?');

if (stars > 5) {
  stars = 5;
}
document.write('<p> </p>')
for (var i = 0; i < stars; i++) {

  document.write('   <img src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/star.png" width="80px">');
}

var reasonTravel= confirm('Thank you, Enjoy!')
