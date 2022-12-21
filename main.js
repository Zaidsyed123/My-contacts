// My Contacts 
let contacts = [ 
  { name: 'John Doe', email: 'jdoe@gmail.com', phone: '780-123-4567' },
  { name: 'Jane Doe', email: 'janedoe@gmail.com', phone: '780-234-5678'},
  { name: 'Jennie Doe', email: 'jenniedoe@gmail.com', phone: '780-345-6789'},
  { name: 'Sue Smith', email: 'suesmith@gmail.com', phone: '780-456-7890'},
  { name: 'Sally Smith', email: 'sallysmith@gmail.com', phone: '780-567-8901'},
  {name: 'Johnny Doe', email: 'jdoe@gmail.com', phone: '780-678-9012'},
];
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  if (selection === "all") {
    console.log("All Contacts");
    displayAllContacts();
  } else if (selection === "search") {
    console.log("Search For Contacts");
    SearchContacts();
  } else if (selection === "edit") {
    console.log("Edit Contacts");
    EditContacts();
  } else if (selection === "create") {
    console.log("Create New Contacts");
    CreateContacts();
  } else if (selection === "remove") {
    console.log("Remove Contacts");
    RemoveContacts();
  }
};

function displayAllContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += `<h3>${i}: ${contacts[i].name} </h3>`;
    outputStr += `<p> ${contacts[i].email} </p>`;
    outputStr += `<p> ${contacts[i].phone} </p>`;
  }
  document.getElementById("result").innerHTML = outputStr;
};

function SearchContacts() {
  let title = prompt("Please enter the contact name you're looking for: ");
  let index = linearSearch(contacts.name, title);
  if (index === -1) {
    alert("This contact is not found");
  } else {
    alert ("This contact is found ");
  }
};
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
  }
}
  return -1
};

function EditContacts() {

};

function CreateContacts() {
  let newContact = prompt("Please enter you new contact name:");
  let newEmail = prompt("Please enter you new contact email:");
  let newPhone = prompt("Please enter you new contact phone:");
  
  contacts.push({
    name: newContact,
    email: newEmail,
    phone: newPhone
  });
};
   
function RemoveContacts() {
  let index = +prompt("Enter the contact number you want removed:");
  contacts.splice(index, 1);
};