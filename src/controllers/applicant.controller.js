import app from "../../index.js";
import ApplicantModel from "../models/applicant.model.js";
import jobModel from "../models/jobs.model.js";

class ApplicantController{
    add(req,res,next){
        const {name,email,contact,resume}=req.body;
        const jobid=req.params.jobid;
        console.log(jobid);
        const ResumeFile=req.file.filename;
        ApplicantModel.add(name,email,contact,ResumeFile,jobid);
        var jobs=jobModel.getAll();
        res.render('jobs-list',{jobs:jobs});
    }
    get(req,res,next){
        const jobid=req.params.jobid;
        console.log(jobid);
         var applicants=ApplicantModel.getApplicants(jobid);
         console.log(applicants);
        // var jobs=jobModel.getAll();
        // console.log(jobs);
        res.render('applicants-view',{applicants:applicants});
    }
}
export default ApplicantController;