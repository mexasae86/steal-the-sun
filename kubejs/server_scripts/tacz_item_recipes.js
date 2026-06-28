ServerEvents.recipes(event => {
  event.remove({ output: 'tacz:gun_smith_table' })
  event.remove({ output: 'tacz:statue' })
  event.remove({ output: 'tacz:workbench_a{"minecraft:custom_data":{BlockId:"tacz:ammo_workbench"}}' })
  event.remove({ output: 'tacz:workbench_b{"minecraft:custom_data":{BlockId:"create_armorer:create_workbench"}}'})
  event.remove({ output: 'tacz:workbench_c{"minecraft:custom_data":{BlockId:"tacz:attachment_workbench"}}' })
  // workbench_b with BlockId "create_armorer:create_workbench" intentionally NOT removed — that's create_armorer's table, shares the base item ID
})

