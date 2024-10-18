/*importing modules*/
import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path'
import jobsController from './src/controllers/jobs.controller.js'
import recruiterController from './src/controllers/recruiter.controller.js';
import ApplicantController from './src/controllers/applicant.controller.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';

const app = express();
app.use(
  session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.static('public'));
// Add this middleware to handle serving CSS files with the correct content type
app.get('/css/index.css', function(req, res) {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public', 'css', 'index.css'));
});


/*jobs controller settings*/
const jobscontroller= new jobsController();
const recruitercontrol=new recruiterController();
const applicantcontroller=new ApplicantController();

/* ejs settings */
app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views', path.join(path.resolve(),'src','views'));
app.get('/',jobscontroller.getLandingPage);
app.post('/register',recruitercontrol.postRegistered)
app.get('/login',recruitercontrol.getLogin);
app.post('/login',recruitercontrol.postLogin);
app.get('/jobs-list',recruitercontrol.getjoblist);
app.get('/jobs/:jobid',jobscontroller.getJobView);
app.get('/new-jobView',auth,jobscontroller.addJob);
app.post('/addJob',auth,jobscontroller.postaddJob)
app.post('/application/:jobid',uploadFile.single('resume'),applicantcontroller.add);
app.get('/applicants/:jobid',auth,applicantcontroller.get);
app.get('/job-update/:jobid',auth,jobscontroller.update);
app.get('/download/:filename', (req, res) => {
    const fileName = req.params.filename;
    const uploadDirectory = path.resolve('public/files/')
    const filePath = path.join(uploadDirectory, fileName); // Path to the uploaded file
  
    res.download(filePath, fileName, (err) => {
      if (err) {
        // Handle error, such as file not found
        res.status(404).send('File not found');
      }
    });
  });
app.post('/job-update/:jobid',auth,jobscontroller.updateJob);
app.get('/job-delete/:jobid',auth,jobscontroller.delete);
app.get('/logout',auth,recruitercontrol.logout);

export default app;
