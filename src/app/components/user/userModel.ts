export class UserModel{

    id:number;
    first_name:string;
    middle_name:string;
    last_name:string ;
    email:string;
    phone:number;

    constructor(id:number,fName:string,mName:string,lName:string,email:string,phone:number){

        this.id=id;
        this.first_name=fName;
        this.middle_name=mName;
        this.last_name=lName;
        this.email=email;
        this.phone=phone

    }
}