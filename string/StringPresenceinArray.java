package strings;

public class StringPresenceinArray {

	public static void main(String[] args) {

		String s[] = { "welcome", "selenium", "java", "python", "javascript" };

		String searchString = "welcome";

		boolean flag = false;

		for (String i : s) {
			if (i.equals(searchString)) {
				System.out.println("String found in array");
				flag = true;
				break;
			}
		}

		if (flag == false) {
			System.out.println("String not found in array");
		}

	}

}
