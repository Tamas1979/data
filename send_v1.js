try {

	const formData = new FormData();
	formData.append('file', imageFile.value);
	formData.append('name', recipe.value.name);
	formData.append('description', recipe.value.description);
	formData.append('recipeLevel', recipe.value.recipeLevel);
	formData.append('preparationTime', recipe.value.preparationTime);
	formData.append('cookingTime', recipe.value.cookingTime);
	formData.append('steps', JSON.stringify(recipe.value.steps));

	const response = await fetch('http://127.0.0.1:8000/api/recipe', {
		method: 'POST',
		body: formData,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	})
	
} catch(error) {}
