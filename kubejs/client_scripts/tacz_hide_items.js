// Works across JEI/EMI/REI uniformly on 1.21+
RecipeViewerEvents.removeEntries('item', event => {
  event.remove('tacz:gun_smith_table')
  event.remove('tacz:statue')
  event.remove('tacz:workbench_a{"minecraft:custom_data":{BlockId:"tacz:ammo_workbench"}}')
  event.remove('tacz:workbench_c{"minecraft:custom_data":{BlockId:"tacz:attachment_workbench"}}')
  // workbench_b/create_armorer variant left visible on purpose
})