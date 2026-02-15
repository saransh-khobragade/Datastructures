package syntax;
import java.util.HashMap;
import java.util.Map;

public class HashMaps {
    public static void main(String[] args){
        Map<String, Integer> map = new HashMap<>();
        map.put("a1",10);
        map.put("a2",20);
        for(String s : map.keySet()){
            System.out.println(s+","+map.get(s));
        }
    }
}
