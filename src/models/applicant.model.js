export default class ApplicantModel{
    constructor(id,name,email,contact,resume,jobid){
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
        this.jobid=jobid;
    }
    static add(name,email,contact,resume,jobid){
        let newApplicant= new  ApplicantModel(
            applicants.length+1,
            name,
            email,
            contact,
            resume,
            jobid
        )
        applicants.push(newApplicant);
        //console.log(applicants);
    }
    static getApplicants(jobid){
        const applicant=applicants.filter((a)=> a.jobid == jobid);
        //console.log(applicant);
        return applicant;
    }

}

var applicants=[new ApplicantModel(1,
    'revanth',
    'revanth@gmail.com',
     8074538989,
     'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
     1)];