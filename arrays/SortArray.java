package arrays;

import java.util.Arrays;

public class SortArray {

	public static void main(String[] args) {

		//number ko array ka form ma short karna
		int data[] = { 4, 10, 2, 6, 1 };

		Arrays.sort(data); // idhar short hoga

		for (int i : data) {
			System.out.println(i);
		}

		// String array sorting
		String data2[] = { "z", "a", "x", "b", "z", "a" };

		Arrays.sort(data2);

		for (String i : data2) {
			System.out.println(i);
		}

	}

}
