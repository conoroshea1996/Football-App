cards.innerHTML = `
<article class="card">
    <header class="card__title">
        <img src="${element.team.crestUrl}">
    </header>
    <section class="card__table">
      <h5>Stats this Season 18/19</h5>
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
</article>
`