/* this is counting 1-9
for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
   } 
*/

/*
   for( i = 9 ; i > -1 ; i-- ){
    console.log(i);
   } 

   */
/*
  let film = [
    "Queen",
    "Spider",
    "Town",
    
   ];

   for (filmIndex= 0; filmIndex < film.length;
   filmIndex++) {
    console.log(film[filmIndex]);
   }
   film.push("lover", "lion")
   console.log(film)
*/
//Activity 1

let film = [
    "Queen",
    "Spider",
    "Town",
];

let filmwewant ="Spider";
   
   for (filmcheck = 0; filmcheck < film.length;
   filmcheck++) {
    console.log(film[filmcheck]);
   }

    const filmCheckk = () => {
    
    if(film[filmcheck] == filmwewant){
        console.log("yes it is");
    }
    else{
        console.log("no it not");
    }
   }


console.log(filmCheckk())
  /* film.push("lover", "lion")
   console.log(film)
   */
