function parse (str: string, divider?: string) : string[] {
  return str.split(divider || ',').map(tech => tech.trim())
}

export default parse
