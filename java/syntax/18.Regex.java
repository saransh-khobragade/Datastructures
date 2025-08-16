// Regular expressions
import java.util.regex.*;

public class Regex {
    public static void main(String[] args) {
        // Return if specific word present
        String txt = "The rain in Spain Spainish 01 ";
        Pattern pattern1 = Pattern.compile("\\bSpai\\w+");
        Matcher matcher1 = pattern1.matcher(txt);
        if (matcher1.find()) {
            System.out.println(matcher1.group());
            System.out.println(matcher1.start() + " " + matcher1.end());
        }
        System.out.println("------------");

        // Return if digits
        Pattern pattern2 = Pattern.compile("\\d+");
        Matcher matcher2 = pattern2.matcher(txt);
        if (matcher2.find()) {
            System.out.println(matcher2.group());
            System.out.println(matcher2.start() + " " + matcher2.end());
        }
        System.out.println("------------");

        // Return all occurrences
        String txt2 = "The rain in Spain";
        Pattern pattern3 = Pattern.compile("ai");
        Matcher matcher3 = pattern3.matcher(txt2);
        while (matcher3.find()) {
            System.out.println(matcher3.group());
        }
        System.out.println("------------");

        // Regex patterns:
        // \\b - Returns a match where the specified characters are at the beginning or at the end of a word
        // \\d - Returns a match where the string contains digits (numbers from 0-9)
        // \\s - Returns a match where the string contains a white space character
        // \\w - Returns a match where the string contains any word characters (characters from a to Z, digits from 0-9, and the underscore _ character)
    }
} 