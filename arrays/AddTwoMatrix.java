package arrays;

public class AddTwoMatrix {
	public static void main(String args[]) {
		int m, n, c, d;
                //iss tarah se hum 3D array ma input data he
		int first[][]/*gives the position*/ = { { 1, 2 }, { 5, 10 }, { 2, 6 } };//show value
		int second[][] = { { 2, 6 }, { 1, 2 }, { 5, 3 } };

		m = first.length;
		n = first[0].length;

		int sum[][] = new int[m][n];

		System.out.println("Calculating Sum of 2 matrices....");

		for (c = 0; c < m; c++)
			for (d = 0; d < n; d++)
				sum[c][d] = first[c][d] + second[c][d]; 

		System.out.println("Sum of 2 matrices....");

		for (c = 0; c < m; c++) {
			for (d = 0; d < n; d++)
				System.out.print(sum[c][d] + "\t");

			System.out.println();
		}
	}

}
