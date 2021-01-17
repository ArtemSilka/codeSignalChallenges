function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
  let splitted = ip.split(".");
  if (splitted.length !== 4) return false;
  
  for (let i = 0; i < splitted.length; i++) {
    let currentElement = splitted[i];
    
    if (currentElement === "" || !currentElement.match(/^[0-9]+$/)) return false;
    let parsed = parseInt(splitted[i]);
    
    if (parsed < 0 || parsed > 255) {
      return false;
    }
  }
  return true;
}