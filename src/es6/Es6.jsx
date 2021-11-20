import React from 'react'
const users= [
    {name: 'henry', pw: '123456', nickname: 'apple' },
    {name: 'tom', pw: '123456', nickname: 'orange'}
]
const Es6 = () => {
    const handle = (name,pw) =>{
        return new Promise((resolve, reject)=>{
            const user = users.filter(user=>user.name === name)[0]
            setTimeout(() => {
                if (user ) {
                    if (user.pw === pw) {
                        
                            resolve(user.nickname)
                        
                    } else {
                        reject(new Error('Error: wrong pw'))
                    }
                } else {
                    reject(new Error('Error: invalid user'))
                }
            }, 2000);

        })
    }
    handle('henry','123456').then(
        data=>console.log(data)
    ).catch(err =>{
        console.log(err)
    })

    return(
        <div>
        </div>
    )
}

export default Es6
