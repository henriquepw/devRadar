/**
 * Convert string to Array of strings
 */
function parse (str: string, separator?: string) {
  return str?.split(separator || ',').map(tech => tech.trim())
}

export default parse
