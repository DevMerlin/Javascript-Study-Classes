class levenshteinDistance
{
    constructor()
    {

	}
	
	calculateBasic(a = "", b = "")
	{
		this.a = a;
		this.b = b;	
        this.distanceM = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
				
		for(let i = 0; i <= this.a.length; i += 1)
		{
			this.distanceM[0][i] = i;
		}
		
		for(let j = 0; j <= this.b.length; j += 1)
		{
			this.distanceM[j][0] = j;
		}
		
		for(let j = 1; j <= this.b.length; j += 1)
		{
			for (let i = 1; i <= this.a.length; i += 1)
			{
				const indicator = this.a[i - 1] === this.b[j - 1] ? 0 : 1;
				
				this.distanceM[j][i] = Math.min(
					this.distanceM[j][i - 1] + 1,
					this.distanceM[j - 1][i] + 1,
					this.distanceM[j - 1][i - 1] + indicator,
				);	
			}
		}
		
		return this.distanceM[this.b.length][this.a.length];		
	}
	
	minimumDeleteSum(a = "", b = "")
	{
		let solution = 0;
		let ab = [];
		
		let length1 = a.length;
		let length2 = b.length;
		
		// Construct a 2D array //
		while(ab.length !== length1 + 1)
		{
			ab.push([]);
		}
		
		// Go over each string and remove similar letters //
		for(let i = 0; i <= length1; i++)
		{
			for(let j = 0; j <= length2; j++)
			{
				if (j === 0 && i > 0)
				{
					ab[i][j] = ab[i - 1][j] + a[i-1].charCodeAt(0);
				} else if (i === 0 && j > 0) {
					ab[i][j] = ab[i][j - 1] + b[j - 1].charCodeAt(0);
				} else {
					ab[i][j] = 0;
				}
			}
		}
		
		// Count the total sum for the solution for the ASCII Distance //
		for(let i = 1; i <= length1; i++)
		{
			for(let j = 1; j <= length2; j++)
			{
				solution = a[i - 1].charCodeAt(0) + b[j - 1].charCodeAt(0);
				
				if (a[i - 1] === b[j - 1])
				{
					solution = 0;
				}
				
				ab[i][j] = Math.min(ab[i-1][j]+a[i-1].charCodeAt(0), ab[i][j-1]+b[j-1].charCodeAt(0), ab[i-1][j-1] + solution);
			}
		}
		
		return ab[length1][length2];
	}
}