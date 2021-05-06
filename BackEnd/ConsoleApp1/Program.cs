using System;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {

        static void Main(string[] args)
        {
            int[] scenario1 = { 85, 35, 25, 45, 16, 100 };
            int[] scenario2 = { 55, 75, 26, 55, 99 };
            int[] scenario3 = { 99, 15, 66, 75, 85, 88, 5 };
            Console.WriteLine("Enter only number Value");
            var inputValue = Convert.ToInt32(Console.ReadLine());

            var result = 0;
            if (inputValue > 0)
            {
                var val = scenario1.FirstOrDefault(c => c == inputValue);

                if (val > 0)
                {
                    result = val;
                }
                else
                {
                    var val3 = scenario1.Where(c => c < inputValue).OrderBy(c =>c);
                }

            }

            if (result > 0)
            {
                Console.WriteLine("Scenario 1 Result Is- " + result);
            }
            else
            {
                Console.WriteLine("Result Not Found! ");
            }
        }
    }
}
