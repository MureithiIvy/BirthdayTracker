function submitFunction(){
    var inputDate = checkDate();
    var inputMonth = checkMonth();
    var inputYear = checkYear();
    var inputGender = checkGender();
    var calculateDay = findDayOfWeek(inputDate,inputMonth,inputYear);
    var contain = determineName(inputGender,calculateDay);
    alert("Your AKAN name is " + contain );
console.log(inputDate,inputMonth,inputYear +"line 9");


}

function checkDate(){
    var date = document.getElementById("date").value;
    if (date) {
        if (date>=1 && date<=31) {
            return date;
        }
        else{
            alert("date should be between 1-31");
        }
    }else{
        alert("enter a valid date")

    }
    

        
        
    }

    function checkMonth(){
        var month = document.getElementById("month").value;
        if (month) {
            if (month>=1 && month<=12) {
                return month;
            }
            else{
                alert("month should be between 1-12");
            }
        }else{
            alert("enter a valid month")
    
        }
        }

        function checkYear(){
            var year = document.getElementById("year").value;
            if (year) {
                if (year>=1000 && year<=9999) {
                    return year;
                }
                else{
                    alert("year should be between 1000-9999");
                }
            }else{
                alert("enter a valid year")
        
            }
            }

            function checkGender(){
                var gender = document.getElementById("pickGender").value;
                if (gender) {
                    if (gender=="male" || gender=="female") {
                        return gender;
                    }
                    else{
                        alert("gender should be male or female");
                    }
                }else{
                    alert("enter a valid gender")
            
                }
                }

                function findDayOfWeek(day,month,year) {
                    var DD = day;
                    var MM = month;
                    var YY = parseInt(String(year).slice(2,4));
                    var CC = parseInt(String(year).slice(0,2));
                    console.log(CC,YY,MM,DD + "line 83");
                    var DayOfWeek = Math.round( (  ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
                    var dayPerOrder = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    var orderOfDay = DayOfWeek-1;
                    var nameOfDay = dayPerOrder[orderOfDay];
                    alert nameOfDay;
                }

                function determineName(gender,dayOfWeek){
                    var dayGender= {
                        male:{
                            Sunday : 'Kwasi',
                            Monday : 'Kwadwo',
                            Tuesday : 'Kwabena',
                            Wednesday : 'Kwaku',
                            Thursday : 'Yaw',
                            Friday : 'Kofi',
                            Saturday : 'Kwame'
                        },
                        female:{
                            Sunday : 'Akosua',
                            Monday : 'Adwoa',
                            Tuesday : 'Abenaa',
                            Wednesday : 'Akua',
                            Thursday : 'Yaa',
                            Friday : 'Afua',
                            Saturday : 'Ama'

                        }
                    }
                    return dayGender[gender][dayOfWeek];
                }
    

        
