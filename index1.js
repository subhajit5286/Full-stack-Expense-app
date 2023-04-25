var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
itemList.addEventListener('click', editItem);
//var i=localStorage.length;
var i=Math.floor(Math.random()*(1000-1))+1
console.log(i)
function addItem(e){
    e.preventDefault();
   // console.log('hi')
     i+=1; 
     //console.log(i)
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('item1').value;
    var newItem2 = document.getElementById('item2').value;
    let form = {};
	form.amount = newItem;
	form.description = newItem1;
    form.category=newItem2;
    //let f = JSON.stringify(form);
    axios.post('http://localhost:3000/admin/add-expense/',form)
        .then((res)=>{
        console.log(res)
        })
        .catch((err)=>{
        console.log(err)
        })
    location.reload()
    //showExpenses1();
  
}

const showExpenses1=()=>{
var cost=0;
  axios.get('http://localhost:3000/admin/expenses/')
  .then((response)=>{
    console.log(response.data.allExpenses)
    for(var i=0;i<response.data.allExpenses.length;i++){
      console.log(response.data.allExpenses[i].id)
      cost = cost + parseInt(response.data.allExpenses[i].amount);
      var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    li.id=response.data.allExpenses[i].id;
     // Add text node with input value
      li.appendChild(document.createTextNode(response.data.allExpenses[i].amount));
      li.appendChild(document.createTextNode(" "));
     // li.appendChild(document.createTextNode(' '));
      li.appendChild(document.createTextNode(response.data.allExpenses[i].description));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(response.data.allExpenses[i].category));
      var spanBtn=document.createElement('span');
      spanBtn.className = 'pull-right';
      li.appendChild(spanBtn);
      var editBtn = document.createElement('button');
      editBtn.className = 'btn btn-warning btn-sm float-right warning';
      editBtn.appendChild(document.createTextNode('Edit Expense'));
      // Create del button element
      var deleteBtn = document.createElement('button');
      // Add classes to del button
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      // Append text node
      deleteBtn.appendChild(document.createTextNode('Delete Expense'));
      // Append button to li
      spanBtn.appendChild(deleteBtn);
      spanBtn.appendChild(editBtn);
      // Append li to list
      itemList.appendChild(li);
      }
      
      var h2 = document.createElement('h2');
      h2.appendChild(document.createTextNode(`Total Expense = Rs. ${cost}`))
      itemList.appendChild(h2)
      console.log(cost)
    })
    .catch((err)=>{
    console.log(err)
  })

    }
    showExpenses1();
    function removeItem(e){
      e.preventDefault()
        if(e.target.classList.contains('delete')){
          if(confirm('Are You Sure?')){
            var li = e.target.parentElement.parentElement;
            var idz=li.id;
            console.log(li)
            itemList.removeChild(li);
            axios.post('http://localhost:3000/admin/delete-expense/'+idz)
            .then((res)=>{
                console.log(res)
              })
            .catch((err)=>{
                 console.log(err)
            })
      
            //console.log(JSON.parse(f1));
          }
        }
        //location.reload()
        //showExpenses1();
      }
      function editItem(e){
        e.preventDefault()
        if(e.target.classList.contains('warning')){
            var li=e.target.parentElement.parentElement;
            console.log(li)
            var idz=li.id;
            console.log(idz)
            var name1=document.getElementById(idz);
            console.log(name1.firstChild.textContent)
            document.getElementById('item').value=name1.firstChild.textContent;
            document.getElementById('item1').value=name1.firstChild.nextSibling.nextSibling.textContent;
            document.getElementById('item2').value=name1.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
            itemList.removeChild(li);
            //let f1 = window.localStorage.getItem(idz);
            axios.post('http://localhost:3000/admin/edit-expense/'+idz)
            .then((res)=>{
                console.log(res)
              })
            .catch((err)=>{
                 console.log(err)
            })
        }
        //location.reload()
    
     }   
