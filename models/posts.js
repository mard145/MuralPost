module.exports = {

posts: [
        {
         id:'qualquer',
         title:'teste',
         description:'teste des'
        },
       ],
       getAll(){
           return this.posts
       },
       newPost(title,description){
        this.posts.push({id:generateID(),title,description})
       }

       
}

function generateID(){
    return Math.random().toString(36).substr(2,9)
}

function deletePosts(){

}