// Task 15
const securityMiddleware = (req, res, next) => {
    // Implement security measures here
    console.log('Security middleware');
    next();
  };
  
  module.exports = {
    securityMiddleware,
  };
  