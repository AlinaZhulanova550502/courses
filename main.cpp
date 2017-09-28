#include "stdafx.h"

void inputOutputFirst();
void inputOutputSecond();
void inputOutputThird();
void inputOutputForth();

void cycleSecond();

void error_message(int number);

int main()
{
	//inputOutputFirst();
	//inputOutputSecond();
	//inputOutputThird();
	inputOutputForth();

	//cycleSecond();

	return 0;
}

void inputOutputFirst()
{
	printf("%s", "inputOutputFirst\n");
	double a, b;
	printf("%s", "input a\n");
	if (!scanf_s("%lf", &a)) error_message(1);
	else
	{
		printf("%s", "input b\n");
		if (!scanf_s("%lf", &b)) error_message(1);
		else printf("%lf", (-b) / a);
	}
}

void inputOutputSecond()
{
	printf("%s", "inputOutputSecond\n");
	double a, x;
	printf("%s", "input a (%)\n");
	if (!scanf_s("%lf", &a)) error_message(1);
	else
	{
		printf("%s", "input x (number)\n");
		if (!scanf_s("%lf", &x)) error_message(1);
		else printf("%lf", x*a / 100);
	}
}

void inputOutputThird()
{
	printf("%s", "inputOutputThird\n");
	double a, b, c;
	printf("%s", "input a\n");
	if (!scanf_s("%lf", &a)) error_message(1);
	else
	{
		printf("%s", "input b\n");
		if (!scanf_s("%lf", &b)) error_message(1);
		else printf("%s", "input c\n");
		if (!scanf_s("%lf", &c)) error_message(1);
		else
		{
			int d;
			d = b*b - 4 * a*c;
			if (d < 0) error_message(2);
			else
			{
				printf("%lf ", ((-b) - sqrt(d)) / (2 * a));
				printf("%lf ", ((-b) + sqrt(d)) / (2 * a));
			}
		}
	}
}

void inputOutputForth()
{
	printf("%s", "inputOutputForth\n");
	double x;
	printf("%s", "input x\n");
	if (!scanf_s("%lf", &x)) error_message(1);
	else if ((x >= 1) || (x<=(-1))) error_message(4);
	else
	{	
		double otv = 0;
		int n;
		for (n = 0; n < 3; n++)
		{
			double proiz = 1;
			int m, four=1, factn=1, i, fact = 1, s=2*n+1, ss;
			m = 2 * n;							//2n
			if (m == 0) continue;
			for (i = 1; i <= m; i++)
				fact *= i;						//2n!
			for (m = n; m > 0; m--)
				four *= 4;						//4 в степени
			m = n;
			for (i = 1; i <= m; i++)
				factn *= i;						//n!
			factn*=factn;
			for (ss = s; ss > 0; ss--)
				proiz = proiz*x;
			otv += fact*proiz / (four*factn*s);
			printf("%lf", otv);
		}
	}
}

void cycleSecond()
{
	printf("%s", "cycleSecond\n");
	int x;
	printf("%s", "input x\n");
	if (!scanf_s("%d", &x)) error_message(1);
	else if (x < 0) error_message(3);
	else
	{
		if (x == 0)
		{
			printf("%d", 1);
			return;
		}
		int i, fact = 1;
		for (i = 1; i <= x; i++)
			fact *= i;
		printf("%d\n", fact);
	}
}

void error_message(int number)
{
	switch (number)
	{
	case 1:
	{
		printf("%s", "error: input symbol insted of number\n");
		break;
	}
	case 2:
	{
		printf("%s", "error: deskr<0\n");
		break;
	}
	case 3:
	{
		printf("%s", "error: number<0\n");
		break;
	}
	case 4:
	{
		printf("%s", "error: number>=1\n");
		break;
	}
	}
}