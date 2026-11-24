// Creating an error-handling middleware


const errHandler = async (err, req, res, next) => {
    const statuscode = err.statuscode || 500;

    return res.status(statuscode).json({
        success: false,
        message: err.message || "Internal server error"
    });
}


export default errHandler;