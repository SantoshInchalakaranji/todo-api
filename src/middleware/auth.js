
function authenticate(apiKey) {
    return function(req, res, next) {
      const apiKeyHeader = req.headers['api-key'];
  
      // Check if API key is provided
      if (!apiKeyHeader || apiKeyHeader !== apiKey) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Proceed to the next middleware if authentication succeeds
      next();
    };
  }
  
  module.exports = authenticate;
  