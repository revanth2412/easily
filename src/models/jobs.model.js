

export default class jobModel{
    constructor(jobid,jobcategory,joblocation,salary,applyby,skills,applicants,companyname,jobdesignation){
        this.jobid=jobid;
        this.jobcategory=jobcategory;
        this.joblocation=joblocation;
        this.salary=salary;
        this.applyby=applyby;
        this.skills=skills;
        this.applicants=applicants;
        this.companyname=companyname;
        this.jobdesignation=jobdesignation
    }

    static getAll(){
        return jobs;
    }
    static getById(id){
         //console.log(jobs.find((j)=> j.id == id));
        return (jobs.find((j)=> j.jobid == id))
    }
    static updateJob(updateJob,jobid){
        const index=jobs.findIndex((j)=>j.jobid == jobid)
        updateJob.jobid=jobid;
        jobs[index]=updateJob;
        console.log(jobs);
    }
    static delete(jobid){
        console.log(jobid);
        const index=jobs.findIndex((j)=>j.jobid == jobid)
        jobs.splice(index,1);
    }
    static postaddJob(jobcategory,joblocation,salary,applyby,skills,applicants,companyname,jobdesignation){
        let newJob= new jobModel(
            jobs.length+1,jobcategory,joblocation,salary,applyby,skills,applicants,companyname,jobdesignation
        )
        jobs.push(newJob)
    }
}
var jobs=[new jobModel(
    1,
    'Tech',
    'hyderabad',
    '10-12lpa',
    '12-12-23',
    ['html','css','javascript','nodejs','react'],
    2,
    'Bosch',
    'SDE'
),
new jobModel(
    2,
    'Non Tech',
    'Bangalore',
    '15-20lpa',
    '15-03-24',
    ['embedded','c','Automotive','CAN','CANoe'],
    2,
    'IBM',
    'Full stack dev'
),
new jobModel(
    3,
    'Tech',
    'Hyderabad',
    '2-4lpa',
    '24-03-24',
    ['Dockers','kubernetes','cloud','AWS',],
    25,
    'Infosys',
    'Cloud Developer'
),
new jobModel(
    4,
    'Non Tech',
    'chennai',
    '7-10lpa',
    '05-12-23',
    ['java','J2EE','Springboot','AWS',],
    32,
    'zoho',
    'java Developer'
),
new jobModel(
    5,
    'Tech',
    'bangalore',
    '11-15lpa',
    '05-12-23',
    ['Testing','Manual Testing','selenium','pyton',],
    7,
    'Bosch',
    'Automation Tester'
)]

