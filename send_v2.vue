try {

			const response = await fetch('http://127.0.0.1:8000/api/recipe', {
				method: 'POST',
				body: formData,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					file: imageFile.value,
					name: recipe.value.name,
					description: recipe.value.description,
					recipeLevel: recipe.value.recipeLevel,
					preparationTime: recipe.value.preparationTime,
					cookingTime: recipe.value.cookingTime,
					steps: recipe.value.steps,
				})
			})
