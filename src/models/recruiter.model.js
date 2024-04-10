class recruiterModel{
    constructor(id,name,email,password){
        this.id=id,
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static add(name,email,password){
        const newRecruiter=new recruiterModel(
            recruiters.length+1,
            name,
            email,
            password
        )
        recruiters.push(newRecruiter);
        return true;
    }
    static login(email,password){
        // console.log(email,password);
        const result=recruiters.find(
            (recruiter)=>
                recruiter.email == email &&
                recruiter.password == password 
        );
        //console.log(result);
        return result;
    }
}
var recruiters=[]
export default recruiterModel;