export function useStringUtils(){
  const normalizeString = (str: string) => {
    // Normalize accents and remove special characters
    const normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Replace spaces with dashes and remove non-alphanumeric characters except dashes
    const querySafeStr = normalizedStr
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^\w-]+/g, ""); // Remove special characters

    return querySafeStr;
  };

  return {
    normalizeString,
  };
}
