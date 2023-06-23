package level_2;
class Solution0623 {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int sum = brown + yellow;
        
        for(int i = 3; i < sum; i++) {
        	int j = (brown + 4) / 2 - i;
        	
        	if(j >= 3 && i >= j && yellow == (i-2) * (j-2)) {
        		answer[0] = i;
        		answer[1] = j;
        		break;
        	}	
        }
        return answer;
    }
}
public class P42842 {

}
