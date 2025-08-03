//filter
let test_list = [1, 2, 3, 4, 3, 6]; // Assuming test_list exists
let res_list = Array.from({length: test_list.length}, (_, i) => i).filter(x => test_list[x] === 3); 