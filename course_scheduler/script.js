"use strict";

//supporting functions
var renderTable = function () {
    for (var i = 0; i < the_data.length; i++) {
        var the_table_row = "<tr><td>"
            + the_data[i]["Course"] + "</td><td>"
            + the_data[i]["Title"] + "</td><td>"
            + the_data[i]["Day&Time"] + "</td><td>"
            + the_data[i]["Instructor"] + "</td><td>"
            + the_data[i]["CRN"] + "</td></tr>";
        //console.log(the_table_row);
        $("#table_of_courses").append(the_table_row);
    } // end for loop
}; // end renderTable function

//Declare Variables for Use in Scheduler
var scheduleData = function () {
    for (var i = 0; i < the_data.length; i++) {
        var course = the_data[i]["Course"];
        var title = the_data[i]["Title"];
        var dayTime = the_data[i]["Day&Time"];
<<<<<<< HEAD

        //split dayTime into seperate variables

        if (dayTime.search("\n") != -1) {
            var dayTimeArray = dayTime.split("\n");
        } else {
            var dayTimeArray = dayTime.split(" ");
        }

        var day = dayTimeArray[0];
        var time = dayTimeArray[1];
        var timeArray = time.split("-");
        var timeStart = timeArray[0];
        var timeEnd = timeArray[1];
        var instructor = the_data[i]["Instructor"];
        var crn = the_data[i]["CRN"];
        //console.log(course + " --- " + title + " --- " + day + " --- " + timeStart + " --- " + timeEnd + " --- " + instructor + " --- " + crn);

        var date = day.split("");
    /*    var schedule = [];
        for (var i = 0; i < date.length; i++) {
            schedule[0] = date[i];
            schedule[1] = timeStart;
            schedule[2] = timeEnd;
        } */
        console.log(date);
=======
        
        //split dayTime into seperate variables
        var day = dayTime.split(" ");
        var timeStart = dayTime.split("-");
        var timeEnd = dayTime.split("-");
        
        var instructor = the_data[i]["Instructor"];
        var crn = the_data[i]["CRN"];
        //console.log(course + " --- " + title + " --- " + dayTime + " --- " + instructor + " --- " + crn);
        console.log(day + " --- " + timeStart + " --- " + timeEnd);
>>>>>>> origin

    }
};

//document ready section
$(document).ready(function () {

    //define what happens when the "Go" button is clicked
    $("#go").click(function () {
        //what are we doing here?
        $("#table_of_courses").html("<tr> <th> Course </th><th> Title </th><th> Day & Time </th><th> Instructor </th><th> CRN </th></tr>"); //reset table before adding new table elements
        renderTable();
        scheduleData();
    }); // end click() method
}); // end ready() method

//course data for Temple University Japan Campus Fall 2019
//taken from https://ug-schedules.tuj.ac.jp/ug/academics/semester-info/schedule/fall2019
var the_data = [
    {
        "Course": "Math 1031 (801)",
        "Title": "Differential and Integral Calculus",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Bacani, D.",
        "CRN": "40500"
    },
    {
        "Course": "As St 2011 (801)",
        "Title": "Survey of Japanese Literature before 1868",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Nagai, M.",
        "CRN": "40561"
    },
    {
        "Course": "IH 0852 (803)",
        "Title": "IH II: The Common Good",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Rosenkjar, P.",
        "CRN": "40681"
    },
    {
        "Course": "Japanese 1001 (804)",
        "Title": "Japanese Elements I",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Ichimura, Y.",
        "CRN": "40311"
    },
    {
        "Course": "Lib Arts 2020 (802)",
        "Title": "Special Topics in Liberal Arts II: International Career Strategies",
        "Day&Time": "W\n18:00-19:50",
        "Instructor": "Kaieda, R. & Sawa, K.",
        "CRN": "40511"
    },
    {
        "Course": "Math 2031 (801)",
        "Title": "Probability and Statistics",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Tserolas, V.",
        "CRN": "40498"
    },
    {
        "Course": "Psych 1002 (801)",
        "Title": "Careers in Psychology",
        "Day&Time": "T\n15:50-17:00",
        "Instructor": "Morsbach, H.",
        "CRN": "40470"
    },
    {
        "Course": "Math 1031 (802)",
        "Title": "Differential and Integral Calculus",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Fonseca, J.",
        "CRN": "40501"
    },
    {
        "Course": "Art Hist 2644 (801)",
        "Title": "Modern Art: 1945 to the Present",
<<<<<<< HEAD
        "Day&Time": "MWF\n12:40-14:00",
=======
        "Day&Time": "MWF 12:40-14:00",
>>>>>>> origin
        "Instructor": "Nettleton, T.",
        "CRN": "40379"
    },
    {
        "Course": "IBS 3101 (811)",
        "Title": "Introduction to Global Finance",
        "Day&Time": "MWF\n12:40-13:40",
        "Instructor": "Hongo, A.",
        "CRN": "40515"
    },
    {
        "Course": "Psych 3096 (801)",
        "Title": "Conducting Psychological Research",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Angel, A.",
        "CRN": "40473"
    },
    {
        "Course": "Am St 0862 (801)",
        "Title": "First Person America",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Clark, W.",
        "CRN": "40559"
    },
    {
        "Course": "Pol Sci 0864 (801)",
        "Title": "War and Peace",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Salmons, R.",
        "CRN": "40570"
    },
    {
        "Course": "IH 0851 (806)",
        "Title": "IH I: The Good Life",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Mackin, Z.",
        "CRN": "40677"
    },
    {
        "Course": "CIS 0835 (801)",
        "Title": "Cyberspace & Society",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Karam, H.",
        "CRN": "40486"
    },
    {
        "Course": "Japanese 2017 (801)",
        "Title": "Stories of Parents and Children in Japanese Literature and Film",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Nagai, M.",
        "CRN": "40564"
    },
    {
        "Course": "Psych 2502 (801)",
        "Title": "Foundations of Cognitive Neuroscience",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Tserolas, V.",
        "CRN": "40477"
    },
    {
        "Course": "IH 0851 (803)",
        "Title": "IH I: The Good Life",
        "Day&Time": "MWF\n15:20-16:20",
        "Instructor": "Azzopardi, M.",
        "CRN": "40674"
    },
    {
        "Course": "Pol Sci 2314 (801)",
        "Title": "Politics of International Law",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Bansal, V.",
        "CRN": "40662"
    },
    {
        "Course": "Theat 0825 (802)",
        "Title": "The Art of Acting",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Roberts, W.",
        "CRN": "40382"
    },
    {
        "Course": "Art Hist 2815 (802)",
        "Title": "Pre-Modern Japanese Art",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Staff, T.",
        "CRN": "40454"
    },
    {
        "Course": "CSI 1111 (801)",
        "Title": "Introduction to Public Speaking",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Parham, C.",
        "CRN": "40384"
    },
    {
        "Course": "Art 3813 (802)",
        "Title": "Advanced Art Photography: Digital",
<<<<<<< HEAD
        "Day&Time": "MW\n14:10-16:40",
=======
        "Day&Time": "MW 14:10-16:40",
>>>>>>> origin
        "Instructor": "Watanabe, S.",
        "CRN": "42003"
    },
    {
        "Course": "Art 2601 (801)",
        "Title": "Computer Imaging",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Kubota, T.",
        "CRN": "40614"
    },
    {
        "Course": "Comm St 1111 (801)",
        "Title": "Communication and Public Life",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Carr, R.",
        "CRN": "40392"
    },
    {
        "Course": "Art 2301 (802)",
        "Title": "Relief Printmaking",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh\n9:20-11:50",
>>>>>>> origin
        "Instructor": "Wilds, K.",
        "CRN": "40587"
    },
    {
        "Course": "Mktg 2101 (801)",
        "Title": "Marketing Management",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Singh, M.",
        "CRN": "40496"
    },
    {
        "Course": "Art 2301 (801)",
        "Title": "Relief Printmaking",
        "Day&Time": "MW\n16:50-19:20",
        "Instructor": "Rouse, L.",
        "CRN": "40586"
    },
    {
        "Course": "Econ 3564 (801)",
        "Title": "International Monetary Economics",
        "Day&Time": "MWF\n10:00-11:00",
        "Instructor": "Tanaka, M.",
        "CRN": "40491"
    },
    {
        "Course": "Art 2812 (801)",
        "Title": "Intermediate Art Photography: Digital",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Watanabe, S.",
        "CRN": "40608"
    },
    {
        "Course": "Phil 0847 (801)",
        "Title": "The Meaning of the Arts",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Azzopardi, M.",
        "CRN": "40694"
    },
    {
        "Course": "Bridge 0800 (801)",
        "Title": "General Education Support",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "B800A"
    },
    {
        "Course": "As St 2511 (801)",
        "Title": "Introduction to Asian Business",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40485"
    },
    {
        "Course": "GUS 0831 (801)",
        "Title": "Global Cities",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Bansal, B.",
        "CRN": "40688"
    },
    {
        "Course": "Art 1201 (803)",
        "Title": "Introduction to Visual Language: 3-D Design",
<<<<<<< HEAD
        "Day&Time": "WF\n14:10-16:40",
=======
        "Day&Time": "WF 14:10-16:40",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40576"
    },
    {
        "Course": "Mus St 0812 (801)",
        "Title": "Exploring Music",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Horton, L.",
        "CRN": "40461"
    },
    {
        "Course": "MSP 1701 (801)",
        "Title": "Introduction to Media Technology",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Lipartito, J.",
        "CRN": "40398"
    },
    {
        "Course": "Art 4796 (801)",
        "Title": "Art Seminar",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-18:20",
=======
        "Day&Time": "TTh 15:50-18:20",
>>>>>>> origin
        "Instructor": "Watanabe, S. & Kubota, T.",
        "CRN": "40606"
    },
    {
        "Course": "Bridge 0400 (802)",
        "Title": "Bridge Tutorial",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "B400B"
    },
    {
        "Course": "Japanese 3002 (801)",
        "Title": "Advanced Japanese II",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Machida, Y.",
        "CRN": "40333"
    },
    {
        "Course": "Art 1401 (803)",
        "Title": "Introduction to Visual Language: Drawing",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh\n9:20-11:50",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40603"
    },
    {
        "Course": "CIS 1051 (801)",
        "Title": "Introduction to Problem Solving and Programming in Python",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Karam, H.",
        "CRN": "40487"
    },
    {
        "Course": "Japanese 1001 (802)",
        "Title": "Japanese Elements I",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Kabe, Y.",
        "CRN": "40309"
    },
    {
        "Course": "Art Hist 2096 (801)",
        "Title": "Art History Writing Intensive: Eurasia: Connecting European and Asian Art and Culture",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Watanabe, S.",
        "CRN": "40458"
    },
    {
        "Course": "Pol Sci 0866 (801)",
        "Title": "World Affairs",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Ono, K.",
        "CRN": "40656"
    },
    {
        "Course": "As St 2351 (801)",
        "Title": "Japan in a Changing World Order",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Cucek, M.",
        "CRN": "40571"
    },
    {
        "Course": "Engl 0812 (806)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Chambers, J.",
        "CRN": "40352"
    },
    {
        "Course": "As St 3541 (801)",
        "Title": "Japan Today",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Kingston, J.",
        "CRN": "40465"
    },
    {
        "Course": "Math 1021 (802)",
        "Title": "College Algebra",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Bacani, D.",
        "CRN": "40504"
    },
    {
        "Course": "Art 4249 (801)",
        "Title": "3-D Portfolio",
<<<<<<< HEAD
        "Day&Time": "WF\n16:50-19:20",
=======
        "Day&Time": "WF 16:50-19:20",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40579"
    },
    {
        "Course": "Japanese 2701 (803)",
        "Title": "TUJ - Japanese Intermediate I",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Toyoizumi, N.",
        "CRN": "40326"
    },
    {
        "Course": "Jour 3706 (801)",
        "Title": "Journalism and Globalization",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Herrera, I.",
        "CRN": "40389"
    },
    {
        "Course": "Art 2812 (803)",
        "Title": "Intermediate Art Photography: Digital",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Watanabe, S.",
        "CRN": "40605"
    },
    {
        "Course": "Art 3813 (801)",
        "Title": "Advanced Art Photography: Digital",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Watanabe, S.",
        "CRN": "40609"
    },
    {
        "Course": "Art 4849 (802)",
        "Title": "Art Photography Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40635"
    },
    {
        "Course": "Pol Sci 1101 (801)",
        "Title": "The American Political System",
        "Day&Time": "MWF\n10:20-11:20",
        "Instructor": "Numata, C.",
        "CRN": "40567"
    },
    {
        "Course": "Art 1401 (801)",
        "Title": "Introduction to Visual Language: Drawing",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Wilds, K.",
        "CRN": "40597"
    },
    {
        "Course": "Art 4349 (801)",
        "Title": "Printmaking Portfolio",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Rouse, L.",
        "CRN": "40585"
    },
    {
        "Course": "Japanese 2701 (802)",
        "Title": "TUJ - Japanese Intermediate I",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Takahashi, K.",
        "CRN": "40325"
    },
    {
        "Course": "Phys 0847 (801)",
        "Title": "How Things Work: The Physics of Everyday Life",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Matsui, T.",
        "CRN": "40683"
    },
    {
        "Course": "Psych 3620 (801)",
        "Title": "Topics in Psychology: Prejudice and Discrimination in Japan",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Htun, T.",
        "CRN": "40479"
    },
    {
        "Course": "Psych 3003 (801)",
        "Title": "Advanced Undergraduate Statistics",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Angel, A.",
        "CRN": "40472"
    },
    {
        "Course": "Art 4449 (801)",
        "Title": "Drawing Portfolio",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Kubota, T.",
        "CRN": "40601"
    },
    {
        "Course": "As St 3000 (802)",
        "Title": "Special Topics in Asian Studies II: Korean Politics",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Satterwhite, D.",
        "CRN": "40646"
    },
    {
        "Course": "Econ 3547 (801)",
        "Title": "Economics of Development and Growth",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Bansal, B.",
        "CRN": "40531"
    },
    {
        "Course": "Art 4348 (801)",
        "Title": "Printmaking Workshop",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40628"
    },
    {
        "Course": "Japanese 1002 (804)",
        "Title": "Japanese Elements II",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Yamaguchi, A.",
        "CRN": "40316"
    },
    {
        "Course": "Pol Sci 0859 (801)",
        "Title": "The Making of American Society: Melting Pot or Culture Wars?",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Numata, C.",
        "CRN": "40568"
    },
    {
        "Course": "Art 2102 (801)",
        "Title": "Intermediate Painting",
<<<<<<< HEAD
        "Day&Time": "MW\n14:10-16:40",
=======
        "Day&Time": "MW 14:10-16:40",
>>>>>>> origin
        "Instructor": "Sakurai, K.",
        "CRN": "40591"
    },
    {
        "Course": "Jour 3701 (801)",
<<<<<<< HEAD
        "Title": "Contemporary Media Issues: Journalism and Japan's Geopolitical Impact on The World",
        "Day&Time": "TR\n12:00-13:30",
=======
        "Title": "Contemporary Media Issues: Journalism and Japan's Geopolitical Impact on the World",
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Murakami, Y.",
        "CRN": "40385"
    },
    {
        "Course": "As St 3247 (801)",
        "Title": "Ideology and Social Change in Japan",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Cleveland, K.",
        "CRN": "40670"
    },
    {
        "Course": "Japanese 2003 (801)",
        "Title": "Oral Intensive Japanese II: Oral Intensive II",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Okada, C.",
        "CRN": "40321"
    },
    {
        "Course": "Econ 0858 (801)",
        "Title": "The American Economy",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Ofori, S.",
        "CRN": "40520"
    },
    {
        "Course": "Art 4849 (804)",
        "Title": "Art Photography Portfolio",
<<<<<<< HEAD
        "Day&Time": "MW\n14:10-16:40",
=======
        "Day&Time": "MW 14:10-16:40",
>>>>>>> origin
        "Instructor": "Watanabe, S.",
        "CRN": "42006"
    },
    {
        "Course": "Psych 1001 (801)",
        "Title": "Introduction to Psychology",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Yamamiya, Y.",
        "CRN": "40469"
    },
    {
        "Course": "IBS 4596 (801)",
        "Title": "International Business Capstone",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Swinton, W.",
        "CRN": "40518"
    },
    {
        "Course": "CIS 2107 (801)",
        "Title": "Computer Systems and Low-Level Programming",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Karam, H.",
        "CRN": "40489"
    },
    {
        "Course": "IH 0851 (805)",
        "Title": "IH I: The Good Life",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Mackin, Z.",
        "CRN": "40676"
    },
    {
        "Course": "Econ 1101 (801)",
        "Title": "Macroeconomic Principles",
        "Day&Time": "MWF\n10:00-11:00",
        "Instructor": "Kahy, H.",
        "CRN": "40521"
    },
    {
        "Course": "Art 4448 (801)",
        "Title": "Drawing Workshop",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40630"
    },
    {
        "Course": "Engl 0812 (803)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Angel, A.",
        "CRN": "40349"
    },
    {
        "Course": "Math 0701 (801)",
        "Title": "Elementary Algebra",
        "Day&Time": "MWF\n8:30-9:50",
        "Instructor": "Mino, S.",
        "CRN": "40507"
    },
    {
        "Course": "Econ 1101 (802)",
        "Title": "Macroeconomic Principles",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40522"
    },
    {
        "Course": "Art Hist 2098 (801)",
        "Title": "Art History Writing Intensive: Art and Queer Theory",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Nettleton, T.",
        "CRN": "40402"
    },
    {
        "Course": "Pol Sci 1201 (801)",
        "Title": "Foreign Governments and Politics",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Kakizaki, M.",
        "CRN": "40661"
    },
    {
        "Course": "Japanese 4296 (801)",
        "Title": "Seminar in Japanese and Japan: Business",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Matsuhashi, Y.",
        "CRN": "40339"
    },
    {
        "Course": "Art 4849 (803)",
        "Title": "Art Photography Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh 13:10-15:40",
>>>>>>> origin
        "Instructor": "Tsai, P.",
        "CRN": "42002"
    },
    {
        "Course": "Math 1021 (801)",
        "Title": "College Algebra",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Mino Avila, E.",
        "CRN": "40503"
    },
    {
        "Course": "Korean 2001 (801)",
        "Title": "Korean Intermediate I",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Park, K.",
        "CRN": "40304"
    },
    {
        "Course": "Japanese 2631 (801)",
        "Title": "Structure of Japanese Language I",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Takahashi, K.",
        "CRN": "40323"
    },
    {
        "Course": "Econ 3408 (801)",
        "Title": "Economics for Life",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Ofori, S.",
        "CRN": "40526"
    },
    {
        "Course": "Art 1101 (802)",
        "Title": "Introduction to Visual Language: Painting",
<<<<<<< HEAD
        "Day&Time": "MW\n8:50-11:20",
=======
        "Day&Time": "MW 8:50-11:20",
>>>>>>> origin
        "Instructor": "Sakurai, K.",
        "CRN": "40590"
    },
    {
        "Course": "Art 2351 (801)",
        "Title": "Artist Books, Zines and Independent Publishing",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Wilds, K.",
        "CRN": "40588"
    },
    {
        "Course": "Biol 0848 (801)",
        "Title": "DNA: Friend or Foe",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Hornia, A.",
        "CRN": "40685"
    },
    {
        "Course": "Engl 0802 (802)",
        "Title": "Analytical Reading and Writing",
<<<<<<< HEAD
        "Day&Time": "TR\n8:10-10:10",
=======
        "Day&Time": "TTh\n8:10-10:10",
>>>>>>> origin
        "Instructor": "Arnold, S.",
        "CRN": "40342"
    },
    {
        "Course": "IH 0852 (801)",
        "Title": "IH II: The Common Good",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Sekulovski, J.",
        "CRN": "40679"
    },
    {
        "Course": "Engl 0812 (804)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Angel, A.",
        "CRN": "40350"
    },
    {
        "Course": "Art 2402 (801)",
        "Title": "Intermediate Drawing",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Kubota, T.",
        "CRN": "40599"
    },
    {
        "Course": "Psych 2401 (801)",
        "Title": "Foundations of Social Psychology",
<<<<<<< HEAD
        "Day&Time": "MWF\n14:10-15:10",
=======
        "Day&Time": "MWF 14:10-15:10",
>>>>>>> origin
        "Instructor": "Zimmerman, S.",
        "CRN": "42061"
    },
    {
        "Course": "Art 3103 (801)",
        "Title": "Advanced Painting",
        "Day&Time": "MW 14:10-16:40",
        "Instructor": "Sakurai, K.",
        "CRN": "40592"
    },
    {
        "Course": "Math 0823 (801)",
        "Title": "Math for a Digital World",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Bedard, B.",
        "CRN": "40506"
    },
    {
        "Course": "MSP 4153 (801)",
        "Title": "Media Criticism",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Fujiwara, C.",
        "CRN": "40387"
    },
    {
        "Course": "Art 4648 (801)",
        "Title": "Computer Imaging Workshop",
<<<<<<< HEAD
        "Day&Time": "TR 9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40632"
    },
    {
        "Course": "Jour 3403 (801)",
        "Title": "Documentary Photography",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Miller, G.",
        "CRN": "41100"
    },
    {
        "Course": "Art 4149 (801)",
        "Title": "Painting Portfolio",
        "Day&Time": "MW 14:10-16:40",
        "Instructor": "Sakurai, K.",
        "CRN": "40593"
    },
    {
        "Course": "Hist 0834 (801)",
        "Title": "Representing Race",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Mock, J.",
        "CRN": "40695"
    },
    {
        "Course": "As St 2815 (802)",
        "Title": "Japanese Art",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Staff, T.",
        "CRN": "40455"
    },
    {
        "Course": "Japanese 4001 (801)",
        "Title": "Japanese Advanced III",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Osada, R.",
        "CRN": "40337"
    },
    {
        "Course": "Art 2302 (801)",
        "Title": "Intermediate Printmaking: Relief",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Rouse, L.",
        "CRN": "40583"
    },
    {
        "Course": "Art 4349 (802)",
        "Title": "Printmaking Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR 9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40629"
    },
    {
        "Course": "IH 0852 (802)",
        "Title": "IH II: The Common Good",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Sekulovski, J.",
        "CRN": "40680"
    },
    {
        "Course": "Lib Arts 1002 (801)",
        "Title": "Professional Development for Liberal Arts Majors",
<<<<<<< HEAD
        "Day&Time": "R\n18:00-18:55",
=======
        "Day&Time": "Th\n18:00-18:55",
>>>>>>> origin
        "Instructor": "Sawa, K. & Adams, E.",
        "CRN": "40508"
    },
    {
        "Course": "Engl 0812 (805)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Chambers, J.",
        "CRN": "40351"
    },
    {
        "Course": "As St 2017 (801)",
        "Title": "Stories of Parents and Children in Japanese Literature and Film",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Nagai, M.",
        "CRN": "40563"
    },
    {
        "Course": "Art 3203 (801)",
        "Title": "Advanced 3-D",
        "Day&Time": "WF 16:50-19:20",
        "Instructor": "Staff, T.",
        "CRN": "40578"
    },
    {
        "Course": "CIS 2166 (801)",
        "Title": "Mathematical Concepts in Computing II",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Tserolas, V.",
        "CRN": "40490"
    },
    {
        "Course": "Lib Arts 1002 (802)",
        "Title": "Professional Development for Liberal Arts Majors",
        "Day&Time": "T\n17:55-19:00",
        "Instructor": "Sawa, K. & Adams, E.",
        "CRN": "40509"
    },
    {
        "Course": "Comm St 1111 (802)",
        "Title": "Communication and Public Life",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Carr, R.",
        "CRN": "40393"
    },
    {
        "Course": "Japanese 2702 (801)",
        "Title": "TUJ - Japanese Intermediate II",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Kabe, Y.",
        "CRN": "40328"
    },
    {
        "Course": "Art 2812 (802)",
        "Title": "Intermediate Art Photography: Digital",
<<<<<<< HEAD
        "Day&Time": "TR 13:10-15:40",
=======
        "Day&Time": "TTh 13:10-15:40",
>>>>>>> origin
        "Instructor": "Tsai, P.",
        "CRN": "40612"
    },
    {
        "Course": "Art 2202 (802)",
        "Title": "Intermediate 3-D",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-18:20",
=======
        "Day&Time": "TTh\n15:50-18:20",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40580"
    },
    {
        "Course": "Hist 1702 (801)",
        "Title": "World History: Modern",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Tyner, C.",
        "CRN": "40650"
    },
    {
        "Course": "Span 1001 (801)",
        "Title": "Basic I",
        "Day&Time": "MWF\n18:00-19:20",
        "Instructor": "Oviedo Ceron, A.",
        "CRN": "40301"
    },
    {
        "Course": "Mus St 0802 (801)",
        "Title": "The Art of Listening",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Horton, L.",
        "CRN": "40459"
    },
    {
        "Course": "Comm St 2111 (801)",
        "Title": "Communications Seminar",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Carr, R.",
        "CRN": "40394"
    },
    {
        "Course": "Engl 0802 (801)",
        "Title": "Analytical Reading and Writing",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Chozick, M.",
        "CRN": "40341"
    },
    {
        "Course": "Art Hist 3302 (801)",
        "Title": "Women and Art",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "MacDonald, D.",
        "CRN": "40380"
    },
    {
        "Course": "Art 4249 (803)",
        "Title": "3-D Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR 9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40627"
    },
    {
        "Course": "As St 2373 (801)",
        "Title": "Japanese Culture",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Mock, J.",
        "CRN": "40697"
    },
    {
        "Course": "Art 1201 (801)",
        "Title": "Introduction to Visual Language: 3-D Design",
        "Day&Time": "WF 11:30-14:00",
        "Instructor": "Staff, T.",
        "CRN": "40574"
    },
    {
        "Course": "Pol Sci 2351 (801)",
        "Title": "Japan in a Changing World Order",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Cucek, M.",
        "CRN": "40572"
    },
    {
        "Course": "Art 1201 (802)",
        "Title": "Introduction to Visual Language: 3-D Design",
<<<<<<< HEAD
        "Day&Time": "TR 9:20-11:50",
=======
        "Day&Time": "TTh 9:20-11:50",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40575"
    },
    {
        "Course": "Pol Sci 2503 (801)",
        "Title": "Evidence and Knowledge",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Kakizaki, M.",
        "CRN": "40658"
    },
    {
        "Course": "Engl 0812 (802)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Keefe, K.",
        "CRN": "40348"
    },
    {
        "Course": "Hist 3229 (801)",
        "Title": "Superpower America",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Kingston, J.",
        "CRN": "40464"
    },
    {
        "Course": "TUJ 1001 (801)",
        "Title": "Bridge Seminar 1",
        "Day&Time": "T\n17:30-18:35",
        "Instructor": "Staff, T.",
        "CRN": "40666"
    },
    {
        "Course": "Japanese 1001 (805)",
        "Title": "Japanese Elements I",
        "Day&Time": "MWF\n8:30-9:50",
        "Instructor": "Saito, J.",
        "CRN": "40312"
    },
    {
        "Course": "Math 1041 (811)",
        "Title": "Calculus I",
        "Day&Time": "MWF\n18:00-19:20",
        "Instructor": "Bacani, D.",
        "CRN": "40499"
    },
    {
        "Course": "IBS 4197 (801)",
        "Title": "Global Business Overview",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Hongo, A.",
        "CRN": "40517"
    },
    {
        "Course": "As St 3076 (801)",
        "Title": "Metropolitan Tokyo",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Bansal, B.",
        "CRN": "40689"
    },
    {
        "Course": "Pol Sci 3203 (801)",
        "Title": "Comparative Politics of Democratization",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "MacDougall, T.",
        "CRN": "40657"
    },
    {
        "Course": "MSP 2751 (801)",
        "Title": "Audio for Media",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Lipartito, J. & Perkinson, A.",
        "CRN": "40399"
    },
    {
        "Course": "Pol Sci 3520 (801)",
        "Title": "Special Topics: Research Preparation Seminar: Korean Politics",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Satterwhite, D.",
        "CRN": "40647"
    },
    {
        "Course": "Art 3203 (802)",
        "Title": "Advanced 3-D",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-18:20",
=======
        "Day&Time": "TTh\n15:50-18:20",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40581"
    },
    {
        "Course": "Engl 0802 (803)",
        "Title": "Analytical Reading and Writing",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Arnold, S.",
        "CRN": "40343"
    },
    {
        "Course": "Art 4449 (803)",
        "Title": "Drawing Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40624"
    },
    {
        "Course": "Bridge 0600 (801)",
        "Title": "Workshop for Foundations of Academic Writing",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "B600A"
    },
    {
        "Course": "Japanese 1001 (803)",
        "Title": "Japanese Elements I",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Kiyama (Murakami), T.",
        "CRN": "40310"
    },
    {
        "Course": "Art 4248 (801)",
        "Title": "3-D Workshop",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40626"
    },
    {
        "Course": "Art 2835 (801)",
        "Title": "Art Photography: Moving Image",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Lynam, I.",
        "CRN": "40607"
    },
    {
        "Course": "MSP 4445 (801)",
        "Title": "Media Images and Analysis",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Herrera, I.",
        "CRN": "40391"
    },
    {
        "Course": "Art 2202 (801)",
        "Title": "Intermediate 3-D",
        "Day&Time": "WF 16:50-19:20",
        "Instructor": "Staff, T.",
        "CRN": "40577"
    },
    {
        "Course": "FMA 3696 (812)",
        "Title": "Writing Intensive in Film Study: Music and American Film since 1956",
        "Day&Time": "TTh 15:50-17:50",
        "Instructor": "Fujiwara, C.",
        "CRN": "41915"
    },
    {
        "Course": "Art 3303 (801)",
        "Title": "Advanced Printmaking",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Rouse, L.",
        "CRN": "40584"
    },
    {
        "Course": "Art 2301 (803)",
        "Title": "Relief Printmaking",
        "Day&Time": "MW 14:10-16:40",
        "Instructor": "Rouse, L.",
        "CRN": "41803"
    },
    {
        "Course": "Japanese 2011 (801)",
        "Title": "Survey of Japanese Literature: Pre-Modern",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Nagai, M.",
        "CRN": "40562"
    },
    {
        "Course": "Art 2811 (802)",
        "Title": "Art Photography: Digital",
        "Day&Time": "MW 11:30-15:40",
        "Instructor": "Watanabe, S.",
        "CRN": "42005"
    },
    {
        "Course": "MSP 4701 (801)",
        "Title": "Producing and Directing",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Neubert, K.",
        "CRN": "40396"
    },
    {
        "Course": "Japanese 2000 (801)",
        "Title": "Special Topics I: Practical Japanese for Study Abroad Students",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Matsuhashi, Y.",
        "CRN": "40319"
    },
    {
        "Course": "Chinese 2001 (801)",
        "Title": "Chinese Intermediate I",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Sun, S.",
        "CRN": "40307"
    },
    {
        "Course": "IH 0851 (804)",
        "Title": "IH I: The Good Life",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Rosenkjar, P.",
        "CRN": "40675"
    },
    {
        "Course": "Psych 3620 (802)",
        "Title": "Topics in Psychology: Intercultural Marriage",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Morsbach, H.",
        "CRN": "40481"
    },
    {
        "Course": "Engl 0855 (801)",
        "Title": "Why Care about College: Higher Education in American Life",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Nelson, R.",
        "CRN": "41097"
    },
    {
        "Course": "Econ 1102 (802)",
        "Title": "Microeconomic Principles",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Iniguez, A.",
        "CRN": "40524"
    },
    {
        "Course": "Psych 0825 (801)",
        "Title": "Quantitative Methods in the Social Sciences",
<<<<<<< HEAD
        "Day&Time": "TR\n8:10-10:10",
=======
        "Day&Time": "TTh\n8:10-10:10",
>>>>>>> origin
        "Instructor": "Joyce, T.",
        "CRN": "40468"
    },
    {
        "Course": "Mus St 0809 (801)",
        "Title": "World Musics & Cultures",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Horton, L.",
        "CRN": "40460"
    },
    {
        "Course": "As St 4096 (802)",
        "Title": "Writing Seminar in Asian Studies: Immigration and Integration Issues in East and Southeast Asia",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "MacDougall, T.",
        "CRN": "40654"
    },
    {
        "Course": "Art 4649 (801)",
        "Title": "Computer Imaging Portfolio",
        "Day&Time": "MW\n16:50-19:20",
        "Instructor": "Lynam, I.",
        "CRN": "40619"
    },
    {
        "Course": "Japanese 2000 (802)",
        "Title": "Special Topics I: Practical Japanese for Study Abroad Students",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Matsuhashi, Y.",
        "CRN": "40320"
    },
    {
        "Course": "Art Hist 2898 (801)",
        "Title": "Contemporary Japanese Art",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Nettleton, T.",
        "CRN": "40450"
    },
    {
        "Course": "GUS 0821 (801)",
        "Title": "Digital Mapping: From Mercator to Mashups",
        "Day&Time": "MWF\n18:00-19:20",
        "Instructor": "Staff, T.",
        "CRN": "40687"
    },
    {
        "Course": "Engl 2007 (801)",
        "Title": "Writing for Business and Industry",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40513"
    },
    {
        "Course": "Hist 2501 (801)",
        "Title": "Introduction to East Asia: China",
        "Day&Time": "MWF\n12:40-13:40",
        "Instructor": "Cucek, M.",
        "CRN": "40669"
    },
    {
        "Course": "MSP 2421 (801)",
        "Title": "Media Popular Culture",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Neubert, K.",
        "CRN": "40397"
    },
    {
        "Course": "GUS 2074 (801)",
        "Title": "East and South Asia",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Mock, J.",
        "CRN": "41099"
    },
    {
        "Course": "Pol Sci 2341 (801)",
        "Title": "U.S. Foreign Policy",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Moskowitz, K.",
        "CRN": "40651"
    },
    {
        "Course": "Japanese 3001 (802)",
        "Title": "Advanced Japanese I",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Kiyama (Murakami), T.",
        "CRN": "40332"
    },
    {
        "Course": "Pol Sci 4896 (801)",
        "Title": "Capstone Seminar in Political Science: Foreign Policy Analysis",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Brown, J.",
        "CRN": "40655"
    },
    {
        "Course": "Lib Arts 2030 (801)",
        "Title": "Special Topics in Liberal Arts III: Technology in International Business",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Singh, M.",
        "CRN": "40512"
    },
    {
        "Course": "Leg St 0803 (801)",
        "Title": "African Americans, Equality and the Law: Weapon or Tool?",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40519"
    },
    {
        "Course": "Pol Sci 3510 (801)",
        "Title": "Special Topics: Research Preparation Seminar: Japan's International Relations",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Brown, J.",
        "CRN": "40660"
    },
    {
        "Course": "Psych 4696 (801)",
        "Title": "Capstone in Psychology: Cross-Cultural Themes in Psychology",
<<<<<<< HEAD
        "Day&Time": "TR\n14:10-15:40",
=======
        "Day&Time": "TTh\n14:10-15:40",
>>>>>>> origin
        "Instructor": "Skowronski, D.",
        "CRN": "40482"
    },
    {
        "Course": "Econ 3596 (801)",
        "Title": "Energy, Ecology, and Economy",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Mino Avila, E.",
        "CRN": "40492"
    },
    {
        "Course": "Psych 3223 (801)",
        "Title": "Child Psychopathology and Treatment",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Bertram, F.",
        "CRN": "40478"
    },
    {
        "Course": "Pol Sci 0862 (801)",
        "Title": "Development & Globalization",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Blue, P.",
        "CRN": "40653"
    },
    {
        "Course": "Pol Sci 4310 (801)",
        "Title": "Seminar in International Politics: Chinese Foreign Policy",
        "Day&Time": "MWF\n18:00-19:00",
        "Instructor": "Hardy-Chartrand, B.",
        "CRN": "40645"
    },
    {
        "Course": "Econ 3538 (801)",
        "Title": "Managerial Economics",
        "Day&Time": "MWF\n15:20-16:20",
        "Instructor": "Bedard, B.",
        "CRN": "40530"
    },
    {
        "Course": "Art 2602 (801)",
        "Title": "Intermediate Computer Imaging",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Lynam, I.",
        "CRN": "40616"
    },
    {
        "Course": "Span 1003 (801)",
        "Title": "Intermediate",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Oviedo Ceron, A.",
        "CRN": "40300"
    },
    {
        "Course": "Art Hist 1156 (801)",
        "Title": "Art Heritage Western World II",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "MacDonald, D.",
        "CRN": "40401"
    },
    {
        "Course": "Japanese 3001 (801)",
        "Title": "Advanced Japanese I",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Namba, F.",
        "CRN": "40331"
    },
    {
        "Course": "Jour 1111 (801)",
        "Title": "Journalism and Society",
        "Day&Time": "MW\n18:00-19:30",
        "Instructor": "Hawkins, B.",
        "CRN": "40386"
    },
    {
        "Course": "Psych 2103 (801)",
        "Title": "Foundations of Learning and Behavior Analysis",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Skowronski, D.",
        "CRN": "40475"
    },
    {
        "Course": "IH 0851 (802)",
        "Title": "IH I: The Good Life",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Azzopardi, M.",
        "CRN": "40673"
    },
    {
        "Course": "Econ 3537 (801)",
        "Title": "Comparative Economic Systems",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Ofori, S.",
        "CRN": "40525"
    },
    {
        "Course": "Art 2811 (801)",
        "Title": "Art Photography: Digital",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Watanabe, S.",
        "CRN": "40604"
    },
    {
        "Course": "Hist 0849 (801)",
        "Title": "Dissent in America",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Clark, W.",
        "CRN": "40560"
    },
    {
        "Course": "Hist 3541 (801)",
        "Title": "Japan Today",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Kingston, J.",
        "CRN": "40466"
    },
    {
        "Course": "As St 4096 (801)",
        "Title": "Writing Seminar in Asian Studies: The Japanese Occupation of Southeast Asia",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Kingston, J.",
        "CRN": "40463"
    },
    {
        "Course": "Econ 3696 (801)",
        "Title": "Behavioral Economics",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Bedard, B.",
        "CRN": "40494"
    },
    {
        "Course": "Japanese 1001 (801)",
        "Title": "Japanese Elements I",
        "Day&Time": "MWF\n18:00-19:20",
        "Instructor": "Machida, Y.",
        "CRN": "40308"
    },
    {
        "Course": "Pol Sci 2321 (801)",
        "Title": "Politics of the Global Economy",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Gupta, P.",
        "CRN": "40648"
    },
    {
        "Course": "Econ 3598 (801)",
        "Title": "Economics Writing Seminar",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Kahy, H.",
        "CRN": "40493"
    },
    {
        "Course": "Art 2402 (802)",
        "Title": "Intermediate Drawing",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40622"
    },
    {
        "Course": "Art 3813 (803)",
        "Title": "Advanced Art Photography: Digital",
        "Day&Time": "TTh 13:10-15:40",
        "Instructor": "Tsai, P.",
        "CRN": "42004"
    },
    {
        "Course": "Japanese 2701 (801)",
        "Title": "TUJ - Japanese Intermediate I",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Toyoizumi, N.",
        "CRN": "40324"
    },
    {
        "Course": "Psych 1003 (801)",
        "Title": "Statistics for Psychology",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Angel, A.",
        "CRN": "40471"
    },
    {
        "Course": "Art 3403 (802)",
        "Title": "Advanced Drawing",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40623"
    },
    {
        "Course": "Jour 3704 (801)",
        "Title": "Ethical Issues in Journalism",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Jefferson, R.",
        "CRN": "40388"
    },
    {
        "Course": "Engl 0815 (801)",
        "Title": "Language in Society",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Rosenkjar, P.",
        "CRN": "40692"
    },
    {
        "Course": "Japanese 1002 (801)",
        "Title": "Japanese Elements II",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Fujiwara, Y.",
        "CRN": "40313"
    },
    {
        "Course": "Art Hist 2800 (801)",
        "Title": "Topics in Non-Western Art: Japanese Art Before and After WWII: From Manga to Performance Art",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Watanabe, S.",
        "CRN": "40456"
    },
    {
        "Course": "Engl 0711 (802)",
        "Title": "Introduction to Academic Discourse ESL",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Ahn, S.",
        "CRN": "40345"
    },
    {
        "Course": "Acct 2101 (801)",
        "Title": "Financial Accounting",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Sigaty, D.",
        "CRN": "40483"
    },
    {
        "Course": "Acct 2102 (801)",
        "Title": "Managerial Accounting",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Sigaty, D.",
        "CRN": "40484"
    },
    {
        "Course": "Japanese 2301 (801)",
        "Title": "Kanji II",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Saito, J.",
        "CRN": "40322"
    },
    {
        "Course": "Mus St 1763 (801)",
        "Title": "American Popular Music",
        "Day&Time": "MW\n18:00-19:00",
        "Instructor": "Myers, F.",
        "CRN": "40664"
    },
    {
        "Course": "CIS 1068 (801)",
        "Title": "Program Design and Abstraction",
        "Day&Time": "MWF\n8:30-9:50",
        "Instructor": "Karam, H.",
        "CRN": "40488"
    },
    {
        "Course": "Japanese 1002 (802)",
        "Title": "Japanese Elements II",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Osada, R.",
        "CRN": "40314"
    },
    {
        "Course": "Engl 0711 (801)",
        "Title": "Introduction to Academic Discourse ESL",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Matsuno, M.",
        "CRN": "40344"
    },
    {
        "Course": "Biol 1001 (801)",
        "Title": "Human Biology",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Hornia, A.",
        "CRN": "40686"
    },
    {
        "Course": "Art 4148 (801)",
        "Title": "Painting Workshop",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40621"
    },
    {
        "Course": "Jour 2101 (801)",
        "Title": "Journalism Research",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Carr, R.",
        "CRN": "40395"
    },
    {
        "Course": "Art 2601 (802)",
        "Title": "Computer Imaging",
<<<<<<< HEAD
        "Day&Time": "TR\n9:20-11:50",
=======
        "Day&Time": "TTh\n9:20-11:50",
>>>>>>> origin
        "Instructor": "Tsai, P.",
        "CRN": "40615"
    },
    {
        "Course": "Econ 1102 (801)",
        "Title": "Microeconomic Principles",
        "Day&Time": "MWF\n15:20-16:20",
        "Instructor": "Tanaka, M.",
        "CRN": "40523"
    },
    {
        "Course": "Phil 0839 (801)",
        "Title": "Philosophy of the Human",
        "Day&Time": "MWF\n15:20-16:20",
        "Instructor": "Sekulovski, J.",
        "CRN": "40693"
    },
    {
        "Course": "Soc 0829 (801)",
        "Title": "The History & Significance of Race in America",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Cleveland, K.",
        "CRN": "40691"
    },
    {
        "Course": "Art 3403 (801)",
        "Title": "Advanced Drawing",
        "Day&Time": "MW\n14:10-16:40",
        "Instructor": "Kubota, T.",
        "CRN": "40600"
    },
    {
        "Course": "Japanese 1301 (801)",
        "Title": "Kanji I",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Toyoizumi, N.",
        "CRN": "40318"
    },
    {
        "Course": "Hist 0832 (801)",
        "Title": "Politics of Identity in America",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Williams, M.",
        "CRN": "40565"
    },
    {
        "Course": "Art Hist 2896 (801)",
        "Title": "Modern Japanese Art",
        "Day&Time": "MWF\n8:30-9:50",
        "Instructor": "Staff, T.",
        "CRN": "40451"
    },
    {
        "Course": "Art 4849 (801)",
        "Title": "Art Photography Portfolio",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Watanabe, S.",
        "CRN": "40610"
    },
    {
        "Course": "Japanese 3002 (802)",
        "Title": "Advanced Japanese II",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Machida, Y.",
        "CRN": "40334"
    },
    {
        "Course": "As St 2074 (801)",
        "Title": "Geography of East and South Asia",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Mock, J.",
        "CRN": "41098"
    },
    {
        "Course": "As St 2501 (801)",
        "Title": "Introduction to East Asia: China",
        "Day&Time": "MWF\n12:40-13:40",
        "Instructor": "Cucek, M.",
        "CRN": "40668"
    },
    {
        "Course": "TUJ 1002 (801)",
        "Title": "TUJ Bridge Seminar 2: Academic Research for International Students",
<<<<<<< HEAD
        "Day&Time": "R\n17:30-19:20",
=======
        "Day&Time": "Th\n17:30-19:20",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40667"
    },
    {
        "Course": "Bridge 0610 (801)",
        "Title": "Foundations of Academic Writing",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Staff, T.",
        "CRN": "B610A"
    },
    {
        "Course": "Pol Sci 2496 (801)",
        "Title": "Introduction to Political Philosophy",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Hardy-Chartrand, B.",
        "CRN": "40573"
    },
    {
        "Course": "Dance 1807 (801)",
        "Title": "Hatha Yoga I",
        "Day&Time": "MW\n16:50-17:50",
        "Instructor": "Myers, F.",
        "CRN": "40663"
    },
    {
        "Course": "Engl 0711 (803)",
        "Title": "Introduction to Academic Discourse ESL",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Ahn, S.",
        "CRN": "40346"
    },
    {
        "Course": "Art 3603 (801)",
        "Title": "Advanced Computer Imaging",
        "Day&Time": "MW\n16:50-19:20",
        "Instructor": "Lynam, I.",
        "CRN": "40618"
    },
    {
        "Course": "Japanese 2701 (804)",
        "Title": "TUJ - Japanese Intermediate I",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Takahashi, K.",
        "CRN": "40327"
    },
    {
        "Course": "Art 4449 (802)",
        "Title": "Drawing Portfolio",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40631"
    },
    {
        "Course": "Engl 0812 (801)",
        "Title": "Analytical Reading and Writing: ESL",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Keefe, K.",
        "CRN": "40347"
    },
    {
        "Course": "Art 4649 (802)",
        "Title": "Computer Imaging Portfolio",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40633"
    },
    {
        "Course": "Japanese 1002 (803)",
        "Title": "Japanese Elements II",
        "Day&Time": "MWF\n15:20-16:40",
        "Instructor": "Fujiwara, Y.",
        "CRN": "40315"
    },
    {
        "Course": "Japanese 4002 (801)",
        "Title": "Japanese Advanced IV",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Saito, J.",
        "CRN": "40338"
    },
    {
        "Course": "RMI 2101 (801)",
        "Title": "Introduction to Risk Management",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40495"
    },
    {
        "Course": "MIS 0855 (801)",
        "Title": "Data Science",
        "Day&Time": "MWF\n12:40-13:40",
        "Instructor": "Staff, T.",
        "CRN": "40497"
    },
    {
        "Course": "HRM 1101 (801)",
        "Title": "Leadership and Organizational Management",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Bedard, B.",
        "CRN": "40514"
    },
    {
        "Course": "As St 3030 (802)",
        "Title": "Special Topics III: Japan's International Relations",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Brown, J.",
        "CRN": "40659"
    },
    {
        "Course": "IBS 3501 (801)",
        "Title": "Marketing in a Global Environment",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "40516"
    },
    {
        "Course": "As St 3030 (801)",
        "Title": "Special Topics III: Chinese Foreign Policy",
        "Day&Time": "MWF\n18:00-19:00",
        "Instructor": "Hardy-Chartrand, B.",
        "CRN": "40644"
    },
    {
        "Course": "Japanese 3096 (801)",
        "Title": "Intermediate Writing in Japanese",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Yamaguchi, A.",
        "CRN": "40335"
    },
    {
        "Course": "Pol Sci 3151 (801)",
        "Title": "Public Policy Analysis",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Murakami, H.",
        "CRN": "40649"
    },
    {
        "Course": "Anthro 2373 (801)",
        "Title": "Japanese Culture",
<<<<<<< HEAD
        "Day&Time": "TR\n8:40-10:10",
=======
        "Day&Time": "TTh\n8:40-10:10",
>>>>>>> origin
        "Instructor": "Mock, J.",
        "CRN": "40696"
    },
    {
        "Course": "Bridge 0400 (801)",
        "Title": "Bridge Tutorial",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Staff, T.",
        "CRN": "B400A"
    },
    {
        "Course": "Japanese 2702 (802)",
        "Title": "TUJ - Japanese Intermediate II",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Ichimura, Y.",
        "CRN": "40329"
    },
    {
        "Course": "Pol Sci 1301 (801)",
        "Title": "International Politics",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Cucek, M.",
        "CRN": "40569"
    },
    {
        "Course": "IH 0851 (801)",
        "Title": "IH I: The Good Life",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Roser, L.",
        "CRN": "40672"
    },
    {
        "Course": "Japanese 1003 (801)",
        "Title": "Beginning Oral Japanese: Oral Intensive I",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Okada, C.",
        "CRN": "40317"
    },
    {
        "Course": "Art 2811 (803)",
        "Title": "Art Photography: Digital",
<<<<<<< HEAD
        "Day&Time": "TR\n13:10-15:40",
=======
        "Day&Time": "TTh\n13:10-15:40",
>>>>>>> origin
        "Instructor": "Watanabe, S.",
        "CRN": "40613"
    },
    {
        "Course": "Math 0824 (801)",
        "Title": "Mathematical Patterns",
        "Day&Time": "MWF 18:00-19:20",
        "Instructor": "Kansal, P.",
        "CRN": "40505"
    },
    {
        "Course": "Jour 1111 (802)",
        "Title": "Journalism and Society",
        "Day&Time": "MWF\n11:30-12:30",
        "Instructor": "Herrera, I.",
        "CRN": "40390"
    },
    {
        "Course": "Hist 2103 (801)",
        "Title": "African American History to 1865",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Williams, M.",
        "CRN": "40566"
    },
    {
        "Course": "IH 0852 (804)",
        "Title": "IH II: The Common Good",
        "Day&Time": "TTh 10:20-11:50",
        "Instructor": "Valerio, A.",
        "CRN": "40682"
    },
    {
        "Course": "Rel 0811 (801)",
        "Title": "Asian Behavior & Thought: Four Asian Models Shaping Your Action",
        "Day&Time": "TTh 15:50-17:20",
        "Instructor": "Valerio, A.",
        "CRN": "40665"
    },
    {
        "Course": "MSP 3890 (801)",
        "Title": "Intermediate Topics in Media and Telecommunication Production: Creating Music for Media",
        "Day&Time": "MWF\n18:00-19:20",
        "Instructor": "Perkinson, A.",
        "CRN": "40383"
    },
    {
        "Course": "Econ 3563 (801)",
        "Title": "International Trade",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Iniguez, A.",
        "CRN": "40532"
    },
    {
        "Course": "Chinese 1001 (802)",
        "Title": "Chinese Elements I",
        "Day&Time": "MWF\n12:40-14:00",
        "Instructor": "Sun, S.",
        "CRN": "40306"
    },
    {
        "Course": "Art 1501 (801)",
        "Title": "Introduction to Visual Language: Design",
        "Day&Time": "MW\n16:50-19:20",
        "Instructor": "Kubota, T.",
        "CRN": "40602"
    },
    {
        "Course": "Econ 3503 (801)",
        "Title": "Introduction to Econometrics",
        "Day&Time": "MWF\n14:10-15:10",
        "Instructor": "Tanaka, M.",
        "CRN": "40529"
    },
    {
        "Course": "Art 4249 (802)",
        "Title": "3-D Portfolio",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-18:20",
=======
        "Day&Time": "TTh\n15:50-18:20",
>>>>>>> origin
        "Instructor": "Kirkham, J.",
        "CRN": "40582"
    },
    {
        "Course": "Art 4848 (801)",
        "Title": "Art Photography Workshop",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40634"
    },
    {
        "Course": "Korean 1001 (801)",
        "Title": "Korean Elements I",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:30",
=======
        "Day&Time": "TTh\n17:30-19:30",
>>>>>>> origin
        "Instructor": "Park, K.",
        "CRN": "40302"
    },
    {
        "Course": "Soc 3247 (801)",
        "Title": "Ideology and Social Change in Japan",
<<<<<<< HEAD
        "Day&Time": "TR\n12:00-13:30",
=======
        "Day&Time": "TTh\n12:00-13:30",
>>>>>>> origin
        "Instructor": "Cleveland, K.",
        "CRN": "40671"
    },
    {
        "Course": "Psych 2301 (801)",
        "Title": "Foundations of Developmental Psychology",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Yamamiya, Y.",
        "CRN": "40476"
    },
    {
        "Course": "Econ 3501 (801)",
        "Title": "Intermediate Microeconomic Analysis",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Kahy, H.",
        "CRN": "40527"
    },
    {
        "Course": "FMA 3696 (811)",
        "Title": "Writing Intensive in Film Study: The Films of Ozu",
        "Day&Time": "TTh 13:40-15:40",
        "Instructor": "Fujiwara, C.",
        "CRN": "41802"
    },
    {
        "Course": "Engl 0701 (801)",
        "Title": "Introduction to Academic Discourse",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Chozick, M.",
        "CRN": "40340"
    },
    {
        "Course": "Pol Sci 4320 (801)",
        "Title": "Seminar in International Politics: Eurasian Politics: The International Affairs of Russia, Central Asia, and the Caucasus",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Brown, J.",
        "CRN": "40652"
    },
    {
        "Course": "Psych 1004 (801)",
        "Title": "Critical Thinking in Psychology",
        "Day&Time": "MWF\n10:20-11:20",
        "Instructor": "Zimmerman, S.",
        "CRN": "40474"
    },
    {
        "Course": "Math 1022 (801)",
        "Title": "Precalculus",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Bacani, D.",
        "CRN": "40502"
    },
    {
        "Course": "Phys 0834 (801)",
        "Title": "Exploring the Cosmos",
        "Day&Time": "MWF\n8:50-9:50",
        "Instructor": "Matsui, T.",
        "CRN": "40684"
    },
    {
        "Course": "Japanese 2702 (803)",
        "Title": "TUJ - Japanese Intermediate II",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Namba, F.",
        "CRN": "40330"
    },
    {
        "Course": "IH 0851 (807)",
        "Title": "IH I: The Good Life",
        "Day&Time": "MWF 10:00-11:00",
        "Instructor": "Roser, L.",
        "CRN": "40678"
    },
    {
        "Course": "Psych 0818 (801)",
        "Title": "Human Sexuality",
<<<<<<< HEAD
        "Day&Time": "TR\n10:20-11:50",
=======
        "Day&Time": "TTh\n10:20-11:50",
>>>>>>> origin
        "Instructor": "Skowronski, D.",
        "CRN": "40467"
    },
    {
        "Course": "Art 4149 (802)",
        "Title": "Painting Portfolio",
        "Day&Time": "TTh 9:20-11:50",
        "Instructor": "Sakurai, K. & Lynam, I.",
        "CRN": "40625"
    },
    {
        "Course": "MSP 4324 (801)",
        "Title": "The Video Game Industry and Game Culture",
        "Day&Time": "MWF\n16:50-17:50",
        "Instructor": "Lipartito, J.",
        "CRN": "40400"
    },
    {
        "Course": "Lib Arts 2020 (801)",
        "Title": "Special Topics in Liberal Arts II: International Career Strategies",
        "Day&Time": "T\n8:00-10:10",
        "Instructor": "Kieffer, L. & Sawa, K.",
        "CRN": "40510"
    },
    {
        "Course": "As St 2030 (801)",
        "Title": "Special Topics I: Disaster Japan: Earthquake, Tsunami, Nuclear Crisis and the Politics of 3.11",
<<<<<<< HEAD
        "Day&Time": "TR\n17:30-19:00",
=======
        "Day&Time": "TTh\n17:30-19:00",
>>>>>>> origin
        "Instructor": "Cleveland, K.",
        "CRN": "40690"
    },
    {
        "Course": "Econ 3502 (801)",
        "Title": "Intermediate Macroeconomic Analysis",
        "Day&Time": "MWF\n12:40-13:40",
        "Instructor": "Kahy, H.",
        "CRN": "40528"
    },
    {
        "Course": "Theat 0825 (801)",
        "Title": "The Art of Acting",
<<<<<<< HEAD
        "Day&Time": "TR\n15:50-17:20",
=======
        "Day&Time": "TTh\n15:50-17:20",
>>>>>>> origin
        "Instructor": "Roberts, W.",
        "CRN": "40381"
    },
    {
        "Course": "Chinese 1001 (801)",
        "Title": "Chinese Elements I",
        "Day&Time": "MWF\n10:00-11:20",
        "Instructor": "Sun, S.",
        "CRN": "40305"
    },
    {
        "Course": "Math 0702 (801)",
        "Title": "Intermediate Algebra",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Wu, J.",
        "CRN": "40270"
    },
    {
        "Course": "As St 2000 (801)",
        "Title": "Special Topics in Asian Studies I: Social Inequality in Asia",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:10",
=======
        "Day&Time": "TTh\n13:40-15:10",
>>>>>>> origin
        "Instructor": "Htun, T.",
        "CRN": "40480"
    },
    {
        "Course": "Art 1101 (801)",
        "Title": "Introduction to Visual Language: Painting",
        "Day&Time": "MW\n11:30-14:00",
        "Instructor": "Sakurai, K.",
        "CRN": "40589"
    },
    {
        "Course": "Korean 1001 (802)",
        "Title": "Korean Elements I",
<<<<<<< HEAD
        "Day&Time": "TR\n13:40-15:40",
=======
        "Day&Time": "TTh\n13:40-15:40",
>>>>>>> origin
        "Instructor": "Park, K.",
        "CRN": "40303"
    }
];