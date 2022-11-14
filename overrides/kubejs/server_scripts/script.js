// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent("player.logged_in", event => {
	if(event.player.stages.has("welcome")) return;
	event.player.stages.add("welcome")
	let messages = [
		Component.gold("Welcome to our modpack!").bold(true),
		Component.gold("Before starting your journey, check out quest book!").bold(true)
	];
	
	messages.forEach(event.player.tell)

	event.player.give('minecraft:apple')
})