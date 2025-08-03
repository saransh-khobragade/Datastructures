// filter
let test_list = [1, 2, 3, 3, 4, 5];
let res_list = test_list.map((x, index) => x === 3 ? index : -1).filter(x => x !== -1); 