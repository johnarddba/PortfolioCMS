exports.success = (res, data, message = "Success") => {
    return res.status(200).json({
        success: true,
        message,
        count: Array.isArray(data) ? data.length : undefined,
        data
    });
};

exports.error = (res, status = 500, message = "Server Error") => {
    return res.status(status).json({
        success: false,
        message
    });
};