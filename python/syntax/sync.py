import concurrent.futures
import time
import math
from typing import Dict, Any, List

# Simulate CPU-intensive synchronous tasks
def process_user_data(id: int) -> Dict[str, Any]:
    start = time.time()
    # Simulate heavy computation
    result = 0.0
    for i in range(10000000):
        result += math.sqrt(i)
    end = time.time()
    print(f"process_user_data({id}) completed in {end - start:.2f} seconds")
    return {
        "id": id,
        "name": f"User {id}",
        "processed": result
    }

def process_user_posts(id: int) -> Dict[str, Any]:
    start = time.time()
    # Simulate heavy computation
    result = 0.0
    for i in range(8000000):
        result += math.pow(i, 2)
    end = time.time()
    print(f"process_user_posts({id}) completed in {end - start:.2f} seconds")
    return {
        "userId": id,
        "posts": [f"Post 1 by user {id}", f"Post 2 by user {id}"],
        "processed": result
    }

def process_user_settings(id: int) -> Dict[str, Any]:
    start = time.time()
    # Simulate heavy computation
    result = 0.0
    for i in range(5000000):
        result += math.sin(i)
    end = time.time()
    print(f"process_user_settings({id}) completed in {end - start:.2f} seconds")
    return {
        "userId": id,
        "theme": "dark",
        "notifications": True,
        "processed": result
    }

# Running synchronous tasks in parallel using ThreadPoolExecutor
def process_user_data_parallel(user_id: int) -> Dict[str, Any]:
    print("Starting parallel execution...")
    start_time = time.time()
    
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
            # Submit all tasks to the executor
            future1 = executor.submit(process_user_data, user_id)
            future2 = executor.submit(process_user_posts, user_id)
            future3 = executor.submit(process_user_settings, user_id)
            
            # Wait for all futures to complete
            user_data = future1.result()
            user_posts = future2.result()
            user_settings = future3.result()
        
        end_time = time.time()
        print(f"All parallel tasks completed in {end_time - start_time:.2f} seconds")
        
        return {
            "user": user_data,
            "posts": user_posts,
            "settings": user_settings
        }
    except Exception as e:
        print(f"Error processing user data: {e}")
        return {}

# Alternative: Using ProcessPoolExecutor for true parallelism (CPU-bound tasks)
def process_user_data_parallel_processes(user_id: int) -> Dict[str, Any]:
    print("Starting parallel execution with ProcessPoolExecutor...")
    start_time = time.time()
    
    try:
        with concurrent.futures.ProcessPoolExecutor(max_workers=3) as executor:
            # Submit all tasks to the executor
            future1 = executor.submit(process_user_data, user_id)
            future2 = executor.submit(process_user_posts, user_id)
            future3 = executor.submit(process_user_settings, user_id)
            
            # Wait for all futures to complete
            user_data = future1.result()
            user_posts = future2.result()
            user_settings = future3.result()
        
        end_time = time.time()
        print(f"All parallel tasks completed in {end_time - start_time:.2f} seconds")
        
        return {
            "user": user_data,
            "posts": user_posts,
            "settings": user_settings
        }
    except Exception as e:
        print(f"Error processing user data: {e}")
        return {}

# Alternative: Using concurrent.futures.as_completed()
def process_user_data_parallel_as_completed(user_id: int) -> Dict[str, Any]:
    print("Starting parallel execution with as_completed...")
    start_time = time.time()
    
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
            # Submit all tasks
            futures = {
                executor.submit(process_user_data, user_id): "user",
                executor.submit(process_user_posts, user_id): "posts",
                executor.submit(process_user_settings, user_id): "settings"
            }
            
            results = {}
            # Process results as they complete
            for future in concurrent.futures.as_completed(futures):
                task_name = futures[future]
                try:
                    results[task_name] = future.result()
                except Exception as e:
                    print(f"Task {task_name} generated an exception: {e}")
        
        end_time = time.time()
        print(f"All parallel tasks completed in {end_time - start_time:.2f} seconds")
        
        return {
            "user": results["user"],
            "posts": results["posts"],
            "settings": results["settings"]
        }
    except Exception as e:
        print(f"Error processing user data: {e}")
        return {}

# Sequential execution (slower)
def process_user_data_sequential(user_id: int) -> Dict[str, Any]:
    print("Starting sequential execution...")
    start_time = time.time()
    
    user_data = process_user_data(user_id)
    user_posts = process_user_posts(user_id)
    user_settings = process_user_settings(user_id)
    
    end_time = time.time()
    print(f"Sequential tasks completed in {end_time - start_time:.2f} seconds")
    
    return {
        "user": user_data,
        "posts": user_posts,
        "settings": user_settings
    }

# Main function to run examples
def main():
    print("=== Python Sync Parallel Example ===")
    
    # Run parallel example with ThreadPoolExecutor
    result = process_user_data_parallel(123)
    print(f"Parallel result: {result}")
    
    print("\n=== Python Sync Parallel with ProcessPoolExecutor Example ===")
    result2 = process_user_data_parallel_processes(456)
    print(f"ProcessPool result: {result2}")
    
    print("\n=== Python Sync Parallel with as_completed Example ===")
    result3 = process_user_data_parallel_as_completed(789)
    print(f"as_completed result: {result3}")
    
    print("\n=== Python Sync Sequential Example ===")
    result4 = process_user_data_sequential(999)
    print(f"Sequential result: {result4}")

# Run the sync examples
if __name__ == "__main__":
    main() 