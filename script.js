const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click',function(){
    const mealName = document.getElementById('meal-form-user').value;
    getData(mealName);
})

function getData(mealName){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`)
    .then(response => response.json())
    .then(data => displayData(data.meals))
    .catch(error => console.log(error))
}
//getData();

function displayData(data){
    const mealContainer = document.getElementById('meal-container');
    
}