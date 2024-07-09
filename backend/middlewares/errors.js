class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}



export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

//Handling MongoDB Duplicate Key Error
// Object.keys(err.keyValue): This retrieves the field that caused the duplicate key error.

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`,
      err = new ErrorHandler(message, 400);


  }



  //This handles errors related to invalid JSON Web Tokens (JWTs).
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again!`;
    err = new ErrorHandler(message, 400);
  }


//This handles errors related to expired JSON Web Tokens (JWTs).

  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is expired, Try again!`;
    err = new ErrorHandler(message, 400);
  }

  // This handles Mongoose Cast errors, which occur when a value cannot be cast to the expected data type.
//err.path: This retrieves the path (field) that caused the cast error.

  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`,
      err = new ErrorHandler(message, 400);
  }

//Object.values(err.errors): If err.errors exists, this converts the values of the errors object (which are the individual field error objects) into an array.

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    // message: err.message,
    message: errorMessage,
  });
};

export default ErrorHandler;