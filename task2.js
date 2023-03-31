/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let odd=0, even=0;
    for(let i=0;i<num_list.length; i++){
        ((num_list[i]%2)==0) ? even++ : odd++;
    }
    let answer = [even, odd];
    return answer;
}
