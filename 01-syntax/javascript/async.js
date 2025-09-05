// Example of running async tasks in parallel

// Simulate async tasks that take different amounts of time
const fetchUserData = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
        }, 2000);
    });
};

const fetchUserPosts = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: id, posts: [`Post 1 by user ${id}`, `Post 2 by user ${id}`] });
        }, 1500);
    });
};

const fetchUserSettings = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: id, theme: 'dark', notifications: true });
        }, 1000);
    });
};

// Running tasks in parallel using Promise.all()
async function loadUserDataParallel(userId) {
    console.log('Starting parallel execution...');
    const startTime = Date.now();
    
    try {
        const [userData, userPosts, userSettings] = await Promise.all([
            fetchUserData(userId),
            fetchUserPosts(userId),
            fetchUserSettings(userId)
        ]);
        
        const endTime = Date.now();
        console.log(`All tasks completed in ${endTime - startTime}ms`);
        
        return {
            user: userData,
            posts: userPosts,
            settings: userSettings
        };
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Example usage
loadUserDataParallel(123).then(result => {
    console.log('Final result:', result);
});

// Compare with sequential execution (slower)
async function loadUserDataSequential(userId) {
    console.log('Starting sequential execution...');
    const startTime = Date.now();
    
    const userData = await fetchUserData(userId);
    const userPosts = await fetchUserPosts(userId);
    const userSettings = await fetchUserSettings(userId);
    
    const endTime = Date.now();
    console.log(`Sequential tasks completed in ${endTime - startTime}ms`);
    
    return { user: userData, posts: userPosts, settings: userSettings };
}

// Uncomment to see sequential vs parallel difference
// loadUserDataSequential(456).then(result => {
//     console.log('Sequential result:', result);
// });
