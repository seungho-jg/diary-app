'use server';

export const handleLogin = async (prevState: any, formData : FormData) => {
    console.log(formData.get("email"))
    await new Promise((resolve) =>{
        setTimeout(resolve, 5000)
        console.log('logined!')
    })
    return {
        error: ["wrong password"]
    }
  }