class arraySums
{
	constructor(array, sum)
	{
		return this.printResult(array, sum);
	}
	
	printResult(array, sum)
	{
		let outputArray = [];
		
		for(let i = 0; i < array.length; i++)
		{
			let firstNum = array[i];
			for(let j = i + 1; j < array.length; j++)
			{
				let secondCount = array[j];
				
				if ((firstNum + secondCount) == sum)
				{
					outputArray.push([firstNum, secondCount]);
				}
				
			}
		}
		
		return outputArray;
	}
}