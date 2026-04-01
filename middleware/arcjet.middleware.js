import aj from "../config/arcject.js";

const arcjetMiddleware =  async (req,res,next) => {

    try {
        const decisions = await aj.protect(req, {requested: 1});

        if(decisions.isDenied()) {
             if (decisions.reason.isRateLimit()) return res.status(429).json({success: false, message: "Too many requests"});
             if (decisions.reason.isBot()) return res.status(403).json({success: false, message: "Bot detected"});

             return res.status(403).json({success: false, message: "Access denied"});
        }

        next();
    }catch (error) {
        console.log('Arcjet Middleware Error:', error.message || 'Unknown error'),
            next(error)
    }
}

export  default arcjetMiddleware;