// Strip all default-namespace guns, keep every addon gun (create_armorer, nitrogen, etc.) intact
TaCZStartupEvents.gunIndexLoad(event => {
  const id = event.getId()
  if (id.getNamespace() === 'tacz') {
    event.removeGun()
  }
})

// Strip all default-namespace ammo except 12 gauge
TaCZStartupEvents.ammoIndexLoad(event => {
  const id = event.getId()
  if (id.getNamespace() === 'tacz' && id.getPath() !== '12g') {
    event.removeAmmo()
  }
})

// Strip all default-namespace attachments, keep addon attachments (create_armorer, etc.) intact
TaCZStartupEvents.attachmentIndexLoad(event => {
  const id = event.getId()
  if (id.getNamespace() === 'tacz') {
    event.removeAttachment()
  }
})