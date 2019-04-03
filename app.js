$(document).ready(function(){
  
  http://api.football-data.org/v1/competitions/355/leagueTable;

  $.ajax({
    headers: { 'X-Auth-Token': '7b15d00f6e894fb8acd633637905347f'},
    url: 'http://api.football-data.org/v2/competitions/PL/standings',
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource 

  var table = response.standings[0].table;    
   console.log(table);

   table.forEach(element => {
 
    var team = element.team.name;
    $('#team-card').append(`<article class="card">
    <header class="card__title">
        <img src="${element.team.crestUrl}">
    </header>
    <section class="card__table">
      <h5>${team}</h5>
     </section>
     <table>
       <tr>
         <th>Postion</th>
         <th>Pl</th>
         <th>GD</th>
         <th>Pts</th>
       </tr>
       <tr>
          <th>${element.position}</th>
          <th>23</th>
          <th>${element.goalDifference}</th>
          <th>${element.points}</th>
        </tr>
     </table>
</article>`);
    });
 console.log(element.position);

  });

});

