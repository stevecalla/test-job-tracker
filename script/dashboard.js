 feature-homepage-rupesh
$(document).ready(function () {
  let map;
  let markers = []; // Array to store markers
  let citiesArray = [];

  initMap();

  // Create a new Google Map and associate it with the HTML element with the ID 'map'
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      // Set the initial center of the map to the coordinates
      center: { lat: 51.50739669799805, lng: -0.12753255665302277 },
      zoom: 6,
    });
  }

  // Select the "map" button
  let showCompaniesOnMap = $("#map-btn");

$(document).ready(function() {


    // DISPLAY MARKERS ON THE MAP

    let map;
    let markers = []; // Array to store markers
    let citiesArray = [];

    let newFile;


    // Function to store the city list in local storage
    function storeCityList() {
        // Assuming you want to store the updated city list after adding markers
        // If not, you can omit this function
        localStorage.setItem('city-names', JSON.stringify(citiesArray));
    }



    function addMarkerForCity(city) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: city }, function (results, status) {
            if (status === 'OK') {
                // Create a new marker for this city
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: city,
                });
                map.setCenter(results[0].geometry.location);
                map.setZoom(6);
            } else {
                alert('Geocode was not successful for ' + city + ': ' + status);
            }
        });
    }

    // Function to remove all markers from the map
    function clearMarkers() {
        // Remove all markers from the map
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
    }

    // Create a new Google Map and associate it with the HTML element with the ID 'map'
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            // Set the initial center of the map to the coordinates
            center: { lat: 51.50739669799805, lng: -0.12753255665302277 },
            zoom: 6,
        });
    }

    // // Call initMap after the DOM is fully loaded
    // google.maps.event.addDomListener(window, 'load', initMap);

    // Select the "map" button
    let showCompaniesOnMap = $('#map-btn');
main

  // Attach an event listener to the "Search" button
  showCompaniesOnMap.on("click", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Scroll to the map section
    $("html, body").animate(
      {
        scrollTop: $("#map-section").offset().top,
      },
      1000
    );

    clearMarkers(); // Clear existing markers before displaying all

    // Retrieve the location value from local storage
    let cityInput = localStorage.getItem("userInputArray");

    if (cityInput) {
      const citiesArray = JSON.parse(cityInput);

      citiesArray.forEach((userInputArray) => {
        console.log(userInputArray.location);
        addMarkerForCity(userInputArray.location);
      });

feature-homepage-rupesh
      // Store the updated city list in local storage
      storeCityList();
    }
  });

  // Function to store the city list in local storage
  function storeCityList() {
    // Assuming you want to store the updated city list after adding markers
    // If not, you can omit this function
    localStorage.setItem("city-names", JSON.stringify(citiesArray));
  }

  function addMarkerForCity(city) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: city }, function (results, status) {
      if (status === "OK") {
        // Create a new marker for this city
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: city,
        });
        map.setCenter(results[0].geometry.location);
        map.setZoom(8);
      } else {
        alert("Geocode was not successful for " + city + ": " + status);
      }
    });
  }

  // Function to remove all markers from the map
  function clearMarkers() {
    // Remove all markers from the map
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
  }

  // Function to create a card based on user input
  function createCard(userInput, index) {
    // Get the card section
    const cardSection = document.getElementById("cardsCreation");

    // Create card container for each card
    const cardContainer = document.createElement("div");//
    cardContainer.className = "cardContainer col-lg-4 col-md-6 col-sm-9 p-3";
    cardContainer.dataset.cardIndex = index;

    // Create card elements
    const card = document.createElement("div");
    card.className = "card align-items-center custom-card-border shadow";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titleContainer = document.createElement("div");
    titleContainer.className = "text-center mt-3";

    // Create and append card content
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = userInput.position;

    const cardCompany = document.createElement("h6");
    cardCompany.className = "card-text mb-2";
    cardCompany.textContent = userInput.company;

    const paragraphContainer = document.createElement("div");
    paragraphContainer.className = "text-left mb-4";

    const cardLocation = document.createElement("p");
    cardLocation.className = "card-text";
    cardLocation.innerHTML = `<i class="fa-solid fa-location-arrow"></i> ${userInput.location}`;

    const cardType = document.createElement("p");
    cardType.className = "card-text";
    cardType.innerHTML = `<i class="fa-solid fa-house-laptop"></i> ${userInput.jobType}`;

    const cardStage = document.createElement("p");
    cardStage.className = "card-text";
    cardStage.innerHTML = `<i class="fa-solid fa-clipboard-question"></i> ${userInput.jobStage}`;

    // Add data attributes for job type and job stage
    cardContainer.dataset.jobType = userInput.jobType;
    cardContainer.dataset.jobStage = userInput.jobStage;

    const seeJobButton = document.createElement("a");
    seeJobButton.href = userInput.posting;
    seeJobButton.className = "btn btn-warning shadow";
    seeJobButton.textContent = "See job posting";
    seeJobButton.target = "_blank";

    const deleteCardButton = document.createElement("button");
    deleteCardButton.className = "btn btn-secondary m-2 shadow deleteBtn";
    deleteCardButton.type = "button";
    deleteCardButton.textContent = "Delete card";

    // Append title elements to titleContainer
    titleContainer.appendChild(cardTitle);
    titleContainer.appendChild(cardCompany);

    // Append paragraphs to paragraphContainer
    paragraphContainer.appendChild(cardLocation);
    paragraphContainer.appendChild(cardType);
    paragraphContainer.appendChild(cardStage);
    // Append elements to the card body
    cardBody.appendChild(titleContainer);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardCompany);
    cardBody.appendChild(paragraphContainer);
    cardBody.appendChild(cardLocation);
    cardBody.appendChild(cardType);
    cardBody.appendChild(cardStage);
    cardBody.appendChild(seeJobButton);
    cardBody.appendChild(deleteCardButton);

    // Append card body to the card
    card.appendChild(cardBody);

    // Append card to cardContainer
    cardContainer.appendChild(card);
    // Append the card to the card container
    cardSection.appendChild(cardContainer);
  }
  function populateIntialData() {
    //upddated
    const cardsCreation = document.getElementById("cardsCreation");
    // Retrieve data from local storage and create cards
    let storedData = localStorage.getItem("userInputArray");
    let userInputArray;
    if (storedData) {
      userInputArray = JSON.parse(storedData);
      cardsCreation.innerHTML = "";
      // Iterate through userInputArray in reverse order and create cards
      for (let i = userInputArray.length - 1; i >= 0; i--) {
        createCard(userInputArray[i], i);
      }

            // Store the updated city list in local storage
            storeCityList();
        }
    });

    $(function() {
        initMap();
    });
    
    // CREATES CARDS

    // Function to create a card based on user input
    function createCard(userInput, index) {
        // Get the card section
        const cardSection = document.getElementById('cardsCreation');

        // Create card container for each card
        const cardContainer = document.createElement('div');
        cardContainer.className = 'cardContainer col-lg-4 col-md-6 col-sm-9 p-3';
        cardContainer.dataset.cardIndex = index;

        // Create card elements
        const card = document.createElement('div');
        card.className = 'card align-items-center custom-card-border shadow';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const titleContainer = document.createElement('div');
        titleContainer.className = 'text-center mt-3';

        // Create and append card content
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = userInput.position;

        const cardCompany = document.createElement('h6');
        cardCompany.className = 'card-text mb-2';
        cardCompany.textContent = userInput.company;

        const paragraphContainer = document.createElement('div');
        paragraphContainer.className = 'text-left mb-4';

        const cardLocation = document.createElement('p');
        cardLocation.className = 'card-text';
        cardLocation.innerHTML = `<i class="fa-solid fa-location-arrow"></i> ${userInput.location}`;

        const cardType = document.createElement('p');
        cardType.className = 'card-text';
        cardType.innerHTML = `<i class="fa-solid fa-house-laptop"></i> ${userInput.jobType}`;

        const cardStage = document.createElement('p');
        cardStage.className = 'card-text';
        cardStage.innerHTML = `<i class="fa-solid fa-clipboard-question"></i> ${userInput.jobStage}`;

        // Add data attributes for job type and job stage
        cardContainer.dataset.jobType = userInput.jobType;
        cardContainer.dataset.jobStage = userInput.jobStage;

        const seeJobButton = document.createElement('a');
        seeJobButton.href = userInput.posting;
        seeJobButton.className = 'btn btn-warning shadow';
        seeJobButton.textContent = 'See job posting';
        seeJobButton.target = "_blank";

        const deleteCardButton = document.createElement('button');
        deleteCardButton.className = 'btn btn-secondary m-2 shadow deleteBtn';
        deleteCardButton.type = 'button';
        deleteCardButton.textContent = 'Delete card';

        // Append title elements to titleContainer
        titleContainer.appendChild(cardTitle);
        titleContainer.appendChild(cardCompany);

        // Append paragraphs to paragraphContainer
        paragraphContainer.appendChild(cardLocation);
        paragraphContainer.appendChild(cardType);
        paragraphContainer.appendChild(cardStage);
        // Append elements to the card body
        cardBody.appendChild(titleContainer);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardCompany);
        cardBody.appendChild(paragraphContainer);
        cardBody.appendChild(cardLocation);
        cardBody.appendChild(cardType);
        cardBody.appendChild(cardStage);
        cardBody.appendChild(seeJobButton);
        cardBody.appendChild(deleteCardButton);

        // Append card body to the card
        card.appendChild(cardBody);

        // Append card to cardContainer
        cardContainer.appendChild(card);
        // Append the card to the card container
        cardSection.appendChild(cardContainer);
    }

    function populateIntialData() { //updated
        //upddated
        const cardsCreation = document.getElementById("cardsCreation"); //updated
        // Retrieve data from local storage and create cards
        let storedData = localStorage.getItem("userInputArray");
        let userInputArray;
        if (storedData) {
          userInputArray = JSON.parse(storedData);
          cardsCreation.innerHTML = ""; //updated
          // Iterate through userInputArray in reverse order and create cards
          for (let i = userInputArray.length - 1; i >= 0; i--) {
            createCard(userInputArray[i], i);
          }
        }
      }
      populateIntialData(); // updated
    

    // // Retrieve data from local storage and create cards
    // let storedData = localStorage.getItem('userInputArray');
    // let userInputArray;
    // if (storedData) {
    //     userInputArray = JSON.parse(storedData);

    //     // Iterate through userInputArray in reverse order and create cards
    //     for (let i = userInputArray.length - 1; i >= 0; i--) {
    //         createCard(userInputArray[i], i);
    //     }
    // }

    // DELETE CARD BUTTON 

    function deleteCard() {
        // Attach an event listener to a common parent element of the delete buttons
        $('#cardsCreation').on('click', '.deleteBtn', function () {
            // Identify the card to be deleted
            const cardContainer = $(this).closest('.cardContainer');
            // Retrieve the index from the data attribute
            const indexToRemove = cardContainer.data('cardIndex');
            console.log(indexToRemove);
            // Remove the card from the DOM
            cardContainer.remove();

            // Retrieve the current data from local storage
            storedData = localStorage.getItem('userInputArray');
            if (storedData) {
                // Parse the stored data into an array
                userInputArray = JSON.parse(storedData);

                // Remove the corresponding data from the array
                userInputArray.splice(indexToRemove, 1);

                // Update local storage with the modified array
                localStorage.setItem('userInputArray', JSON.stringify(userInputArray));
                populateIntialData(); 
            }
        });
 main
    }
  }
  populateIntialData();

  function deleteCard() {
    // Attach an event listener to a common parent element of the delete buttons
    $("#cardsCreation").on("click", ".deleteBtn", function () {
      // Identify the card to be deleted
      const cardContainer = $(this).closest(".cardContainer");
      // Retrieve the index from the data attribute
      const indexToRemove = cardContainer.data("cardIndex");
      console.log(indexToRemove);
      // Remove the card from the DOM
      cardContainer.remove();

      // Retrieve the current data from local storage
      storedData = localStorage.getItem("userInputArray");
      console.log(storedData);
      if (storedData) {
        // Parse the stored data into an array
        userInputArray = JSON.parse(storedData);

feature-homepage-rupesh
        // Remove the corresponding data from the array
        userInputArray.splice(indexToRemove, 1);

        // Update local storage with the modified array
        localStorage.setItem("userInputArray", JSON.stringify(userInputArray));

        populateIntialData();
      }
    });
  }
  deleteCard();

  // Event listener for job type filter button
  // $("#jobTypeFilterBtn").on("click", function() {
  //     filterCards("jobType", $(this).val().trim());
  // });

  // Event listener for job type filter button
  $("#jobTypeFilterBtn").on("change", function () {
    // Get the selected job type
    const selectedJobType = $(this).val();

    // Filter cards based on the selected job type
    filterCards("jobType", selectedJobType);
  });

  // Event listener for job stage filter button
  // $("#jobStageFilterBtn").on("click", function() {
  //     filterCards("jobStage", $(this).val().trim());
  // });

  // Filter cards based on the specified data attribute and value
  function filterCards(attribute, selectedValue) {
    console.log("Filtering cards:", attribute, selectedValue);
    $(".cardContainer").each(function () {
      const cardValue = $(this).data(attribute);
      console.log("Card value:", cardValue);

      if (cardValue !== undefined) {
        console.log("Card value is defined");

        if (selectedValue === "default" || cardValue === selectedValue) {
          console.log("Showing card");
          $(this).show();
        } else {
          console.log("Hiding card");
          $(this).hide();
        }
      } else {
        console.log("Card value is undefined");
        // Handle the case when cardValue is undefined (optional)
      }
    });
  }

    // FILTERS 

    // Event listener for job type filter button
     $("#jobTypeFilterBtn").on("change", function() {
        // Get the selected job type
        const selectedJobType = $(this).val();
        // Filter cards based on the selected job type
        filterCards("jobType", selectedJobType);
    });

    // Event listener for job stage filter button
    $("#jobStageFilterBtn").on("change", function() {
        // Get the selected job type
        const selectedJobStage = $(this).val();
        // Filter cards based on the selected job type
        filterCards("jobStage", selectedJobStage);
    });

    // Function to filter cards based on the specified data attribute and value
    function filterCards(jobType, jobStage) {
        console.log("Filtering cards - Job Type:", jobType, "Job Stage:", jobStage);
        
        // Iterate over each cardContainer element using jQuery
        $(".cardContainer").each(function() {
            // Retrieve the jobType and jobStage values from the current cardContainer
            const cardJobType = $(this).data("jobType");
            const cardJobStage = $(this).data("jobStage");
    
            console.log("Card Job Type:", cardJobType, "Card Job Stage:", cardJobStage);
    
            // check if the jobType is either "default" or matches the cardJobType
            const isJobTypeMatch = jobType === "default" || cardJobType === jobType;
            // Check if the jobStage is either "default" or matches the cardJobStage
            const isJobStageMatch = jobStage === "default" || cardJobStage === jobStage;
    
            // Check if either jobType or jobStage is selected, and if the matches are found
            if ((jobType && isJobTypeMatch) || (jobStage && isJobStageMatch)) {
                console.log("Showing card");
                $(this).show();
            } else {
                console.log("Hiding card");
                $(this).hide();
            }
        });
    }
    
    // Event listener for job type filter dropdown
    // $("#jobTypeFilterBtn").on("change", function() {
    //     const selectedJobType = $(this).val();
    //     const selectedJobStage = $("#jobStageFilterBtn").val(); // Get the selected job stage
    
    //     filterCards(selectedJobType, selectedJobStage);
    // });

    // // Event listener for job stage filter dropdown
    // $("#jobStageFilterBtn").on("change", function () {
    //     const selectedJobStage = $(this).val();
    //     const selectedJobType = $("#jobTypeFilterBtn").val(); // Get the selected job type

    //     filterCards(selectedJobType, selectedJobStage);
    // });
 main
});
