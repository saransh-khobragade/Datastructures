package syntax;

public class Variables {
    public static void main(String[] arg){
        boolean isActive = true;
        String name = "Saransh";
        int[] numbers = new int[5];
        int[] numbers2 = {1, 2, 3, 4, 5};


        System.out.println(isActive);
        System.out.println(name);

        for(int a :numbers2) {
            System.out.println(a);
        }
    }
}
