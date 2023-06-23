package level_1;
//가장 가까운 글자 P142086
import java.util.*;
class Solution0622_1 {
	 public int[] solution(String s) {
	        int[] answer = new int[s.length()];

	        Map<Character, Integer> h = new HashMap<>();
	        for (int i = 0; i < s.length(); i++) {
	            answer[i] = i - h.getOrDefault(s.charAt(i), i + 1);
	            h.put(s.charAt(i), i);
	        }

	        return answer;
	    }
	}
public class P142086 {
}
