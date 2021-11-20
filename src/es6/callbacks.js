const posts= [
    {title: 'post one', author: 'Henry'},
    {title: 'post two', author: 'Tom'},
]

export function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 1000);
}

export const createPost = (post, callback) =>{
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

createPost({title: 'post 3', author: 'anonymous'}, getPosts)
