$(document).ready(function(){
    
    // $.getJSON('accdata.json',function(data){
    //     console.log(data);
    // });
    
    let accdata = [
        {
            "title": "Title 1",
            "body": "car traverse bataille corolles epongent. Jet main des sans lors eaux rien ruer. Chez cree sa dela me meme on he sont. Du cuir pois il oh voit bois. Parlaient dernieres signalant ne au direction fusillade he eperonnes. Jurons je virent un bondir oh me. Prime mur ifs seule quand domes cours jet cesse. "
        },
        {
            "title": "Title 2",
            "body": "acrifiez sentiment puissions signalant fer epluchant abondance lui. Art toi assister loquaces bon ailleurs des francine relevent. Le tu amour houle te leurs garni armes etait. Voyez le sa ornee image un enfin aides. Et centre or corons entier la tuiles il. Les les cependant neanmoins reveillez souvenirs demeurent. Posseder je trouvait detourne penetrer apercoit souvenir x"
        },
        {
            "title": "Title 3",
            "body": "Matin pieds je ecole ah tours en me epars. Levres courir car ses traits astres ennemi. Jet promenade distribua contemple vie souvenirs. On la la idees qu apres quand. Joyeuses fatalite dut peu retablir fervente dressait. Va ennemis faisait empeche demeure ah ii. Paix tire jet joie des suis pays voie. Ifs loquaces forcenee songeant propager mes pressent. "
        },
        {
            "title": "Title 4",
            "body": "He agit yeux tout ma. Avons par fit mains bon ton abord.Aimons ii etroit de diable te rendre on offrir tirant.       Attachent descendit entourage chambrees polygones va ah.Musiqu        es le au creerent soixante on campagne. Raison le jambes venait je au.        Empecher lampions on en il ne embrassa. "
        }
    ]
    let card;
    count = 0;
    accdata.forEach(x =>{
        
        count++;
        card = '<div class="card">'+
                        '<div class="card-header" role="tab" id="sh'+count+'">'+
                            '<h5 class="mb-0">'+
                                '<a data-toggle="collapse" data-parent="#theaccordian" href="#sc'+count+'" aria-expanded="true" aria-controls="sc'+count+'">'+
                        x.title +
                        '</a>'+
                            '</h5>'+
                        '</div>'+
                        '<div id="sc'+count+'" class="collapse in" role="tabpanel" aria-labelledby="sh'+count+'">'+
                            '<div class="card-block">'+
                                x.body +
                            '</div>'+
                        '</div>'+
                    '</div>';
        $('#theaccordian').append(card);

    });
});