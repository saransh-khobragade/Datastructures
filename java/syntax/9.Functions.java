// Functions
public class Functions {
    // Function with parameter
    public static void myFunction(String fname) {
        System.out.println(fname + " Refsnes");
    }

    // Function with multiple parameters
    public static void myFunction(String fname, String lname) {
        System.out.println(fname + " " + lname);
    }

    // Function with default parameter (Java doesn't have default parameters, using overloaded methods)
    public static void myFunction(String fname, String lname) {
        System.out.println(fname + " " + lname);
    }

    // Overloaded method with default parameter
    public static void myFunction(String fname) {
        myFunction(fname, "Refsnes");
    }

    public static void main(String[] args) {
        // Test the functions
        myFunction("John");
        myFunction("John", "Doe");
        myFunction("Jane", "Smith");
    }
} 