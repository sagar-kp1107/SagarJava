package loop;

public class WhileLoopDemo {

	public static void main(String[] args) {

		// int i=1; //initial value

		// 1....10
		/*
		 * while(i<=10)
		 * {
		 * System.out.println(i); //1 2 3 4 5 6 7 8 9 10
		 * i++; // i=i+1 //increment values
		 * }
		 */

		// 2,4,6,8,10 ---> even numbers

		/*
		 * int i=2;
		 * while(i<=10)
		 * {
		 * System.out.println(i); //2 4 6 8 10
		 * i=i+2;
		 * 
		 * }
		 */

		// 1,3,5,7,9 ---> odd numbers

		/*
		 * int i=1;
		 * while(i<=10)
		 * {
		 * System.out.println(i); //1,3,5,7,9
		 * i=i+2;
		 * 
		 * }
		 */

		// 10,9,8,7,6,5,4,3,2,1

		int i = 10;

		while (i > 0) {
			System.out.println(i); // 10 9......1
			i--;

		}

	}

}
