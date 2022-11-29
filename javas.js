	document.querySelector('button').onclick = progress;
	let Grade1 = 0, Grade2 = 0, Grade3 = 0;
		function progress()
	{
		var tr = document.createElement("tr");
		var colums = ['name',"griditem1","griditem2","griditem3","griditem4","griditem5"]
		for (var i=0;i<colums.length;++i)
		{
			var td = document.createElement("td");
			td.textContent = document.getElementById(colums[i]).value;
			tr.appendChild(td)
		}	
		let five = 5;
		for(var i=1;i<=5;i++)
		{
		let grade = document.querySelector('#griditem'+i).value;
		if(grade < five)
			five = grade;
		}
		var td = document.createElement("td");
		if(five==5)
		{
			td.textContent = "отличник";
			Grade1++;
		}
		if(five==4)
		{
			td.textContent = "хорошист";
			Grade2++;
		}
		if(five==2)
		{
			td.textContent = "неуспевающий";
			Grade3++;
		}
		if(five < 2 || five==3)
		{
			td.textContent = "нет такого понятия";
		}
		tr.appendChild(td);
		/*{
			document.querySelector(".bz").innerHTML = ("отличник");
		}
			else if (grade == 4 && four == 1)
		{
			document.querySelector(".bz").innerHTML = ("хорошист");
			five = 0;
		}
			else if (grade == 2)
		{
			document.querySelector(".bz").innerHTML = ("неуспевающий");
			four = 0;
		}*/
		
		document.getElementById('tabl').appendChild(tr);
		document.querySelector('#Grade-1').innerHTML = (Grade1);
		document.querySelector('#Grade-2').innerHTML = (Grade2);
		document.querySelector('#Grade-3').innerHTML = (Grade3);
		
	}
	