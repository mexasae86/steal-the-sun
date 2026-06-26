ServerEvents.recipes(event => {
  // Remove the original CBC Cannon Welder recipe
  event.remove({ output: 'createbigcannons:cannon_welder' })

  // Original-like recipe, but lava bucket in the middle
  event.shaped(
    Item.of('createbigcannons:cannon_welder', 1),
    [
      'VI ',
      'BLB',
      ' B '
    ],
    {
      V: '#create:valve_handles',
      I: '#c:plates/iron',
      B: '#c:plates/brass',
      L: 'minecraft:lava_bucket'
    }
  ).id('kubejs:cbc_cannon_welder_with_lava')
})