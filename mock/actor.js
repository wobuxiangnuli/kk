let data = [];
for(var i = 0; i <= 20; i++) {
    data[i] = {
        'actor_name': '演员名字'+ (i+1),
        'actor_avatar': 'https://bkimg.cdn.bcebos.com/smart/cf1b9d16fdfaaf51f3deb6c4f90283eef01f3a29cc08-bkimg-process,v_1,rw_1,rh_1,maxl_216,pad_1,color_ffffff'
    };
}

export default {
    'get|/mock/movie/actors': option => {
        console.log(option);
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
    'get|/mock/movie/actors/name': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
    'post|/mock/movie/actors/add': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
    'post|/mock/movie/actor/del': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
    'get|/mock/movie/actors/movieid': option => {
        return {
            code: 200,
            message: 'success',
            data: data
        };
    },
}