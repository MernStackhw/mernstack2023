//Restful apis use below specifications

// it uses http method 
// definitive verbs or http method 

// get put/ post / patch / delete

// stateless


// http verbs 

// Create - Post 
// Update - Put and  Patch
//Read - Get
// Delete - Delete

//Put and Patch

let User = {
    Name:"Van",
    Age:65,
    Address:"Somewhere in USA",
    UserId:"12344"
}

//post is basically when you create a completely new object:

let UserUpdated = {
    Name: "Anant",
    Age:23,
    Address:"Somewhere in USA",
    UserId:"88786"
}

//patch is when we need to create object with data that needs to be changed (partial replacement)

let UserUpdatedPatch = {
    Name:"Anant Singh",
    Age:23
}