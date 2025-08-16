import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.Arrays;

public class Sync {
    
    // Simulate CPU-intensive synchronous tasks
    public static Map<String, Object> processUserData(int id) {
        long start = System.currentTimeMillis();
        // Simulate heavy computation
        double result = 0.0;
        for (int i = 0; i < 10000000; i++) {
            result += Math.sqrt(i);
        }
        long end = System.currentTimeMillis();
        System.out.println("processUserData(" + id + ") completed in " + (end - start) + "ms");
        
        Map<String, Object> data = new HashMap<>();
        data.put("id", id);
        data.put("name", "User " + id);
        data.put("processed", result);
        return data;
    }
    
    public static Map<String, Object> processUserPosts(int id) {
        long start = System.currentTimeMillis();
        // Simulate heavy computation
        double result = 0.0;
        for (int i = 0; i < 8000000; i++) {
            result += Math.pow(i, 2);
        }
        long end = System.currentTimeMillis();
        System.out.println("processUserPosts(" + id + ") completed in " + (end - start) + "ms");
        
        Map<String, Object> data = new HashMap<>();
        data.put("userId", id);
        data.put("posts", Arrays.asList("Post 1 by user " + id, "Post 2 by user " + id));
        data.put("processed", result);
        return data;
    }
    
    public static Map<String, Object> processUserSettings(int id) {
        long start = System.currentTimeMillis();
        // Simulate heavy computation
        double result = 0.0;
        for (int i = 0; i < 5000000; i++) {
            result += Math.sin(i);
        }
        long end = System.currentTimeMillis();
        System.out.println("processUserSettings(" + id + ") completed in " + (end - start) + "ms");
        
        Map<String, Object> data = new HashMap<>();
        data.put("userId", id);
        data.put("theme", "dark");
        data.put("notifications", true);
        data.put("processed", result);
        return data;
    }
    
    // Running synchronous tasks in parallel using CompletableFuture
    public static Map<String, Object> processUserDataParallel(int userId) {
        System.out.println("Starting parallel execution...");
        long startTime = System.currentTimeMillis();
        
        try {
            // Create CompletableFuture for each task
            CompletableFuture<Map<String, Object>> userDataFuture = 
                CompletableFuture.supplyAsync(() -> processUserData(userId));
            
            CompletableFuture<Map<String, Object>> userPostsFuture = 
                CompletableFuture.supplyAsync(() -> processUserPosts(userId));
            
            CompletableFuture<Map<String, Object>> userSettingsFuture = 
                CompletableFuture.supplyAsync(() -> processUserSettings(userId));
            
            // Wait for all futures to complete
            CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                userDataFuture, userPostsFuture, userSettingsFuture);
            
            allFutures.join(); // Wait for all to complete
            
            // Get results
            Map<String, Object> userData = userDataFuture.get();
            Map<String, Object> userPosts = userPostsFuture.get();
            Map<String, Object> userSettings = userSettingsFuture.get();
            
            long endTime = System.currentTimeMillis();
            System.out.println("All parallel tasks completed in " + (endTime - startTime) + "ms");
            
            Map<String, Object> result = new HashMap<>();
            result.put("user", userData);
            result.put("posts", userPosts);
            result.put("settings", userSettings);
            
            return result;
            
        } catch (Exception e) {
            System.err.println("Error processing user data: " + e.getMessage());
            return null;
        }
    }
    
    // Alternative: Using custom ExecutorService for parallel execution
    public static Map<String, Object> processUserDataParallelWithExecutor(int userId) {
        System.out.println("Starting parallel execution with ExecutorService...");
        long startTime = System.currentTimeMillis();
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        try {
            CompletableFuture<Map<String, Object>> userDataFuture = 
                CompletableFuture.supplyAsync(() -> processUserData(userId), executor);
            
            CompletableFuture<Map<String, Object>> userPostsFuture = 
                CompletableFuture.supplyAsync(() -> processUserPosts(userId), executor);
            
            CompletableFuture<Map<String, Object>> userSettingsFuture = 
                CompletableFuture.supplyAsync(() -> processUserSettings(userId), executor);
            
            CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                userDataFuture, userPostsFuture, userSettingsFuture);
            
            allFutures.join();
            
            Map<String, Object> userData = userDataFuture.get();
            Map<String, Object> userPosts = userPostsFuture.get();
            Map<String, Object> userSettings = userSettingsFuture.get();
            
            long endTime = System.currentTimeMillis();
            System.out.println("All parallel tasks completed in " + (endTime - startTime) + "ms");
            
            Map<String, Object> result = new HashMap<>();
            result.put("user", userData);
            result.put("posts", userPosts);
            result.put("settings", userSettings);
            
            return result;
            
        } catch (Exception e) {
            System.err.println("Error processing user data: " + e.getMessage());
            return null;
        } finally {
            executor.shutdown();
        }
    }
    
    // Sequential execution (slower)
    public static Map<String, Object> processUserDataSequential(int userId) {
        System.out.println("Starting sequential execution...");
        long startTime = System.currentTimeMillis();
        
        Map<String, Object> userData = processUserData(userId);
        Map<String, Object> userPosts = processUserPosts(userId);
        Map<String, Object> userSettings = processUserSettings(userId);
        
        long endTime = System.currentTimeMillis();
        System.out.println("Sequential tasks completed in " + (endTime - startTime) + "ms");
        
        Map<String, Object> result = new HashMap<>();
        result.put("user", userData);
        result.put("posts", userPosts);
        result.put("settings", userSettings);
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Java Sync Parallel Example ===");
        
        // Run parallel example
        Map<String, Object> result = processUserDataParallel(123);
        System.out.println("Parallel result: " + result);
        
        System.out.println("\n=== Java Sync Parallel with Executor Example ===");
        Map<String, Object> result2 = processUserDataParallelWithExecutor(456);
        System.out.println("Executor result: " + result2);
        
        System.out.println("\n=== Java Sync Sequential Example ===");
        Map<String, Object> result3 = processUserDataSequential(789);
        System.out.println("Sequential result: " + result3);
    }
} 