/*Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
The function should log the message to the console after the specified delay time.*/
setTimeout(function(){
    console.log('I love codding');
},5000);
/*You have an array of user IDs and a function getUserData(id) that returns a Promise with
 user data when given a user ID. Write an asynchronous function that fetches and logs the data 
 for each user ID one by one, in sequence.*/


function getUserData(id,) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, userName: `user ${userName}` }), 3000);
    });
}
async function fetchUserData(userIds) {
    for (let id of userIds) {
        let userData = await getUserData(id,userName);
        console.log(userData);
    }
}
fetchUserData([1,2,3,4,5,6]);

/*You have an asynchronous function performTask() that returns a Promise. The Promise
 resolves if the task is successful and rejects if there's an error. Write a function
  that calls performTask() and logs a custom success message if the task is successful,
   and a custom error message if there's an error.*/



const task = false;

const performTask = new Promise((resolve,reject)=>{
    if(taskComplete){
        resolve('task done');
    }
    else{
        reject('try task again')
    }
});
performTask.then((response)=>{
    console.log({response});
    console.log('will add task to achievements');
})
.catch((error)=>{
    console.log({error});
    console.log('will continue working on task');
})
.finally(()=>{
    console.log('I will graduate');

});


async function handleTask() {
    try {
        await performTask;   
    }
    catch{
        console.log('I will complete all tasks soon');
    }
}
handleTask();

/*Question*/

function unstableTask(taskName, failureProbability) {
    if (failureProbability >= 0 && failureProbability <= 1) {
        if (failureProbability < 0.5) {
            return `Task '${taskName}' succeeded.`;
        } else {
            return `Task '${taskName}' failed.`;
        }
    } else {
        return "Failure probability must be between 0 and 1.";
    }
}
const taskName = "Perform Data Analysis";
const failureProb = 0.3;
const result = unstableTaskDeterministic("Watching", 0.8);
console.log(result);