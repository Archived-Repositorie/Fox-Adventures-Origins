// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent("player.logged_in", event => {
	if (event.player.stages.has("welcome")) return;
	event.player.stages.add("welcome")

	event.player.tell(Component.gold("Welcome to our modpack!"))
	event.player.tell(Component.gold("Before starting your journey, check out quest book!"))

	event.player.give('minecraft:apple')
})