package loop;

public class LargestOf3Numbers {

	public static void main(String[] args) {

		int a = 50;
		int b = 100;
		int c = 30;

		if (a > b && a > c) {
			System.out.println("a is largest number");
		} else if (b > a && b > c) {
			System.out.println("b is largest number");
		} else {
			System.out.println("c is largest");
		}

	}

}
