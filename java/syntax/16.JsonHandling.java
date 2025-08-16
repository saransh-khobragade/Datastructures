// JSON handling
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.*;

public class JsonHandling {
    public static void main(String[] args) {
        Gson gson = new Gson();
        
        String x = "{ \"name\":\"John\", \"age\":30, \"city\":\"New York\"}";

        // Parse JSON to Map
        Map<String, Object> y = gson.fromJson(x, Map.class);
        System.out.println(y.get("age")); // 30

        // Parse Map to JSON
        String z = gson.toJson(y);
        System.out.println(z); // {"name":"John","age":30,"city":"New York"}

        // Reading JSON from file
        // try {
        //     String jsonContent = new String(Files.readAllBytes(Paths.get("java/syntax/data.json")));
        //     Map<String, Object> data = gson.fromJson(jsonContent, Map.class);
        //     System.out.println(data);
        // } catch (IOException e) {
        //     e.printStackTrace();
        // }

        // Writing JSON to file
        // try {
        //     String jsonOutput = gson.toJson(data);
        //     Files.write(Paths.get("java/syntax/data.json"), jsonOutput.getBytes());
        // } catch (IOException e) {
        //     e.printStackTrace();
        // }

        // Pretty print JSON
        // System.out.println(gson.toJson(data));
    }
} 