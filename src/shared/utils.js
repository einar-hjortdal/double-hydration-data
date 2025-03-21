import { config } from './config'

export const addTitlePostfix = (title) => {
  return `${title} | ${config.name}`
}
