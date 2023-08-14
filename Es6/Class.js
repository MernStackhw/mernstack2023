/*
Class in ES6 is a special type of function with all the features 
OOPS has,
*/

class Vaccination{

    constructor(name,price){
        this.Vaccination=name;
        this.VaccinationPrice=price;
        this.ShcheduleDate = new Date();
    }

    getVaccincationDetails=function(availability){

        return{
            Name: this.Vaccination,
            Price:this.price,
            Available: availability?
            "Yes":"No"
        }
    }

    getSchedule=()=>{
        return{
            name:this.Vaccination,
            Price:this.VaccinationPrice,
            Schdeule:
            this.ShcheduleDate.toLocaleString()
        }
    }

}

let vaccineSlot = new Vaccination("Pfizer",40);

console.log(vaccineSlot.getVaccincationDetails(true));
console.log(vaccineSlot.getSchedule());