class Formatter {
  static capitalize(string){
  	 return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
  	 return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
  	let arr = string.split(" ")
  	let lowers = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
  	return arr.map(word => {
  		if (!lowers.includes(word) || word === arr[0]) {
  			return word.charAt(0).toUpperCase() + word.slice(1);
  		} else {
  			return word;
  		}
  	}).join(" ")
  	// for (let word of arr) {
  	// 	
  	// }
  }
}