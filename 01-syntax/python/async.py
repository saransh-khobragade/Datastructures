import asyncio
import time
from typing import Dict, Any, List

# Simulate async tasks that take different amounts of time
async def fetch_user_data(id: int) -> Dict[str, Any]:
    await asyncio.sleep(2)  # Simulate async operation
    return {
        "id": id,
        "name": f"User {id}",
        "email": f"user{id}@example.com"
    }

async def fetch_user_posts(id: int) -> Dict[str, Any]:
    await asyncio.sleep(1.5)  # Simulate async operation
    return {
        "userId": id,
        "posts": [f"Post 1 by user {id}", f"Post 2 by user {id}"]
    }

async def fetch_user_settings(id: int) -> Dict[str, Any]:
    await asyncio.sleep(1)  # Simulate async operation
    return {
        "userId": id,
        "theme": "dark",
        "notifications": True
    }

# Running tasks in parallel using asyncio.gather()
async def load_user_data_parallel(user_id: int) -> Dict[str, Any]:
    print("Starting parallel execution...")
    start_time = time.time()
    
    try:
        # Run all tasks in parallel
        user_data, user_posts, user_settings = await asyncio.gather(
            fetch_user_data(user_id),
            fetch_user_posts(user_id),
            fetch_user_settings(user_id)
        )
        
        end_time = time.time()
        print(f"All tasks completed in {end_time - start_time:.2f} seconds")
        
        return {
            "user": user_data,
            "posts": user_posts,
            "settings": user_settings
        }
    except Exception as e:
        print(f"Error loading user data: {e}")
        return {}

# Alternative: Using asyncio.create_task() for parallel execution
async def load_user_data_parallel_with_tasks(user_id: int) -> Dict[str, Any]:
    print("Starting parallel execution with create_task...")
    start_time = time.time()
    
    try:
        # Create tasks for parallel execution
        task1 = asyncio.create_task(fetch_user_data(user_id))
        task2 = asyncio.create_task(fetch_user_posts(user_id))
        task3 = asyncio.create_task(fetch_user_settings(user_id))
        
        # Wait for all tasks to complete
        user_data = await task1
        user_posts = await task2
        user_settings = await task3
        
        end_time = time.time()
        print(f"All tasks completed in {end_time - start_time:.2f} seconds")
        
        return {
            "user": user_data,
            "posts": user_posts,
            "settings": user_settings
        }
    except Exception as e:
        print(f"Error loading user data: {e}")
        return {}

# Sequential execution (slower)
async def load_user_data_sequential(user_id: int) -> Dict[str, Any]:
    print("Starting sequential execution...")
    start_time = time.time()
    
    user_data = await fetch_user_data(user_id)
    user_posts = await fetch_user_posts(user_id)
    user_settings = await fetch_user_settings(user_id)
    
    end_time = time.time()
    print(f"Sequential tasks completed in {end_time - start_time:.2f} seconds")
    
    return {
        "user": user_data,
        "posts": user_posts,
        "settings": user_settings
    }

# Main function to run examples
async def main():
    print("=== Python Async Parallel Example ===")
    
    # Run parallel example with gather
    result = await load_user_data_parallel(123)
    print(f"Parallel result: {result}")
    
    print("\n=== Python Async Parallel with Tasks Example ===")
    result2 = await load_user_data_parallel_with_tasks(456)
    print(f"Tasks result: {result2}")
    
    print("\n=== Python Async Sequential Example ===")
    result3 = await load_user_data_sequential(789)
    print(f"Sequential result: {result3}")

# Run the async examples
if __name__ == "__main__":
    asyncio.run(main()) 