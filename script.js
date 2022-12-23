const BASE_URL = "https://api.ebird.org/v2/data/obs";
const apiToken = "btd3ln0lurq0";

// input search box
let searchBtn = document.getElementById("searchbtn");
let region;
searchBtn.addEventListener('click', () => {
  region = document.getElementById('regInp').value;
  console.log(region);
  getBirdRecords();
})

const getBirdRecords = async () => {
  const response = await fetch(`${BASE_URL}/${region}/recent`, {
    method: "GET",
    headers: {
      'X-eBirdApiToken': apiToken
    }
  })
  const records = await response.json();
  console.log(records);
  table(records);
}

const table = (records) => {
  let tableContent = "";

  records.map((record) => {
    tableContent += `<tr>
    <th scope="row">${record.subId}</th>
    <td>${record.speciesCode}</td>
    <td>${record.comName}</td>
    <td>${record.sciName}</td>
    <td>${record.howMany}</td>
    <td><button type="button" class="btn btn-danger" 
    onclick="deleteHandler(${record.subId},'${record.comName}')">
    <img src="./images/pen-fill.svg" style="width:1rem" alt="delete_icon">
    </button>
    <button type="button" class="btn btn-warning" 
    onclick="editHandler(${record.subId})">
    <img src="./images/trash.svg" style="width:1rem"  alt="edit icon" />
    </button></td>
  </tr>`;
  });

  document.getElementById("tbody").innerHTML = tableContent;
};

// editHandler
const editHandler = (subId) =>{
  const howMuch = prompt("Enter the count of the bird");
  if(howMuch ==="" || howMuch === null){
    alert("Count is mandatory");
    return;
  } 
}

