// let cnt=1;
// var posts = [];
// var lastActivity=0;
// let error = "";
/*
//task to many promises
let updateLastUserActivityTime = ()=>{return new Promise((resolve,reject)=>{
        if(error!==""){
            reject(err);
            return;
        }
       setTimeout(()=>{
            // console.log("p1");
            
            resolve(lastActivity=new Date());
        },1000);
    });
}
    
    let createPost = ()=>{return new Promise((resolve,reject)=>{
        if(error!==""){
            reject(err);
            return;
        }
      
        let str = "post"+(cnt++); 
        // console.log("p2");
        
        resolve(posts.push({name : str}));
      
    });
}
let showLastActivity = ()=>{return new Promise((resolve, reject) => {
        setTimeout(()=>{        
        // console.log(posts);
        // console.log("Last Active : "+lastActivity);
        resolve(lastActivity);
        },1000);
    });
}
let deletePost = ()=>{return new Promise((resolve, reject) => {
    if(posts.length>0){
        console.log("deleted");
        // posts.pop();
        resolve(posts.pop());
    }else{
        reject("ERROR : NO POSTS TO DELETE");
    }
});
}
Promise.all([createPost().resolve,updateLastUserActivityTime()]).catch(err=>{return err;}).then(()=>showLastActivity()).then(msg=>console.log(msg))
.then(()=>deletePost()).catch(err=>{return err;}).then(msg=>console.log(msg));
*/

//task 13 convert above to async await

let lastActivity;
const posts = [];

async function posting() {
  const updateLastUserActivityTime = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        lastActivity = new Date();
        resolve();
      }, 1000);
    });
  };

  const createPost = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push({ name: "newPost" });
        resolve();
      }, 1000);
    });
  };

  const deletePost = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.pop();
        resolve();
      }, 1000);
    });
  };

  const showLastActivity = () => {
    return Promise.resolve(lastActivity);
  };

  await Promise.all([updateLastUserActivityTime(), createPost()]);

  console.log("created post at :");
  console.log(await showLastActivity());

  await Promise.all([updateLastUserActivityTime(), deletePost()]);

  console.log("deleted post at :");
  console.log(await showLastActivity());
}

posting();
