setTimeout(function(){
    console.log('I love codding');
},5000);

function getUserData(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, userName: `user ${id}` }), 3000);
    });
}
async function fetchUserData(userIds) {
    for (let id of userIds) {
        let userData = await getUserData(id);
        console.log(userData);
    }
}
fetchUserData([1,2,3,4,5,6]);

async function handleTask() {
    try {
        await performTask();
        console.log("Task completed successfully!");
    } catch (error) {
        console.error("Error performing the task:", error.message);
    }
}
handleTask();

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