import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.Arrays;

public class Async {
    
    // Simulate async tasks that take different amounts of time
    public static Map<String, Object> fetchUserData(int id) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        result.put("name", "User " + id);
        result.put("email", "user" + id + "@example.com");
        return result;
    }
    
    public static Map<String, Object> fetchUserPosts(int id) {
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Map<String, Object> result = new HashMap<>();
        result.put("userId", id);
        result.put("posts", Arrays.asList("Post 1 by user " + id, "Post 2 by user " + id));
        return result;
    }
    
    public static Map<String, Object> fetchUserSettings(int id) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        Map<String, Object> result = new HashMap<>();
        result.put("userId", id);
        result.put("theme", "dark");
        result.put("notifications", true);
        return result;
    }
    
    // Running tasks in parallel using CompletableFuture
    public static Map<String, Object> loadUserDataParallel(int userId) {
        System.out.println("Starting parallel execution...");
        long startTime = System.currentTimeMillis();
        
        try {
            // Create CompletableFuture for each task
            CompletableFuture<Map<String, Object>> userDataFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserData(userId));
            
            CompletableFuture<Map<String, Object>> userPostsFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserPosts(userId));
            
            CompletableFuture<Map<String, Object>> userSettingsFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserSettings(userId));
            
            // Wait for all futures to complete
            CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                userDataFuture, userPostsFuture, userSettingsFuture);
            
            allFutures.join(); // Wait for all to complete
            
            // Get results
            Map<String, Object> userData = userDataFuture.get();
            Map<String, Object> userPosts = userPostsFuture.get();
            Map<String, Object> userSettings = userSettingsFuture.get();
            
            long endTime = System.currentTimeMillis();
            System.out.println("All tasks completed in " + (endTime - startTime) + "ms");
            
            Map<String, Object> result = new HashMap<>();
            result.put("user", userData);
            result.put("posts", userPosts);
            result.put("settings", userSettings);
            
            return result;
            
        } catch (Exception e) {
            System.err.println("Error loading user data: " + e.getMessage());
            return null;
        }
    }
    
    // Alternative: Using custom ExecutorService for parallel execution
    public static Map<String, Object> loadUserDataParallelWithExecutor(int userId) {
        System.out.println("Starting parallel execution with ExecutorService...");
        long startTime = System.currentTimeMillis();
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        try {
            CompletableFuture<Map<String, Object>> userDataFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserData(userId), executor);
            
            CompletableFuture<Map<String, Object>> userPostsFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserPosts(userId), executor);
            
            CompletableFuture<Map<String, Object>> userSettingsFuture = 
                CompletableFuture.supplyAsync(() -> fetchUserSettings(userId), executor);
            
            CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                userDataFuture, userPostsFuture, userSettingsFuture);
            
            allFutures.join();
            
            Map<String, Object> userData = userDataFuture.get();
            Map<String, Object> userPosts = userPostsFuture.get();
            Map<String, Object> userSettings = userSettingsFuture.get();
            
            long endTime = System.currentTimeMillis();
            System.out.println("All tasks completed in " + (endTime - startTime) + "ms");
            
            Map<String, Object> result = new HashMap<>();
            result.put("user", userData);
            result.put("posts", userPosts);
            result.put("settings", userSettings);
            
            return result;
            
        } catch (Exception e) {
            System.err.println("Error loading user data: " + e.getMessage());
            return null;
        } finally {
            executor.shutdown();
        }
    }
    
    // Sequential execution (slower)
    public static Map<String, Object> loadUserDataSequential(int userId) {
        System.out.println("Starting sequential execution...");
        long startTime = System.currentTimeMillis();
        
        Map<String, Object> userData = fetchUserData(userId);
        Map<String, Object> userPosts = fetchUserPosts(userId);
        Map<String, Object> userSettings = fetchUserSettings(userId);
        
        long endTime = System.currentTimeMillis();
        System.out.println("Sequential tasks completed in " + (endTime - startTime) + "ms");
        
        Map<String, Object> result = new HashMap<>();
        result.put("user", userData);
        result.put("posts", userPosts);
        result.put("settings", userSettings);
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Java Async Parallel Example ===");
        
        // Run parallel example
        Map<String, Object> result = loadUserDataParallel(123);
        System.out.println("Parallel result: " + result);
        
        System.out.println("\n=== Java Async Parallel with Executor Example ===");
        Map<String, Object> result2 = loadUserDataParallelWithExecutor(456);
        System.out.println("Executor result: " + result2);
        
        System.out.println("\n=== Java Sequential Example ===");
        Map<String, Object> result3 = loadUserDataSequential(789);
        System.out.println("Sequential result: " + result3);
    }
} 