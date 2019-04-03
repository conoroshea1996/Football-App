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

    console.log(element.position , element.points);
   });
  });
  
  

 
  
});

