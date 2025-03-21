import { hasKeys, keys } from '@dark-engine/core'

import { config } from '../config'

export const euxenite = {
  files: `${config.backendUrl}/api/euxenite/files`
}

export const api = {
  catalogRetrieve: async (filters) => {
    const buildUrl = () => {
      if (hasKeys(filters)) {
        const filterKeys = keys(filters)
        let filterString = '?'
        for (let i = 0, len = filterKeys.length; i < len; i++) {
          const filterKey = filterKeys[i]
          const filterValue = filters[filterKey]
          if (i > 0) {
            filterString = `${filterString}&`
          }
          filterString = `${filterString}${filterKey}=${filterValue}`
        }
        return `${euxenite.files}${filterString}`
      }
      return euxenite.files
    }

    const response = await fetch(buildUrl())

    if (!response.ok) {
      const body = await response.text()
      throw new Error(body) // TODO throwerror
    }

    return response.json()
  }
}
