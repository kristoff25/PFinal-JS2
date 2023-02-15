async function showRecipe() {
    try {
      const resp = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
      const data = await resp.json();
      console.log(resp);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }
  
  showRecipe();
  