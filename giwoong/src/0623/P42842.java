package src.level2;

// level-2
// 카펫 - (완전탐색)

// 입출력 예
// brown	yellow	return
// 10	    2	    [4, 3]
// 8	    1	    [3, 3]
// 24	    24	    [8, 6]

public class P42842 {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];

        for (int i = 1; i < brown + yellow; i++) {
            int x = brown + yellow / i;

            if ((x - 2) * (i - 2) == yellow) {
                answer[0] = x;
                answer[1] = i;
                break;
            }
        }

        return answer;
    }
}
