class minStep
{
    constructor(x)
    {
        this.countSteps = 0;
		return this.minStepsToOne(x);
    }

	minStepsToOne(number = 0)
	{
		while(number !== 1)
		{
			if ((number - 1) % 3 === 0)
			{
				number -= 1;
			} else if (number % 3 === 0) {
				number /= 3;
			} else if (number % 2 === 0) {
				number /= 2;
			} else {
				number -= 1;
			}
			
			this.countSteps++;
		}
		
		return this.countSteps;
	}
	

}