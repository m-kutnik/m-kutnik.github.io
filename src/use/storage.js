export const useStorage = () => {
  const get = item => {
    const value = localStorage.getItem(item)
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }
  const set = (item, value) => localStorage.setItem(item, value)

  return { get, set }
}
