// Example of running synchronous tasks in parallel

// Simulate CPU-intensive synchronous tasks
const processUserData = (id) => {
    const start = Date.now();
    // Simulate heavy computation
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i);
    }
    const end = Date.now();
    console.log(`processUserData(${id}) completed in ${end - start}ms`);
    return { id, name: `User ${id}`, processed: result };
};

const processUserPosts = (id) => {
    const start = Date.now();
    // Simulate heavy computation
    let result = 0;
    for (let i = 0; i < 8000000; i++) {
        result += Math.pow(i, 2);
    }
    const end = Date.now();
    console.log(`processUserPosts(${id}) completed in ${end - start}ms`);
    return { userId: id, posts: [`Post 1 by user ${id}`, `Post 2 by user ${id}`], processed: result };
};

const processUserSettings = (id) => {
    const start = Date.now();
    // Simulate heavy computation
    let result = 0;
    for (let i = 0; i < 5000000; i++) {
        result += Math.sin(i);
    }
    const end = Date.now();
    console.log(`processUserSettings(${id}) completed in ${end - start}ms`);
    return { userId: id, theme: 'dark', notifications: true, processed: result };
};

// Running synchronous tasks in parallel using async/await with Promise.all()
async function processUserDataParallel(userId) {
    console.log('Starting parallel execution...');
    const startTime = Date.now();
    
    try {
        // Using async/await with Promise.all() for parallel execution
        const [userData, userPosts, userSettings] = await Promise.all([
            Promise.resolve(processUserData(userId)),
            Promise.resolve(processUserPosts(userId)),
            Promise.resolve(processUserSettings(userId))
        ]);
        
        const endTime = Date.now();
        console.log(`All parallel tasks completed in ${endTime - startTime}ms`);
        
        return {
            user: userData,
            posts: userPosts,
            settings: userSettings
        };
    } catch (error) {
        console.error('Error processing user data:', error);
    }
}

// Alternative: Using async/await with individual await (sequential)
async function processUserDataSequentialAsync(userId) {
    console.log('Starting sequential async execution...');
    const startTime = Date.now();
    
    // These run one after another (sequential)
    const userData = await Promise.resolve(processUserData(userId));
    const userPosts = await Promise.resolve(processUserPosts(userId));
    const userSettings = await Promise.resolve(processUserSettings(userId));
    
    const endTime = Date.now();
    console.log(`All sequential async tasks completed in ${endTime - startTime}ms`);
    
    return { user: userData, posts: userPosts, settings: userSettings };
}

// Sequential execution (slower)
async function processUserDataSequential(userId) {
    console.log('Starting sequential execution...');
    const startTime = Date.now();
    
    const userData = processUserData(userId);
    const userPosts = processUserPosts(userId);
    const userSettings = processUserSettings(userId);
    
    const endTime = Date.now();
    console.log(`All sequential tasks completed in ${endTime - startTime}ms`);
    
    return { user: userData, posts: userPosts, settings: userSettings };
}

// Example usage with async/await
async function runExamples() {
    console.log('=== Running Parallel Example ===');
    const parallelResult = await processUserDataParallel(123);
    console.log('Parallel result received');
    
    console.log('\n=== Running Sequential Async Example ===');
    const sequentialResult = await processUserDataSequentialAsync(456);
    console.log('Sequential async result received');
}

// Run the examples
runExamples();

// Alternative: Using .then() syntax (older style)
// processUserDataParallel(123).then(result => {
//     console.log('Parallel result received');
// });
