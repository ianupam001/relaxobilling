module.exports = (req, res, next) => {
    const token = req.headers['token'];
    // Just log it for now
    console.log('Incoming token:', token);
    next();
};
    