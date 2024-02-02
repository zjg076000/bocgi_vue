import request from "@/utils/request"

export const getall = () => {
    return request({
        method: 'GET',
        url: "/api/softversion",

    })

}
