
const charToAnsi = {
  "\u001b[0;30m": "BLK",
  "\u001b[0;31m": "RED",
  "\u001b[0;32m": "GRN",
  "\u001b[0;33m": "YEL",
  "\u001b[0;34m": "BLU",
  "\u001b[0;35m": "MAG",
  "\u001b[0;36m": "CYN",
  "\u001b[0;37m": "WHT",
  "\u001b[1;30m": "BBLK",
  "\u001b[1;31m": "BRED",
  "\u001b[1;32m": "BGRN",
  "\u001b[1;33m": "BYEL",
  "\u001b[1;34m": "BBLU",
  "\u001b[1;35m": "BMAG",
  "\u001b[1;36m": "BCYN",
  "\u001b[1;37m": "BWHT",
  "\u001b[1m": "BOLD",
  "\u001b[4;30m": "UBLK",
  "\u001b[4;31m": "URED",
  "\u001b[4;32m": "UGRN",
  "\u001b[4;33m": "UYEL",
  "\u001b[4;34m": "UBLU",
  "\u001b[4;35m": "UMAG",
  "\u001b[4;36m": "UCYN",
  "\u001b[4;37m": "UWHT",
  "\u001b[40m": "BLKB",
  "\u001b[41m": "REDB",
  "\u001b[42m": "GRNB",
  "\u001b[43m": "YELB",
  "\u001b[44m": "BLUB",
  "\u001b[45m": "MAGB",
  "\u001b[46m": "CYNB",
  "\u001b[47m": "WHTB",
  "\u001b[0;100m": "BLKHB",
  "\u001b[0;101m": "REDHB",
  "\u001b[0;102m": "GRNHB",
  "\u001b[0;103m": "YELHB",
  "\u001b[0;104m": "BLUHB",
  "\u001b[0;105m": "MAGHB",
  "\u001b[0;106m": "CYNHB",
  "\u001b[0;107m": "WHTHB",
  "\u001b[0;90m": "HBLK",
  "\u001b[0;91m": "HRED",
  "\u001b[0;92m": "HGRN",
  "\u001b[0;93m": "HYEL",
  "\u001b[0;94m": "HBLU",
  "\u001b[0;95m": "HMAG",
  "\u001b[0;96m": "HCYN",
  "\u001b[0;97m": "HWHT",
  "\u001b[1;90m": "BHBLK",
  "\u001b[1;91m": "BHRED",
  "\u001b[1;92m": "BHGRN",
  "\u001b[1;93m": "BHYEL",
  "\u001b[1;94m": "BHBLU",
  "\u001b[1;95m": "BHMAG",
  "\u001b[1;96m": "BHCYN",
  "\u001b[1;97m": "BHWHT",
  // "\\033[5m": "BLINK",
  // "\u001b[0m": "reset",
  // "\u001b[0m": "CRESET",
  // "\u001b[0m": "COLOR_RESET",
  // "\\033[0m": "BLINK_RESET",
};


function beautify() {
  const stderr = document.getElementsByClassName("stderr") 

  function beautifyStderr(element){
    // Add Color to an html element
    element.style = "border: .2rem solid red; border-radius: .4rem";

    newHTML = element.textContent;

    newHTML = newHTML.replace(/\u001b\[0m/g, '</span>' );
    newHTML = newHTML.replace(/\u001b\[32m/g,'<span style="color: green;">');  
    newHTML = newHTML.replace(/\u001b\[31m/g,'<span style="color: red;">');

    element.innerHTML = newHTML;
    return element;
  }

  for (let i = 0 ; i < stderr.length ; ++i)
    beautifyStderr(stderr[i]);
}

beautify();

