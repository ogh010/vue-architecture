import post from '@/utils/axiosTemplate'

class ApiService{
    test(reqData){
        return post('/api/test',reqData)
    }
}
export default new ApiService()