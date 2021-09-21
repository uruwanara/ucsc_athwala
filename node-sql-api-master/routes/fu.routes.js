const multer = require('multer');

module.exports = fuRoutes => {
    var router = require("express").Router();


    const storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, 'public/SamplePath/')
        },
        filename: (req, file, callBack) => {
            let filename = file.originalname.split('.');
            let extentioin = filename[filename.length-1];
            console.log("api 2" );
            callBack(null, `${req.params.name}.${extentioin}`)
        }
    })

    const upload = multer({ storage: storage });



    router.post('/upload/:name',  upload.single('file'),(req, res, next) => {
        const file = req.file;
        console.log("name is " + req.params.name);
        if (!file) {
            const error = new Error('No File')
            error.httpStatusCode = 400
            return next(error)
        }

        res.send({status: 'ok'});

    });


    fuRoutes.use('/api/fus', router);

};