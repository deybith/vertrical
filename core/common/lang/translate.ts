import lodash  from 'lodash'
export const translate = (langSelected: Record<string, string>) => ( text: string, position: string, params?: Record<string, string>): string => {
  const where = lodash.get(langSelected, position) as unknown as Record<string, string>
  let textFound = where && where[text] || text
  if (params) {
    Object.keys(params).forEach( key => {
      textFound = textFound.replace(`{${key}}`, `${params[key]}`);
    } );
  }
  return textFound;
}

export const setLanguage = (langs: Record<string, unknown>, lang: string) => {
    const langSelected = langs[lang] as Record<string, string>

    return {
      translate: translate(langSelected)
    }
}