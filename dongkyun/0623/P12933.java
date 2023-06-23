package level_1;

import java.util.*;

class Solution0622_2 {
    public long solution(long n) {
    	String s = Long.toString(n);
    	
    	String[] arr = new String[s.length()];
        arr = s.split("");
   
        Arrays.sort(arr, Collections.reverseOrder());
        String tmp = "";
        long answer = 0;
        for(int i = 0; i < arr.length; i++) {
        	tmp += (arr[i]);
        }
        answer = Long.parseLong(tmp);
        return answer;
    }
}
public class P12933 { 

}
