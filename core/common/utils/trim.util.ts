export const trim = (text: string, character: string) => {
  const regExp = new RegExp(`^\\${character}||${character}+$`, 'g')
  return text.replace(regExp, '');
}