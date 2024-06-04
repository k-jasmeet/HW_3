/*
file: script.js
GUI Assignment: HW3 creating an interactive table
Jasmeet Kaur, UMass Lowell Computer Science, jasmeet_kaur@student.uml.edu
Copyright (c) 2024 by Jasmeet. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
*/
document.addEventListener('DOMContentLoaded', function() 
{
    var form = document.getElementById('multiplicationForm'); // get elements from form
    
    form.addEventListener('submit', function(event) //make sure the form "submits" and triggers the js code
    {
        event.preventDefault();
        generateTable();
    });

    var inputFields = form.querySelectorAll('input[type="number"]');
    inputFields.forEach(function(input) {
        input.addEventListener('input', function() 
        {
            generateTable();
        });
    });

    function generateTable() 
    {
        // get the integers entered and assign them to variables
        var startHorizontal = parseInt(document.getElementById('startHorizontal').value);
        var endHorizontal = parseInt(document.getElementById('endHorizontal').value);
        var startVertical = parseInt(document.getElementById('startVertical').value);
        var endVertical = parseInt(document.getElementById('endVertical').value);
        //error handling - making sure what was entered were integers and nothing else
        if (isNaN(startHorizontal) || isNaN(endHorizontal) || isNaN(startVertical) || isNaN(endVertical))
        {
            document.getElementById('error-message').textContent = 'Please enter valid numbers.';
            return;
        }

        document.getElementById('error-message').textContent = '';
        //intialize the html to create the table 
        var tableHTML = '<thead><tr><th></th>';
        //create the header for horizontal
        for (var horizontal = startHorizontal; horizontal <= endHorizontal; horizontal++) 
        {
            tableHTML += '<th>' + horizontal + '</th>';
        }
        //create the header for the vertical
        tableHTML += '</tr></thead><tbody>';
        for (var vertical = startVertical; vertical <= endVertical; vertical++) 
        {
            tableHTML += '<tr><th>' + vertical + '</th>';
            //add the numbers that are being multiplied to the table
            for (var horizontal = startHorizontal; horizontal <= endHorizontal; horizontal++) 
            {
                tableHTML += '<td>' + (v * horizontal) + '</td>';
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</tbody>';
        //show the table on the screen 
        document.getElementById('multiplicationTable').innerHTML = tableHTML;
    }
});
