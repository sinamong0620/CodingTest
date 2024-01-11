function solution(nums) {
    //가질 수 있는 폰켓몬 마리 수
    const monster = Math.floor(nums.length/2);
    const map = new Map();
    
    nums.map((ponketmone)=> {
        if(!map.get(ponketmone)) map.set(ponketmone,1);
        else map.set(ponketmone,map.get(ponketmone) + 1);
    })
    return map.size < monster ? map.size : monster
    
}