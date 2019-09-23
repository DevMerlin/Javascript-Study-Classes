<style>

#tree {
	margin: 0;
	padding: 0;	
	list-style-type: none;
}

ul {
	list-style-type: none;
}

.caret {
	cursor: pointer;
	user-select: none;
}

.caret::before {
	content: "\25B6";
	color: black;
	display: inline-block;
	margin-right: 6px;
}

.caret-down::before {
	transform: rotate(90deg);
}

.nested {
	display: none;
}

.active {
	display: block;
}
</style>

<html>
	<ul id="tree">
		<li><span class="caret">Items</span>
			<ul class="nested">
				<li>Cars</li>
				<li>Trains</li>
				<li>Planes</li>
				<li><span class="caret">Food</span>
					<ul class="nested">
						<li>Vegetables</li>
						<li>Meats</li>
						<li>Fruits</li>
					</ul>
				</li>			
			</ul>
		</li>
	</ul>
</html>

<script>
document.addEventListener("DOMContentLoaded", function(event) { 
	let tog = document.getElementsByClassName("caret");
	console.log(tog.length);
	
	for(let i = 0; i < tog.length; i++)
	{
		tog[i].addEventListener("click", function() {
			this.parentElement.querySelector(".nested")
			.classList.toggle("active");
			this.classList.toggle("caret-down");
		});
	}
});
</script>