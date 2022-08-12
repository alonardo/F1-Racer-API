let search = document.getElementById('search')
    search.addEventListener('click', (event) => searchF1(event))
    
function searchF1(event){
    event.stopPropagation();
    event.preventDefault();
    let year = document.getElementsByName('year')[0].value
    let round = document.getElementsByName('round')[0].value
    doAPICall(year, round)
}

async function doAPICall(year, round){
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
    console.log(response)
    
    response = response.data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
    let tbody=document.getElementById('table');
    for(racer of response){
        
            let tr=document.createElement('tr');
            tbody.appendChild(tr);
        
            td=document.createElement('td');
            td.innerText=racer['Driver']['givenName'];
            tr.appendChild(td);

            td=document.createElement('td');
            td.innerText=racer['Driver']['familyName'];
            tr.appendChild(td);
        
            td=document.createElement('td');
            td.innerText=racer['Driver']['dateOfBirth'];
            tr.appendChild(td);

            th=document.createElement('th');
            th.innerHTML=racer['position'];
            tr.appendChild(th);

            td=document.createElement('td');
            td.innerText=racer['wins'];
            tr.appendChild(td);

            td=document.createElement('td');
            td.innerText=racer['Driver']['nationality'];
            tr.appendChild(td);

            td=document.createElement('td');
            td.innerText=racer['Constructors'][0]['name'];
            tr.appendChild(td);
        }
}