"use strict";
class AddressBook{
    constructor(){
     this.contacts = [
        new Contact("Kwame'","kwame@gmail.com","313-867-5309","classmate"),
        new Contact("Grant","grant@gmail.com","248-867-5309","classmate"),
        new Contact("Bobby","bobbydigital.com","734-867-5309","classmate")
        ];
        }
    //   add method  
    add(info) {
        const addedContact = new Contact(info.name,info.email,info.phone,info.relation);
        this.contacts.push(addedContact);
    }
    //  delete method 
    deleteAt(index){
        this.contacts.splice(index,1);
    
    }
    // print method
    print (){
        console.log(this.contacts);
      }
    }
    
    class Contact{
        constructor (name,email,phone,relation){
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation;
        }
    }
 
    const myAddressBook = new AddressBook() 

// while loop
while(true){
    let userInput = prompt("Would you like to add, delete,print, or quit?");
    let userInputLowerCase = userInput.toLowerCase();
    if ( userInputLowerCase === "add"){
            const info = {
                name: prompt("Name?"),
                email: prompt("Email?"),
                phone: prompt("Phone?"),
                relation: prompt("Relation?")
            }
            console.log(info);
            myAddressBook.add(info);
            console.log(myAddressBook);
 
            console.log("selected add");
        
        // else..if loop
        } else if (userInputLowerCase === "delete"){
            const index = prompt("Select the number of the index you would like to delete.")
                myAddressBook.deleteAt(index);
                console.log(myAddressBook);
         
        //  else..if loop
      
             } else if (userInputLowerCase === "print"){ 
                for (let i = 0; i < myAddressBook.contacts.length; i++){
                    console.log(myAddressBook.contacts[i]); 
                }
 
        //  else..if loop
                 }  else if (userInputLowerCase ==="quit"){
                    console.log("see ya next time.");
                      break;

        //  else loop
                    } else {
                        console.log("wrong Input");
                        continue; 
                    }
}
