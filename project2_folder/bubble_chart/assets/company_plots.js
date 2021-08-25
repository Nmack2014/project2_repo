d3.csv("/assets/FinalcompanyESG82121.csv").then(function(csvdata) {


var company_array = []

var msci_2016 = []
var msci_2017 = []
var msci_2018 = []
var msci_2019 = []
var msci_2020 = []
var msci_2021 = []

var votes_2010 = []
var votes_2011 = []
var votes_2012 = []
var votes_2013 = []
var votes_2014 = []
var votes_2015 = []
var votes_2016 = []
var votes_2017 = []
var votes_2018 = []
var votes_2019 = []
var votes_2020 = []

var commitments_2010 = []
var commitments_2011 = []
var commitments_2012 = []
var commitments_2013 = []
var commitments_2014 = []
var commitments_2015 = []
var commitments_2016 = []
var commitments_2017 = []
var commitments_2018 = []
var commitments_2019 = []
var commitments_2020 = []

for (var i = 0; i < csvdata.length; i++) {

company_array[i] = csvdata[i]["company"];

msci_2016[i] = csvdata[i]["MSCI ESG Rating 2016"];
msci_2017[i] = csvdata[i]["MSCI ESG Rating 2017"];
msci_2018[i] = csvdata[i]["MSCI ESG Rating 2018"];
msci_2019[i] = csvdata[i]["MSCI ESG Rating 2019"];
msci_2020[i] = csvdata[i]["MSCI ESG Rating 2020"];
msci_2021[i] = csvdata[i]["MSCI ESG Rating 2021"];

votes_2010[i] = csvdata[i]["2010 Votes"];
votes_2011[i] = csvdata[i]["2011 Votes"];
votes_2012[i] = csvdata[i]["2012 Votes"];
votes_2013[i] = csvdata[i]["2013 Votes"];
votes_2014[i] = csvdata[i]["2014 Votes"];
votes_2015[i] = csvdata[i]["2015 Votes"];
votes_2016[i] = csvdata[i]["2016 Votes"];
votes_2017[i] = csvdata[i]["2017 Votes"];
votes_2018[i] = csvdata[i]["2018 Votes"];
votes_2019[i] = csvdata[i]["2019 Votes"];
votes_2020[i] = csvdata[i]["2020 Votes"];

commitments_2010[i] = csvdata[i]["2010 Commitments"];
commitments_2011[i] = csvdata[i]["2011 Commitments"];
commitments_2012[i] = csvdata[i]["2012 Commitments"];
commitments_2013[i] = csvdata[i]["2013 Commitments"];
commitments_2014[i] = csvdata[i]["2014 Commitments"];
commitments_2015[i] = csvdata[i]["2015 Commitments"];
commitments_2016[i] = csvdata[i]["2016 Commitments"];
commitments_2017[i] = csvdata[i]["2017 Commitments"];
commitments_2018[i] = csvdata[i]["2018 Commitments"];
commitments_2019[i] = csvdata[i]["2019 Commitments"];
commitments_2020[i] = csvdata[i]["2020 Commitments"];

}

var trace1 = {
    x: [votes_2018[0]],
    y: [msci_2021[0]],
    name: '2021',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  var trace2 = {
    x: [votes_2017[0]],
    y: [msci_2020[0]],
    name: '2020',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  var trace3 = {
    x: [votes_2016[0]],
    y: [msci_2019[0]],
    name: '2019',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  var trace4 = {
    x: [votes_2015[0]],
    y: [msci_2018[0]],
    name: '2018',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  var trace5 = {
    x: [votes_2014[0]],
    y: [msci_2017[0]],
    name: '2017',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  var trace6 = {
    x: [votes_2013[0]],
    y: [msci_2016[0]],
    name: '2016',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };


  var data = [trace1, trace2, trace3, trace4, trace5, trace6];

  var layout = { 
    title: {
      text:'MSCI ESG Rating vs. Company Votes and Commitments',
      font: {
        family: 'Courier New, monospace',
        size: 40
      }
    },
    height: 1800,
    width: 1800,
    xaxis: {
      title: {
        text: 'Company Votes',
        font: {
          family: 'Courier New, monospace',
          size: 30,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'MSCI Rating',
        font: {
          family: 'Courier New, monospace',
          size: 30,
          color: '#7f7f7f'
        }
      }
    }

    
  };



Plotly.newPlot('companyplot', data, layout);




d3.selectAll("#selCompany").on("change", updateCompany);


function updateCompany() {
          
        var dropdownMenu = d3.select("#selCompany");
         
        var set = dropdownMenu.property("value");


if (set === 'set1') {

  trace1 = {
    x: [parseInt(votes_2018[0]) + parseInt(commitments_2018[0])],
    y: [msci_2021[0]],
    name: '2021',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[0]) + parseInt(commitments_2017[0])],
    y: [msci_2020[0]],
    name: '2020',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[0]) + parseInt(commitments_2016[0])],
    y: [msci_2019[0]],
    name: '2019',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[0]) + parseInt(commitments_2015[0])],
    y: [msci_2018[0]],
    name: '2018',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[0]) + parseInt(commitments_2014[0])],
    y: [msci_2017[0]],
    name: '2017',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[0]) + parseInt(commitments_2013[0])],
    y: [msci_2016[0]],
    name: '2016',
    text: company_array[0],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set2') {

  trace1 = {
    x: [parseInt(votes_2018[1]) + parseInt(commitments_2018[1])],
    y: [msci_2021[1]],
    name: '2021',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[1]) + parseInt(commitments_2017[1])],
    y: [msci_2020[1]],
    name: '2020',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[1]) + parseInt(commitments_2016[1])],
    y: [msci_2019[1]],
    name: '2019',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[1]) + parseInt(commitments_2015[1])],
    y: [msci_2018[1]],
    name: '2018',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[1]) + parseInt(commitments_2014[1])],
    y: [msci_2017[1]],
    name: '2017',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[1]) + parseInt(commitments_2013[1])],
    y: [msci_2016[1]],
    name: '2016',
    text: company_array[1],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set3') {

  trace1 = {
    x: [parseInt(votes_2018[2]) + parseInt(commitments_2018[2])],
    y: [msci_2021[2]],
    name: '2021',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[2]) + parseInt(commitments_2017[2])],
    y: [msci_2020[2]],
    name: '2020',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[2]) + parseInt(commitments_2016[2])],
    y: [msci_2019[2]],
    name: '2019',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[2]) + parseInt(commitments_2015[2])],
    y: [msci_2018[2]],
    name: '2018',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[2]) + parseInt(commitments_2014[2])],
    y: [msci_2017[2]],
    name: '2017',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[2]) + parseInt(commitments_2013[2])],
    y: [msci_2016[2]],
    name: '2016',
    text: company_array[2],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set4') {

  trace1 = {
    x: [parseInt(votes_2018[3]) + parseInt(commitments_2018[3])],
    y: [msci_2021[3]],
    name: '2021',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[3]) + parseInt(commitments_2017[3])],
    y: [msci_2020[3]],
    name: '2020',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[3]) + parseInt(commitments_2016[3])],
    y: [msci_2019[3]],
    name: '2019',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[3]) + parseInt(commitments_2015[3])],
    y: [msci_2018[3]],
    name: '2018',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[3]) + parseInt(commitments_2014[3])],
    y: [msci_2017[3]],
    name: '2017',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[3]) + parseInt(commitments_2013[3])],
    y: [msci_2016[3]],
    name: '2016',
    text: company_array[3],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set5') {

  trace1 = {
    x: [parseInt(votes_2018[4]) + parseInt(commitments_2018[4])],
    y: [msci_2021[4]],
    name: '2021',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[4]) + parseInt(commitments_2017[4])],
    y: [msci_2020[4]],
    name: '2020',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[4]) + parseInt(commitments_2016[4])],
    y: [msci_2019[4]],
    name: '2019',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[4]) + parseInt(commitments_2015[4])],
    y: [msci_2018[4]],
    name: '2018',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[4]) + parseInt(commitments_2014[4])],
    y: [msci_2017[4]],
    name: '2017',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[4]) + parseInt(commitments_2013[4])],
    y: [msci_2016[4]],
    name: '2016',
    text: company_array[4],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set6') {

  trace1 = {
    x: [parseInt(votes_2018[5]) + parseInt(commitments_2018[5])],
    y: [msci_2021[5]],
    name: '2021',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[5]) + parseInt(commitments_2017[5])],
    y: [msci_2020[5]],
    name: '2020',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[5]) + parseInt(commitments_2016[5])],
    y: [msci_2019[5]],
    name: '2019',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[5]) + parseInt(commitments_2015[5])],
    y: [msci_2018[5]],
    name: '2018',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[5]) + parseInt(commitments_2014[5])],
    y: [msci_2017[5]],
    name: '2017',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[5]) + parseInt(commitments_2013[5])],
    y: [msci_2016[5]],
    name: '2016',
    text: company_array[5],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set7') {

  trace1 = {
    x: [parseInt(votes_2018[6]) + parseInt(commitments_2018[6])],
    y: [msci_2021[6]],
    name: '2021',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[6]) + parseInt(commitments_2017[6])],
    y: [msci_2020[6]],
    name: '2020',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[6]) + parseInt(commitments_2016[6])],
    y: [msci_2019[6]],
    name: '2019',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[6]) + parseInt(commitments_2015[6])],
    y: [msci_2018[6]],
    name: '2018',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[6]) + parseInt(commitments_2014[6])],
    y: [msci_2017[6]],
    name: '2017',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[6]) + parseInt(commitments_2013[6])],
    y: [msci_2016[6]],
    name: '2016',
    text: company_array[6],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set8') {

  trace1 = {
    x: [parseInt(votes_2018[7]) + parseInt(commitments_2018[7])],
    y: [msci_2021[7]],
    name: '2021',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[7]) + parseInt(commitments_2017[7])],
    y: [msci_2020[7]],
    name: '2020',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[7]) + parseInt(commitments_2016[7])],
    y: [msci_2019[7]],
    name: '2019',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[7]) + parseInt(commitments_2015[7])],
    y: [msci_2018[7]],
    name: '2018',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[7]) + parseInt(commitments_2014[7])],
    y: [msci_2017[7]],
    name: '2017',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[7]) + parseInt(commitments_2013[7])],
    y: [msci_2016[7]],
    name: '2016',
    text: company_array[7],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set9') {

  trace1 = {
    x: [parseInt(votes_2018[8]) + parseInt(commitments_2018[8])],
    y: [msci_2021[8]],
    name: '2021',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[8]) + parseInt(commitments_2017[8])],
    y: [msci_2020[8]],
    name: '2020',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[8]) + parseInt(commitments_2016[8])],
    y: [msci_2019[8]],
    name: '2019',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[8]) + parseInt(commitments_2015[8])],
    y: [msci_2018[8]],
    name: '2018',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[8]) + parseInt(commitments_2014[8])],
    y: [msci_2017[8]],
    name: '2017',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[8]) + parseInt(commitments_2013[8])],
    y: [msci_2016[8]],
    name: '2016',
    text: company_array[8],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}

else if (set === 'set10') {

  trace1 = {
    x: [parseInt(votes_2018[9]) + parseInt(commitments_2018[9])],
    y: [msci_2021[9]],
    name: '2021',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace2 = {
    //x: [votes_2017[0]],
    x: [parseInt(votes_2017[9]) + parseInt(commitments_2017[9])],
    y: [msci_2020[9]],
    name: '2020',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace3 = {
    x: [parseInt(votes_2016[9]) + parseInt(commitments_2016[9])],
    y: [msci_2019[9]],
    name: '2019',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace4 = {
    x: [parseInt(votes_2015[9]) + parseInt(commitments_2015[9])],
    y: [msci_2018[9]],
    name: '2018',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace5 = {
    x: [parseInt(votes_2014[9]) + parseInt(commitments_2014[9])],
    y: [msci_2017[9]],
    name: '2017',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

  trace6 = {
    x: [parseInt(votes_2013[9]) + parseInt(commitments_2013[9])],
    y: [msci_2016[9]],
    name: '2016',
    text: company_array[9],
    mode: 'markers',
    marker: {
      size: 80

    }

  };

}














data = [trace1, trace2, trace3, trace4, trace5, trace6]
Plotly.newPlot('companyplot', data, layout);


// Plotly.restyle("companyplot", "trace1", [x]);
// Plotly.restyle("companyplot", "trace1", [y]);

}



});