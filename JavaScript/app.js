let age = prompt("Hello there!\nHow old are you?")
while(age < 16){
    age = prompt('You must be 16 or greater.');
}
alert('You are '+age+' years old!\nWelcome To my Website, lets Explore the World!');

// Information about each place 
let neu= `Neuschwanstein Castle  is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of Richard Wagner. Ludwig chose to pay for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. Construction began in 1869, but was never fully completed.

The castle was intended as a private residence for the King, until he died in 1886. It was open to the public shortly after his death. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer.`

let eiffel= `The Eiffel tower is the trademark of Paris, France. With the tower being 984ft, it’s kind of hard not to notice it. The tower has a restaurant, radio and television transmitter and more. Gustave A. Eiffel created the tower to enter it in the worlds fair. It was made with wrought iron and had medium wind resistance. Gustave started in 1889 and completed in 1910. Gustave A. Eiffel created the Eiffel Tower. Eiffel oversaw the construction with such success that in 1866 he founded his own company and soon became known for his wrought iron structures. Starting in 1872 he attracted foreign contracts, and in 1877 he created over the Douro River in Porto, Portugal, a steel arch bridge 525 ft in height.`

let venice= `Venice, Italian Venezia, city, major seaport, and capital of both the provincia (province) of Venezia and the regione (region) of Veneto, northern Italy. An island city, it was once the centre of a maritime republic. It was the greatest seaport in late medieval Europe and the continent’s commercial and cultural link to Asia. Venice is unique environmentally, architecturally, and historically, and in its days as a republic the city was styled la serenissima (“the most serene” or “sublime”). It remains a major Italian port in the northern Adriatic Sea and is one of the world’s oldest tourist and cultural centres.
Today Venice is recognized as part of the artistic and architectural patrimony of all humanity, a fitting role for a city whose thousand-year economic and political independence was sustained by its role in global trading. The situation of the city on islands has limited modern suburban spread beyond the historic centre; its framework of canals and narrow streets has prevented the intrusion of automobiles; and its unmatched wealth of fine buildings and monuments dating from the period of commercial dominance has ensured a keen and almost universal desire for sensitive conservation.`

let tokyo= `Japan (Tokyo) is the capital of Japan and it has a population of 13 million people. Tokyo is a marvelous mix of modern living and old-fashioned manners, slick high-tech gadgets and cutesy cartoon mascots. It's terribly crowded, yet can be strangely quiet. It's home to the understated, and the wacky, and you often find them right next to each other on the sidewalk. Tokyo was originally a small fishing village named Edo, now it is modern city and hosts 51 of the Fortune Global 500 companies, the highest number of any city.
The weather there will be cold and we should wear coat, scarfs, gloves and boots.
As I have read there is a deeper respect for there elders and they high regard for foreigners. They have one of the most advanced tsunami early warning system in the world. We find it more economical to exchange currency before we leave.
Here are best plans for visiting plans:
1. Meiji Shrine: is a Shinto shrine located in the Shibuya Ward, in the middle of a beautiful forest with huge Torii gates leading to the main hall and it is accessible from the Harajuku Station on the JR Yamanote Line.
2. Yoyogi Park on a Sunday: is the best to observe local customs.
3. Zojoji Temple: is a Buddhist temple`

let cologne_cathedral= `Cologne Cathedral is a building of superlatives that is the centre and hallmark of this city on the Rhine. The cornerstone of this Gothic cathedral was laid on the Feast of the Assumption of Mary on 15 August 1248. The previous building was apparently no longer deemed impressive enough to house the remains of the Three Wise Men, which Archbishop Rainald von Dassel had brought to Cologne from Milan after the latter city was conquered in 1164. Because of these relics, the cathedral became one of the most important places of pilgrimage in Europe. Its two massive towers have dominated the city’s skyline since their completion in 1880. At 157.38 metres, the northern tower is 7cm taller than the southern one.

Today the cathedral is Cologne’s second-tallest structure, surpassed only by the telecommunications tower. The cathedral covers almost 8,000 square metres of floor space and can hold more than 20,000 people. Due to the building’s impressive Gothic architecture, the shrine of the Three Wise Men, the outstanding stained-glass windows and the many other important works of art, UNESCO declared Cologne Cathedral a World Heritage Site in 1996.`


//  Geting element from the DOM
let countryBox = document.querySelectorAll('.country-box'),
 travelInfo = document.querySelector('.travel-info'),
 travelInfoContainer = document.createElement('div'),
 travelInfoClose = document.createElement('div'),
 travelInfoImage = document.createElement('img'),
 travelInfoText = document.createElement('p'),
 starsContainer = document.createElement('div');

travelInfoContainer.appendChild(travelInfoImage);
travelInfoContainer.appendChild(travelInfoText);
travelInfo.appendChild(travelInfoContainer);
travelInfo.appendChild(travelInfoClose);
travelInfo.appendChild(starsContainer);


// adding eventListener for each country box
countryBox.forEach(box =>

{
  box.addEventListener('click', function(e){
        
        // Choosing an Image
        let targetElement = null;
        if(e.target.classList.contains('country-box__img'))
            targetElement = e.target;
        else
            // Choosing an Image if other selected
            targetElement = e.target.parentElement.firstElementChild;

        // Setting the src attrebute to the new img tag
         travelInfoImage.setAttribute('src', targetElement.getAttribute('src'));

        // Attaching styling classes to elements
        travelInfo.classList.add('displayed');
        travelInfoContainer.classList.add('travelInfocontainer');
        travelInfoImage.classList.add('travel-info__img');
        travelInfoText.classList.add('travel-info__text');
        starsContainer.classList.add('stars-container');
        travelInfoClose.classList.add('travel-info__close');
        
        // Rating the Website
        let stars = prompt('How do rate the webiste?');
        if( stars > 5) stars = 5;
        else if( stars < 1) stars = 1; 

        for(let i = 0; i < stars; i++){
            // create stars imgs
            let rateStar = document.createElement('img');
            rateStar.classList.add('rate-star');
            rateStar.setAttribute('src', 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/star.png');
            starsContainer.appendChild(rateStar);
        }

               
        // Geting the title
        let countryName = targetElement.nextElementSibling;
        // showing the Country img and some info based on the title
        if(countryName.textContent.toLocaleLowerCase() === 'neu'){
            travelInfoText.textContent = '';
            travelInfoText.appendChild(document.createTextNode(neu));
        } else if(countryName.textContent.toLocaleLowerCase() === 'eiffel'){
            travelInfoText.textContent = '';
            travelInfoText.appendChild(document.createTextNode(eiffel));
        } else if(countryName.textContent.toLocaleLowerCase() === 'venice'){
            travelInfoText.textContent = '';
            travelInfoText.appendChild(document.createTextNode(venice));
        } else if(countryName.textContent.toLocaleLowerCase() === 'tokyo'){
            travelInfoText.textContent = '';
            travelInfoText.appendChild(document.createTextNode(tokyo));
        } else{
            travelInfoText.textContent = '';
            travelInfoText.appendChild(document.createTextNode(cologne_cathedral));
        }

    });

})


// Closing the palce info popup handler
document.addEventListener('click', function(e){
    if(e.target.classList.contains('travel-info__close')){
        // close the popup window
        travelInfo.classList.remove('displayed');
        // remove all stars
        starsContainer.innerHTML = '';
    }
});