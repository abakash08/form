//Creating objects and array to store input data
var obj = {name:"", age:"", dateofbirth:"",gender:""};
var arr = [];

function Form()
{
 //using DOM to get user input values
 const name = document.getElementById('fname').value;
 const age = document.getElementById('age').value;
 const dateofbirth = document.getElementById('dob').value;
 const gender = document.getElementById('gen').value;
  //validating the form
  if(name=="")
  {
      alert('Enter your name');
  }
  else if(age=="")
  {
      alert('Enter your age');
  }
  else if(dateofbirth=="")
  {
      alert('Select your DOB');
  }
   else if(gender=='----Select your Gender----')
  {
      alert('Select your gender');
  }
  
  else 
  {
  //cloning the created object so we can modify the object without affecting the original object
  const cloneobj = JSON.parse(JSON.stringify(obj));
  console.log(cloneobj);
  cloneobj.name = name;
  cloneobj.age = age;
  cloneobj.dateofbirth = dateofbirth;
  cloneobj.gender = gender;
  //pushing the cloned object to the created array
  arr.push(cloneobj);
 // querySelctrors return the first element(tBody and Table) that matches a specified CSS selector(s) in the document.
  const tBody = document.querySelector("tbody");
  const Table = document.querySelector("table");  
  //adding the input values to table body using Jquery
  tBody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${dateofbirth}</td>
                <td>${gender}</td>
                <td class="deleteBtn">&times;</td> 
                </tr>`;
    //using addEventListener to '&times' to delete the row           
    Table.addEventListener("click", onDeleteRow);
    function onDeleteRow(e) {
       if (!e.target.classList.contains("deleteBtn")) {
              return;
        }
    
            const btn = e.target;
            btn.closest("tr").remove();
        }
      
       
    }
   
}