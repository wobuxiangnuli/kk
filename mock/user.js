let data = {
    "token": "admin-token",
    "user": {
        "nickname": "admin"
    }
};

export default {
    'post|/mock/user/login': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
    'get|/mock/user/info': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    }
}