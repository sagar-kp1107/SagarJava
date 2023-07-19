package strings;

public class ReverseaString {

	public static void main(String[] args) {

		String s = "selenium";

		int len = s.length(); // 8-1

		String rev = "";

		for (int i = len - 1; i >= 0; i--) /// 0 -1
		{
			rev = rev + s.charAt(i); // muineles
		}

		System.out.println("revers string is:" + rev);

	}

}
