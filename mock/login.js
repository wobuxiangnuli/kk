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
    }
}