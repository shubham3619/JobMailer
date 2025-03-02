import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Please upload only PDF files'), false);
  }
};

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024 // 5MB limit
  },
  fileFilter
});


