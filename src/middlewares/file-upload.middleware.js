import multer from 'multer';

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/files/');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    const name =
      Date.now() + '-' + file.originalname;
      console.log(name);
    cb(null, name);
  },
});

export const uploadFile = multer({
  storage: storageConfig,
});