import path from 'path'
import jobModel from '../models/jobs.model.js';
import ApplicantModel from '../models/applicant.model.js';
class jobsController{
    getLandingPage(req,res,next){
        const getregister=true;
         res.render('landing-page',{getregister:getregister});
    }
    getJobView(req,res,next){
        const id=req.params.jobid;
        //console.log(id);
        const jobFound=jobModel.getById(id);
        //console.log(jobFound);
        const applicants=ApplicantModel.getApplicants(id);
        res.render('job-view',{jobs:jobFound,
            applicants:applicants });
    }
    update(req,res,next){
        const id=req.params.jobid;
        const jobFound=jobModel.getById(id);
        if(jobFound){
            res.render('update-job',{job:jobFound})
        }
        else{
            res.status(401).send('Job not found');
        }
    }
    updateJob(req,res,next){
        const id=req.params.jobid;
        jobModel.updateJob(req.body,id);
        console.log(req.body);
        var jobs=jobModel.getAll();
        res.render('jobs-list',{jobs:jobs});
    }
    delete(req,res,next){
        const jobid=req.params.jobid;
        const jobtFound = jobModel.getById(jobid);
        if (!jobtFound) {
          return res
            .status(401)
            .send('job not found');
        }
        jobModel.delete(jobid);
        var jobs=jobModel.getAll();
        res.render('jobs-list',{jobs:jobs});
    }
    addJob(req,res,next){
        res.render('addJob');
    }
    postaddJob(req,res,next){
        const{jobcategory,joblocation,salary,applyby,skills,applicants,companyname,jobdesignation}=req.body;
        jobModel.postaddJob(jobcategory,joblocation,salary,applyby,skills,applicants,companyname,jobdesignation);
        var jobs=jobModel.getAll();
        res.render('jobs-list',{jobs:jobs});
    }
}

export default jobsController;