package programmers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class P142086 {
    public static void main(String[] args) {
        String s = "foobar";
        HashMap<Character, Integer> map = new HashMap<>();
        List<Integer> mapList = new ArrayList<>();

        for(int i=0; i<s.length(); i++){
            char key = s.charAt(i);
            if(map.containsKey(key)){
                mapList.add(i - map.get(key));
            } else {
                mapList.add(-1);
            }
            map.put(key, i);
        }

        for(int i: mapList){
            System.out.print(i + " ");
        }


    }

}


// P142086 : 가장 가까운 같은 글자

// key: 알파벳, value: 인덱스