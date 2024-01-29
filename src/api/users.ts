import request from "@/utils/requests"





//定义接受数据类型
type LoginInfo = {
    phone: string;
    code?: string;
    password: string;

}


//定义返回数据类型
type LoginResult = {

    success: boolean
    state: number
    message: string
    content: string

}


//用户登录请求{ phone:'1111',password: '2222'}

export const login = (logininfo: LoginInfo) => {

    return request({
        method: "POST",
        url: "/user/login",
        data: phone = ${ logininfo.phone } & password=${ logininfo.password },


    }) 
}

//正式发送登录请求

login(form).then((res) => {

    console.log(res.data.content)
})

/* 
  要求请求类型  application/x-wwww.form-urlencoded
             需要把数据拼接为: 属性1=值&属性2=值2
  要求请求类型  application/json
            只需要直接传递对象 : data ：logininfo



*/
