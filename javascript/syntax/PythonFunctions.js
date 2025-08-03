function digitsum(number) {
    let number1 = number;
    let sum = 0;
    while (number1 > 0) {
        let temp = number1 % 10;
        sum += temp;
        number1 = Math.floor(number1 / 10);
    }
    return sum;
}

function factorial(number) {
    if (number < 1) {
        return;
    }
    if (number == 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

function digitfactorialsum(number) {
    let number1 = number;
    let sum = 0;
    while (number1 > 0) {
        let temp = number1 % 10;
        sum += factorial(temp);
        number1 = Math.floor(number1 / 10);
    }
    return sum;
}

function binay_combination(n) {
    let A = new Array(n).fill(null);
    
    function combination(n) {
        if (n < 1) {
            console.log(A);
        } else {
            A[n - 1] = 0;
            combination(n - 1);
            A[n - 1] = 1;
            combination(n - 1);
        }
    }
    combination(n);
}

function find_leap_years(given_year, upto) {
    let list_of_leap_years = [];
    //Write your logic here
    let flag = 0;
    
    while (flag == 0) {
        if ((given_year % 4 == 0 && given_year % 100 != 0) || given_year % 400 == 0) {
            for (let i = 0; i < upto; i++) {
                list_of_leap_years.push(given_year);
                given_year += 4;
            }
            break;
        } else {
            given_year += 1;
        }
    }
    
    return list_of_leap_years;
}

function find_duplicates(list_of_numbers) {
    let list_of_duplicates = [];
    //Write your logic here

    for (let i = 0; i < list_of_numbers.length; i++) {
        for (let j = 0; j < list_of_numbers.length; j++) {
            if (list_of_numbers[i] == list_of_numbers[j] && i != j && list_of_duplicates.filter(x => x === list_of_numbers[i]).length == 0) {
                list_of_duplicates.push(list_of_numbers[i]);
                break;
            }
        }
    }
    
    return list_of_duplicates;
}

function convert_currency(amount_needed_inr, current_currency_name) {
    let currency_needed = amount_needed_inr / 62.382188;
    
    let equivalent;
    if (current_currency_name == "Euro") {
        equivalent = 0.936454;
    } else if (current_currency_name == "British Pound") {
        equivalent = 0.679499;
    } else if (current_currency_name == "Indian Rupee") {
        equivalent = 62.382188;
    } else if (current_currency_name == "Australian Dollar") {
        equivalent = 1.298246;
    } else if (current_currency_name == "Canadian Dollar") {
        equivalent = 1.258377;
    } else {
        return -1;
    }
    
    currency_needed = currency_needed * equivalent;
    return currency_needed;
}

function create_largest_number(number_list) {
    let var_str = "";
    for (let i of number_list) {
        number_list.sort((a, b) => b - a);
    }
    for (let i of number_list) {
        var_str = String(var_str) + String(i);
    }
    
    return parseInt(var_str);
}

function check_palindrome(word) {
    let reverse_string = word.split('').reverse().join('');
    if (reverse_string == word) {
        return true;
    } else {
        return false;
    }
}

function find_common_characters(msg1, msg2) {
    let input1 = msg1;
    let input2 = msg2;
    
    let var_str = "";

    for (let i = 0; i < input1.length; i++) {
        if (input2.indexOf(input1[i]) != -1 && input1[i] != " ") {
            if (var_str.split('').filter(x => x === input1[i]).length == 0) {
                var_str = var_str + input1[i];
            }
        }
    }
    
    if (var_str == "") {
        return -1;
    } else {
        return var_str;
    }
}

function check_samedigits_onmultiply(number, multiply) {
    let num1 = parseInt(number) * multiply;
    let double = String(num1);
    let list1 = [];
    let list2 = [];
    for (let i of String(number)) {
        list1.push(i);
    }
    for (let j of double) {
        list2.push(j);
    }
    
    let set1 = new Set(list1);
    let set2 = new Set(list2);
    if (set1.size === set2.size && [...set1].every(x => set2.has(x))) {
        return true;
    } else {
        return false;
    }
}

function find_pairs_of_numbers(list, sum) {
    let temp = [];
    for (let i of list) {
        for (let j of list) {
            if ((i + j) == sum && (temp.filter(x => x[0] === j && x[1] === i).length == 0 && temp.filter(x => x[0] === i && x[1] === j).length == 0 && i != j)) {
                temp.push([i, j]);
            }
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i][0] > temp[i][1]) {
            // pass
        } else if (temp[i][0] <= temp[i][1]) {
            let c = temp[i][1];
            temp[i][1] = temp[i][0];
            temp[i][0] = c;
        }
    }
    
    let var_str = "";
    
    for (let i = 0; i < temp.length; i++) {
        var_str = var_str + "(" + String(temp[i][0]) + "," + String(temp[i][1]) + ")";
    }
    
    if (var_str == "") {
        return -1;
    } else {
        return String(var_str);
    }
}

function sms_encoding(data) {
    let encoded_data = "";
    
    let list = [];
    list = list.concat(data.split(' '));
    
    let var_str = "";
    let count = 0;
    for (let i of list) {
        for (let j = 0; j < i.length; j++) {
            if (i[j] == "a" || i[j] == "e" || i[j] == "i" || i[j] == "o" || i[j] == "u" || i[j] == "A" || i[j] == "E" || i[j] == "I" || i[j] == "O" || i[j] == "U") {
                count += 1;
            }
        }
        
        if (count == i.length) {
            var_str += i;
        } else {
            count = 0;
            if (i[0] == "a" || i[0] == "e" || i[0] == "i" || i[0] == "o" || i[0] == "u" || i[0] == "A" || i[0] == "E" || i[0] == "I" || i[0] == "O" || i[0] == "U") {
                // pass
            } else {
                var_str += i[0];
            }
            
            for (let j = 1; j < i.length; j++) {
                if (i[j] == "a" || i[j] == "e" || i[j] == "i" || i[j] == "o" || i[j] == "u" || i[j] == "A" || i[j] == "E" || i[j] == "I" || i[j] == "O" || i[j] == "U") {
                    // pass
                } else {
                    if (i[j - 1] == "a" || i[j - 1] == "e" || i[j - 1] == "i" || i[j - 1] == "o" || i[j - 1] == "u" || i[j - 1] == "A" || i[j - 1] == "E" || i[j - 1] == "I" || i[j - 1] == "O" || i[j - 1] == "U") {
                        var_str = var_str + i[j];
                    }
                }
            }
        }
        var_str = var_str + " ";
    }
    encoded_data = var_str.trim();
    return encoded_data;
}

function nearest_palindrome(number) {
    let stri = "";
    let num = number + 1;
    let num_str = String(num);
    let length = String(num).length;
    let x = Math.ceil(length / 2);
    for (let i = 0; i < x; i++) {
        stri = stri + num_str[i];
        continue;
    }
    for (let j = x; j < length; j++) {
        stri = stri + num_str[length - j - 1];
    }
    if (stri == num_str) {
        return num;
    } else {
        x = nearest_palindrome(num);
    }
    return x;
}

function count_pattern(pat, name_list) {
    let count2 = 0;
    for (let i of name_list) {
        i.toLowerCase();
        
        if (i.indexOf(pat) != -1) {
            count2 += 1;
        }
    }
    
    return count2;
}

function check_anagram(data1, data2) {
    let str1 = [];
    str1 = str1.concat(data1.toLowerCase());
    let str2 = [];
    str2 = str2.concat(data2.toLowerCase());
    let count = 0;
    let flag = 0;
    
    for (let i of str1) {
        for (let j of str2) {
            if (i == j && str1.filter(x => x === j).length == 1) {
                count += 1;
            }
        }
    }
    if (count == str1.length) {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (i == j && str1[i] == str2[j]) {
                    flag = 1;
                }
            }
        }
    } else {
        return "False";
    }
    if (flag == 1) {
        return "False";
    } else {
        return "True";
    }
} 