/*var stdin = process.openStdin();
var c = 1
var x,y,msg
stdin.addListener("data", function(d) {
    if(c%2==0){
        x = d.toString().trim()
    }else{
        y = d.toString().trim()
    }

    if(c%2==0){
      msg = parseInt(x) < parseInt(y) ? "El numero mayor es "+y : "El numero mayor es "+x   
      console.log(msg)
    }
        c += 1
  });*/

  /*var stdin = process.openStdin();
  var c = 1
  var x = [],y = 0,msg
  stdin.addListener("data", function(d) {
        x.push(parseInt(d.toString().trim()))
        x.forEach((e)=>{
            y += e
        })
        console.log(y)
        y = 0
    });*/

   /* var Album = function(band,album){
        return{
            band: band,
            album: album,
            plays: 0
        }
    };

    var MusicBox = function(){
        x = [];
        c = 0;
        return{
        addAlbum: (album)=>{return x.push(album)},
        play: (album)=>{album.plays += 1},
        favoriteAlbum: ()=>{
            var fav = x[0]
            for(let i = 1; i <= x.size; i++){
                if(fav.plays < x[i].plays){
                    fav = x[i]
                    }
                }
                return fav;
            },
        getAlbums: ()=>{
            x.forEach((e)=>{
                console.log(e.album,e.band,e.plays)
            })
        }
        }
    }
var a1 = Album('XX','YY'), a2 = Album('AA','BB')
var music = MusicBox()
music.addAlbum(a1)
music.addAlbum(a2)
music.play(a1)
music.getAlbums()
console.log(music.favoriteAlbum())*/
/*const utils = require( './utils.js' );
var x = function( size )
{
   if ( !utils.isPositiveInteger( size ) )
    {
        throw new TypeError( "Input must be a positive integer" );
    }

    console.time('optimal');
    console.log();
    console.log( "Starting for optimal computation where size = " + size );
    let sieve = utils.generateArraySeq( 2, size );

    let prime = 2;
    while ( prime )
    {
        // mark multiples
        for ( let i = 0; i < sieve.length; i += prime )
        {
            if ( sieve[i] !== prime )
            {
                sieve[i] = -1;
            }
        }

        let old_prime = prime;
        // find next prime number
        for ( let i = 0; i < sieve.length; i++ )
        {
            if ( ( sieve[i] !== -1 ) && ( sieve[i] > prime ) )
            {
                prime = sieve[i];
                break;
            }
        }

        if ( old_prime === prime )
        {
            break;
        }
    }
    console.timeEnd('optimal');
    // remove marked elements from the array
    return sieve.filter( 
        function( element )
        {
            return element !== -1;
        } );
} // compute
x(10)*/

var stdin = process.openStdin();
var contador = 1
stdin.addListener("data", function(d) {
    var dx = parseInt(d)    
    if(typeof dx === 'number'){
            var i = 1
            var primes = []
            while(i <= dx){
             if(dx%i == 0){
                contador += 1
                primes.push(i)
                console.log(primes)
             }
             i += 1   
            }
            var msg = primes.length == 2 ? "Primos son : "+primes[0]+" y "+primes[1] : dx+" no es primo"
            console.log(msg)
            contador = 1
        }else{
            console.log("input invalid")
            contador = 1
        }
  });

