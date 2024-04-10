import recruiterModel from "../models/recruiter.model.js";
import jobModel from "../models/jobs.model.js";

class recruiterController{
    postRegistered(req,res,next){
        const{name,email,password}=req.body;
        if(recruiterModel.add(name,email,password)){
        //res.redirect('/login');
        res.render('login', { errorMessage: null });
    }
    }
    getLogin(req,res,next){
        res.render('login', { errorMessage: null });
    }
    postLogin(req,res,next){
        const{email,password}=req.body;
        const user=recruiterModel.login(email,password);
        if(!user){
            return res.render('login', {
                errorMessage: 'Invalid Credentials',
              });
        }
        req.session.userEmail = email;
        var jobs = jobModel.getAll();
       
        res.render('jobs-list', {
          jobs,
          userEmail: req.session.userEmail,
        });



    }
    getjoblist(req,res,next){
        var jobs = jobModel.getAll();
        res.render('jobs-list', {
          jobs
        });
    }
    logout(req,res,next){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect('/login')
            }
        })
    }
}

export default recruiterController;