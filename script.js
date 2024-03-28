function twoColors() // color rows in the table
{
	let tableRows = document.getElementsByTagName("tr");
	
	for(let i =0; i<tableRows.length; i++)
	{
			
			if(tableRows[i].style.backgroundColor == "red")
			{
				continue
			}
			else if(i % 2 == 0)
			{
				
				tableRows[i].style.backgroundColor="green";
			}
			else
			{
				tableRows[i].style.backgroundColor="yellow";	
					
			}
	}
	
	
}

function select(e) // changing  color of the clicked row 
{
	if(e.style.backgroundColor == "red")
	{
		
		e.style.backgroundColor="cyan"; // if unclicked ( red already) change color  to cyan and re-color the entire table
		twoColors();
	}
	else
	{
		e.style.backgroundColor="red"; // changing  color of the clicked row to red
	}
}


function removeRow()
{
		let tableRows = document.getElementsByTagName("tr");

	
		for(let i=0; i<tableRows.length; i++)
		{
			
			if(tableRows[i].style.backgroundColor == "red") // delete red row
			{
				
				tableRows[i].remove(); //remove  one of the  red rows
				removeRow(); // search for the next red row 
				return 0;
			
			}
		}
			
		twoColors()
		
		
		let rowsSum = document.getElementById("suma");

		rowsSum.innerText= "Liczba wierszy: " + tableRows.length;
	
		
}



function addRow()
{

	let addTab = document.getElementsByTagName("tr");

	let myTable = document.getElementById("mainTable");
	
	// create row cells
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	let td3 = document.createElement("td");
	let td4 = document.createElement("td");
	// create arrows in last cell
	td4.innerHTML ='<button onclick="upButton(this)">&ShortUpArrow; </button> <button onclick ="downButton(this)"> &ShortDownArrow;</button>';
	

	let text1 = document.createTextNode("Zwycięzca");
	let text2 = document.createTextNode("Miejsce");
	let text3 = document.createTextNode("Data");
	
	td1.appendChild(text1);
	td2.appendChild(text2);
	td3.appendChild(text3);
	
	
	// create new row
	newRow = document.createElement("tr");
	
	// add cells to new row
	newRow.appendChild(td1);
	newRow.appendChild(td2);
	newRow.appendChild(td3);
	newRow.appendChild(td4);
	
	// add atributes to new row
	newRow.setAttribute("onclick", "select(this)");
	newRow.setAttribute("class", "rows");
	
	myTable.appendChild(newRow);
	
	// color table after adding new row 
	twoColors()
	
	// display information abaut  sum of rows
	let rowsSum = document.getElementById("suma");
	
	rowsSum.innerText= "Liczba wierszy: " + addTab.length;
	
}




function upArrow() // move up selected rows
{
		let myTable = document.getElementById("mainTable");
		let rowsTab = document.getElementsByTagName("tr");
		
		
		for(let i=0; i<rowsTab.length; i++) // go from top to down
		{
			
			if(rowsTab[i].style.backgroundColor == "red") // red row is selected
			{

				
				if(i>0 && i<rowsTab.length)
				{
					myTable.insertBefore(rowsTab[i], rowsTab[i-1]); // switching places between selected row and its upper neighbor
				
				}
				
			}
		
		}

}


function downArrow()//  move down selected rows
{
		let myTable = document.getElementById("mainTable");
		let rowsTab = document.getElementsByTagName("tr");
		
		
		for(let i = rowsTab.length-1; i>=0; i--)// go from down to top
		{
					
			if( i < rowsTab.length-1)
			{
				if(rowsTab[i].style.backgroundColor == "red") // red row is selected
				{
					myTable.insertBefore(rowsTab[i+1],rowsTab[i]); // switching places between selected row and its lower  neighbor
								
				}
			}
		}
		
	
}



function enterData()
{
	
	let rowsTab = document.getElementsByTagName("tr");

		// read input from HTML input
		zwy = document.getElementById("winner").value;
		miej = document.getElementById("place").value;
		dat = document.getElementById("date").value;
		

	for(let i=0; i<rowsTab.length; i++)
		{
			if(rowsTab[i].style.backgroundColor == "red") // change text in selected rows
			{
					rowsTab[i].childNodes[0].innerText = zwy;
					rowsTab[i].childNodes[1].innerText = miej;
					rowsTab[i].childNodes[2].innerText = dat;

			}
		
		}
}



function upButton(e) // move up particular row
{

		let chosenTr = e.parentNode.parentNode;

		let myTable = document.getElementById("mainTable");

		if(chosenTr.previousElementSibling !== null)
		{	
			myTable.insertBefore(chosenTr, chosenTr.previousElementSibling); // move up if row isn't first

		}

		twoColorsPower(); // unselect other rows and  color the entire table
	
}


function downButton(e) // move down particular row
{

		let chosenTr = e.parentNode.parentNode;

		
		let myTable = document.getElementById("mainTable");

	
		if(chosenTr.nextElementSibling === null) // last one 
		{	
				// cannot move down


		}
		else if (chosenTr.nextElementSibling.nextElementSibling === null) // penultimate
		{ 
			
			myTable.appendChild(chosenTr); //move chosen tr to the last place

		}
		else if(chosenTr.nextElementSibling.nextElementSibling !== null) // can move down 
		{
			// move down ( insert before second neighbor )
			myTable.insertBefore(chosenTr, chosenTr.nextElementSibling.nextElementSibling); 


		}

		twoColorsPower();
	
}


function twoColorsPower() // color entire table (including selected rows)
{
	let rowsTab = document.getElementsByTagName("tr");
	
	for(let i =0; i<rowsTab.length; i++)
	{
						
			if(i % 2 == 0)
			{
				
				rowsTab[i].style.backgroundColor="green";				
			}
			else
			{
				rowsTab[i].style.backgroundColor="yellow";					
			}
	}
	
	
}

// insert few rows 
addRow();
addRow();
addRow();
addRow();
addRow();


