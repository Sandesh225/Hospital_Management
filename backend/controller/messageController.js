import { Message } from './../models/messageSchema.js';
import { catchAsyncErrors } from './../middleWares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/errors.js';

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form",400))
  }

  try {
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(200).json({
      success: true,
      message: "Message Sent"
    });
  } catch (error) {
    next(error);
  }
})
