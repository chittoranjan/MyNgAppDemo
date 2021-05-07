using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        public static IEnumerable<T[]> Combinations<T>(IEnumerable<T> source)
        {
            if (null == source) throw new ArgumentNullException(nameof(source));

            T[] data = source.ToArray();

            var res = Enumerable.Range(0, 1 << (data.Length)).Select(index => data.Where((v, i) => (index & (1 << i)) != 0).ToArray());
            return res;
        }
        static void Main(string[] args)
        {
            List<object> comObjList = new List<object>();
            List<int> comObjSumList = new List<int>();

            int[] scenario1 = { 85, 35, 25, 45, 16, 100 };
            int[] scenario2 = { 55, 75, 26, 55, 99 };
            int[] scenario3 = { 99, 15, 66, 75, 85, 88, 5 };
            Console.WriteLine("Enter only number Value");
            var inputValue = Convert.ToInt32(Console.ReadLine());

            if (inputValue > 0)
            {
                var val = scenario1.FirstOrDefault(c => c == inputValue);

                if (val > 0)
                {
                    Console.WriteLine("Result Is- " + val + " , Combinations Is- " + val);
                }
                else
                {
                    var filterVal = scenario1.Where(c => c < inputValue).OrderBy(c => c).ToList();
                    var combinationsResult = Combinations(filterVal).ToList();
                    // double totalCombine= Math.Pow(2, filterVal.Count);
                    foreach (var item in combinationsResult)
                    {
                        comObjList.Add($"[{string.Join(", ", item)}]");
                        comObjSumList.Add(item.Sum());
                    }

                    var nearestValue = comObjSumList.FindLast(c => c < inputValue);
                    var nearestValueIndex = comObjSumList.FindIndex(c => c == nearestValue);
                    var combineObj = comObjList.ElementAt(nearestValueIndex);
                    if (nearestValue > 0)
                    {
                        Console.WriteLine("Result Is- " + nearestValue + ", Combination Is- " + combineObj + ", Total Combine Is- " + combinationsResult.Count());
                    }
                    else
                    {
                        Console.WriteLine("Result Not Found! ");
                    }

                }

            }

        }
    }
}
