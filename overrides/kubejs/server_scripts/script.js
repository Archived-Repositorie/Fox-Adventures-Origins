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


onEvent('recipes', event => {
	event.remove({ output: 'medievalweapons:wooden_small_axe' })
	event.remove({ output: 'medievalweapons:wooden_long_sword' })
	event.remove({ output: 'medievalweapons:wooden_dagger' })
	event.remove({ output: 'medievalweapons:wooden_francisca' })
	event.remove({ output: 'medievalweapons:wooden_big_axe' })
	event.remove({ output: 'medievalweapons:wooden_javelin' })
	event.remove({ output: 'medievalweapons:wooden_lance' })
	event.remove({ output: 'medievalweapons:wooden_healing_stuff' })
	event.remove({ output: 'medievalweapons:wooden_mace' })
	event.remove({ output: 'medievalweapons:wooden_ninjato' })

	event.shapeless('kubejs:handle', ['minecraft:stick', 'minecraft:leather', 'minecraft:string'])

	event.replaceInput([{mod:'medievalweapons'},{output:'#mambience:is_tool'},{output:'#mambience:is_sword'}], 'minecraft:stick', 'kubejs:handle')
})