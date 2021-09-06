# Project Name: Birthday Tracker
#### This web application aims at informing its user his or her AKAN name if given the exact date of birth.
#### Date developed: 5th Sept 2021
#### Developed by **Ivy Mureithi**, a programming student at Moringa School.

## Description
The Akan people of Ghana normally name their children after the day of the week they were born. The website takes in the gender and the date of birth through a form. From this, it is able to determine the day of the week the person was born and provide the Akan Name. The male Akan names include: Sunday: Kwasi, Monday: Kwadwo, Tuesday: Kwabena, Wednesday: Kwaku, Thursday: Yaw, Friday: Kofi, Saturday: Kwame The female Akan names include: Sunday: Akosua, Monday: Adwoa, Tuesday: Abenaa, Wednesday: Akua, Thursday: Yaa, Friday: Afua, Saturday: Ama

The user of this application enters his/her date of birth then submits the inputs. Depending on her gender, the application outputs his or her AKAN name. Just as easy as you have read it.

## Features Summary
Below is a brief summary of the features that the website provides:

 ~Input the gender (Either male or female)
 
 ~Input the year
 
 ~Input the month (must not be less than 1 and must not be more than 12)
 
 ~Input the day (must not be less than 1 and must not be more than 31)
 
 ~Output the Akan name

## Setup/ Installation Guide
*  To run this  application, click on the link https://MureithiIvy.github.io/BirthdayTracker
* Once the URL address loads  the application will immediately be ready to function.No more installation required!:)
* Enter your values  in the  input spaces provided then  click 'SUBMIT'.

## BDD
|Behaviour                  | Input       | Output              |
|--------------------------:|:-----------:|:--------------------
|Date is >31 or less than 0             |inputDate>31       | undefined AKAN name        
|Year is less than 1900 or >9999  |inputYear > 9999       | Invalid year
|Date and year are within range|0 < inputDate <31 > 1900 < inputDate <9999> | returns the users Akan name
|Month is out of range| 0 >inputMonth > 12  | Invalid Month 

 ## Technologies Used
For this application to be a success, the following languages were used:
* HTML
* JavaScript
* CSS
## Support and contact details
Feel free to reach me via email "ivy.mureithi@student.moringaschool.com"
Let me know any reviews or suggestions to better the application and keep keep it updated.
Always Available.
### License
MIT licence
GitHub copyrights (c)2021 **BirthdayTracker developed by @MureithiIvy.**  
