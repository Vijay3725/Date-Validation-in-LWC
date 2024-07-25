import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {

    startDate = '';
    endDate = '';
    error;

    startDateHandler(event){
        this.startDate = event.target.value;
    }

    endDateHandler(event){
        this.endDate = event.target.value;
    }

    handleClick(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log("Date is valid");
        }
        else{
            this.error = "End date must always be greater than start date";
        }
        this.template.querySelectorAll('[data-id="myInput"]').forEach(input => {
            input.value = '';
        });
    }

    validateDate(startDate, endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime();
    }
}